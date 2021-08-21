export interface IDonation {
  id?: string;
  institutionId: string;
  isAnonymousDonation: boolean;
  name?: string;
  email?: string;
  quantityCoin: string;
  currencyValue: string;
  totalValue: string;
  addresseePix: string;
}
