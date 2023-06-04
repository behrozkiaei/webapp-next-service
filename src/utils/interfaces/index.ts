import { OtpType } from "../enums";

export interface InputCallback {
  value?: string;
  hasError?: boolean;
}

export interface AxiosDataResponse<T> {
  message?: string;
  result?: T ;
  status:boolean
}
export interface QueryWithPlateId {
  plateId: string;
  fromWallet: boolean;
}
export interface ViolationQuery extends QueryWithPlateId {
  violationId: string;
}

export interface QueryWithNajiId {
    najiId: string;
    fromWallet: boolean;
  }
  export interface QueryLiceseNegetivePoint extends QueryWithNajiId{ 
    driverLicenseNumber:string
  }

  export interface AuthResult{
    token :string,
    uid?:string,
    userId :string,
    otpType : OtpType
  }

  export interface User {
    id: string;
    mobile: string;
    name: string;
    status: string;
    active: boolean;
    verified: boolean;
    date: string;
    password: string;
    password2: string;
    loginTime: string;
    otpType: string;
    otpDate: string;
    nationalCode: string;
    Wallet: Wallet;
}

export interface Wallet {
    id?: string;
    userId?: string;
    name: any;
    amount?: string;
    walletCode?: string;
    walletType?: string;
    createdAt?: string;
    updatedAt?: string;
    date?: string;
}