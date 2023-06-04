export interface InternetDto {
  product_id: string;
  operator: string;
  mobile: string;
  sim_type: string;
  fromWallet: boolean;
}

export interface chargeDto {
  fromWallet: boolean;
  operator: string;
  amount: string;
  mobile: string;
  charge_type: string;
}
export interface InternetPackageInterface {
    name: string;
    amount: number;
    amountRial: number;
    simType: string;
    internetType: string;
    valueOperator: string;
    days: number;
    volume: number;
    unit: string;
    course: string;
    courseRange: string;
    productId: number;
    date: Date;
  }
  