import { Request, Response } from "express";
import { IDonation } from "../interfaces/DonationInterface";
import { DonationService } from "../services/DonationService";

const donationService = new DonationService();
class DonationController {
  async create(req: Request, res: Response): Promise<void> {
    const objDonationRequest = req.body;

    try {
      const donation: IDonation = { ...objDonationRequest };
      const donationSave = await donationService.create(donation);
      res.status(200).send(donationSave);
    } catch (error) {
      console.log("error", error);
      res.status(400).json({ Error: error });
    }
  }
}

export { DonationController };
