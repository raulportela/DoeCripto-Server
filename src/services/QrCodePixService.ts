import { GNRequest } from "@src/api/gerenciaNet/Gerencianet";

const reqGNAlready = GNRequest({
  clientID: process.env.GN_CLIENT_ID,
  clientSecret: process.env.GN_CLIENT_SECRET,
});

class CreateQrCodePixService {
  async createCharge(coinQuantity: string, personKeyReceiveValue: string) {
    const reqGN = await reqGNAlready;

    const dataCharge = {
      calendario: {
        expiracao: 3600,
      },
      valor: {
        original: coinQuantity,
      },
      chave: personKeyReceiveValue,
      solicitacaoPagador: "Obrigado .",
    };

    return await reqGN.post("/v2/cob", dataCharge);
  }

  async generateQrCode(locationChargeId) {
    const reqGN = await reqGNAlready;

    const qrcodeResponse = await reqGN.get(
      `/v2/loc/${locationChargeId}/qrcode`
    );

    return qrcodeResponse.data;
  }
}

export { CreateQrCodePixService };
