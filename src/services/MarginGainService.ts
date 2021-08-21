import CoinGecko from "coingecko-api";

class MarginGainService {
  async get(value: number): Promise<string> {
    const coinGecko = new CoinGecko();

    const valueCoin = await coinGecko.simple.price({
      ids: "cashhand",
      vs_currencies: "BRL",
    });

    /**
     * Calc markup
     *  priceCoin
     *  markup = reverse percent / Ex.: case you want to 10% gain, it should calc (100 / 0.90 = 1.25) Gain = 111,11
     *  marginGain
     **/
    let priceCoin = valueCoin.data.cashhand.brl;
    let valuePercent = (100 - value) / 100;
    let marginGain = priceCoin / valuePercent;

    return marginGain.toFixed(2).toString();
  }
}

export { MarginGainService };
