import { IDonation } from "@interfaces/DonationInterface";
import { getCustomRepository } from "typeorm";
import { DonationsRepository } from "@src/repositories/DonationsRepository";
import { CreateQrCodePixService } from "./QrCodePixService";
import { InstitutionRepository } from "@src/repositories/InstitutionRepository";
import { MarginGainService } from "./MarginGainService";
import { AppError } from "@src/errors/AppError";

const createQrCodePixService = new CreateQrCodePixService();
const marginGainService = new MarginGainService();

class DonationService {
  async create(donationParam: IDonation): Promise<any> {
    const donationRepository = getCustomRepository(DonationsRepository);
    const institutionRepository = getCustomRepository(InstitutionRepository);

    const {
      isAnonymousDonation,
      name,
      email,
      quantityCoin,
      //currencyValue,
      //totalValue,
      institutionId,
    } = donationParam;

    const adminsMarginGain = await marginGainService.get(20);
    let donationTotalValue =
      parseFloat(adminsMarginGain) * parseFloat(quantityCoin);
    const personKeyReceiveValue = "71cdf9ba-c695-4e3c-b010-abb521a3f1be";

    const institution = await institutionRepository.findOne(institutionId);

    if (!institution) {
      console.log("InstitutionId is empty");
      throw new AppError(
        "Erro interno com propriedade do banco de dados, contate o administrador"
      );
    }

    const createCharge = await createQrCodePixService.createCharge(
      donationTotalValue.toString(),
      personKeyReceiveValue
    );

    const createQRCode = await createQrCodePixService.generateQrCode(
      createCharge.data.loc.id
    );

    try {
      const donation = donationRepository.create({
        isAnonymousDonation,
        name,
        email,
        quantityCoin: 2,
        institutionId: institution,
      });

      if (donation) {
        await donationRepository.save(donation);
        let donationWithQRCode = { donation, createQRCode };
        return donationWithQRCode;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export { DonationService };
