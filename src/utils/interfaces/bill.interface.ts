import { OperatorShortName } from "../enums/charge-internet";
import { OperatorType } from "../enums/charge-internet";

export interface BillAmountInquiryDto {
  bill_type: BillType;
  mobile?: string;
  operator?: OperatorShortName;
  period?: Period;
  phone?: string;
  bill_id?: string;
  participate_code?: string;
}

export interface PayBillAuthed {
  payId: string;
  billId: string;
  frmoWallet: boolean;
}
export interface PayBillNNotAuthed {
    payId: string;
    billId: string;
  }

export interface CheckBillRepoResponseInterface {
  code: string;
  msg: string;
  type_en: TypeBill;
  type_fa: string;
  amount: number;
  pay_type: Paytype;
}

export interface BillInquiryResponseRepoInterface {
  code?: string;
  msg?: string;
  amount?: number; // میزان بدهی سیم کارت به تومان
  bill_id?: number; //شناسه قبض
  pay_id?: number; //شناسه پرداخت
  orderId?: string;
}

export interface BillPaymentResponse {
  code?: string; // 1 is success
  pay_type?: Paytype;
  url?: string; // لینک پرداخت آنلاین (در صورتی که pay_type برابر online باشد)
  ref_code?: number;
  order_id?: string;
}

export enum TypeBill {
  water = "water",
  elec = "elec",
  gas = "gas",
  phone = "phone",
  mobile = "mobile",
  city = "city",
  tax = "tax",
  traffic_fines = "traffic_fines",
}

export enum Paytype {
  online = "online",
  credit = "credit",
}

export enum BillType {
  mobile = "mobile",
  phone = "phone",
  elec = "elec",
  gas = "gas",
  water = "water",
}
export enum Period {
  mid = "mid",
  final = "final",
}
export enum PaymnetRemoteMethod {
  inquiry_bill = "inquiry_bill",
  bill = "bill",
  check_bill = "check_bill",
}
export interface redirectUrl {
  redirectUrl: string;
}


