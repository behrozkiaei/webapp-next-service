export interface OrderInterface {
  id?: string;
  transaction?: any;
  type?: OrderType;
  amount?: number;
  user?: any;
  userId?: string;
  desc?: keyValueInterface[];
  date?: string;
  title?: string;
  subTitle?: string;
  avatar?: string;
  isPaid?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  datePaid?: string;
  data1?: string;
  data2?: string;
  data3?: string;
  data4?: string;
  payload?: string;
}

export interface keyValueInterface {
  id?: string;
  key: string;
  key_en?: string;
  value: string;
  orderId?: string;
}

export enum OrderType {
  internetByWallet = "internetByWallet",
  internetByCredit = "internetByCredit",
  chargeByWallet = "chargeByWallet",
  chargeByCredit = "chargeByCredit",
  walletToWallet = "walletToWallet", //done
  increaseWallet = "increaseWallet", // done
  creditToOtherWallet = "creditToOtherWallet",
  DRIVING_LICENSE_BY_WALLET = "DRIVING_LICENSE_BY_WALLET",
  DRIVING_LICENSE_BY_CREDIT = "DRIVING_LICENSE_BY_CREDIT",
  NEGETIVE_POINT_BY_WALLET = "NEGETIVE_POINT_BY_WALLET",
  NEGETIVE_POINT_BY_CREDIT = "NEGETIVE_POINT_BY_CREDIT",
  ACTIVE_PLATES_BY_WALLET = "ACTIVE_PLATES_BY_WALLET",
  ACTIVE_PLATES_BY_CREDIT = "ACTIVE_PLATES_BY_CREDIT",
  PASSPORT_STATUS_BY_WALLET = "PASSPORT_STATUS_BY_WALLET",
  PASSPORT_STATUS_BY_CREDIT = "PASSPORT_STATUS_BY_CREDIT",
  COUNTRY_LEAVING_BY_WALLET = "COUNTRY_LEAVING_BY_WALLET",
  COUNTRY_LEAVING_BY_CREDIT = "COUNTRY_LEAVING_BY_CREDIT",
  VIOLATION_REPORT_BY_WALLET = "VIOLATION_REPORT_BY_WALLET",
  VIOLATION_REPORT_BY_CREDIT = "VIOLATION_REPORT_BY_CREDIT",
  VIOLATION_IMAGE_BY_WALLET = "VIOLATION_IMAGE_BY_WALLET",
  VIOLATION_IMAGE_BY_CREDIT = "VIOLATION_IMAGE_BY_CREDIT",
  VIOLATION_AGGREGATE_BY_WALLET = "VIOLATION_AGGREGATE_BY_WALLET",
  VIOLATION_AGGREGATE_BY_CREDIT = "VIOLATION_AGGREGATE_BY_CREDIT",
  VIOLATION_AGGREGATE_NO_AUTH_BY_CREDIT = "VIOLATION_AGGREGATE_NO_AUTH_BY_CREDIT",
  DOCUMENT_STATUS_BY_WALLET = "DOCUMENT_STATUS_BY_WALLET",
  DOCUMENT_STATUS_BY_CREDIT = "DOCUMENT_STATUS_BY_CREDIT",
  BILL_AMOUNT_INQUIRY_BY_CREDIT = "BILL_AMOUNT_INQUIRY_BY_CREDIT",
  BILL_PAYMENT_BY_CREDIT = "BILL_PAYMENT_BY_CREDIT",
  BILL_PAYMENT_BY_WALLET = "BILL_PAYMENT_BY_WALLET",
}

export const  translateOrderType = (key: OrderType): string => {
  let translation = "";
  switch (key) {
    case OrderType.internetByWallet:
      translation = "خرید اینترنت با اعتبار ولت";
      break;
    case OrderType.internetByCredit:
      translation = "خرید اینترنت با کارت بانکی";
      break;
    case OrderType.chargeByCredit:
      translation = "خرید شارژ با کارت بانکی";
      break;
    case OrderType.chargeByWallet:
      translation =  "خرید شارژ با اعتبار ولت";
      break;
    case OrderType.walletToWallet:
      translation = "انتقال موجودی ولت";
      break;
    case OrderType.increaseWallet:
      translation = "افزایش اعتبار";
      break;
    case OrderType.creditToOtherWallet:
      translation = "انتقال پول از کارت به اعتبار دیگران";
      break;
    case OrderType.DRIVING_LICENSE_BY_WALLET:
      translation = "استعلام گواهینامه با ولت";
      break;
    case OrderType.DRIVING_LICENSE_BY_CREDIT:
      translation = "استعلام گواهینامه با کارت بانکی";
      break;
    case OrderType.NEGETIVE_POINT_BY_WALLET:
      translation = "استعلام گواهینامه با  موجودی ولت";
      break;
    case OrderType.NEGETIVE_POINT_BY_CREDIT:
      translation = "استعلام سند با کارت بانکی";
      break;
    case OrderType.ACTIVE_PLATES_BY_WALLET:
      translation = "استعلام پلاک فعال با موجودی ولت";
      break;
    case OrderType.ACTIVE_PLATES_BY_CREDIT:
      translation = "استعلام سند با کارت بانکی";
      break;
    case OrderType.PASSPORT_STATUS_BY_WALLET:
      translation = "استعلام وضعیت گذرنامه با اعتبار ولت";
      break;
    case OrderType.PASSPORT_STATUS_BY_CREDIT:
      translation = "استعلام وضعیت گذرنامه با کارت بانکی";
      break;
    case OrderType.COUNTRY_LEAVING_BY_WALLET:
      translation = "استعلام وضعیت خروج با اعتبار کیف پول";
      break;
    case OrderType.COUNTRY_LEAVING_BY_CREDIT:
      translation = "استعلام وضعیت خروج با کارت بانکی ";
      break;
    case OrderType.VIOLATION_REPORT_BY_WALLET:
      translation = "استعلام تخلفات رانندگی با اعتبار کیف پول";
      break;
    case OrderType.VIOLATION_REPORT_BY_CREDIT:
      translation = "استعلام تخلفات رانندگی با کارت بانکی";
      break;
    case OrderType.VIOLATION_IMAGE_BY_WALLET:
      translation = "استعلام عکس تخلف با اعتبار کیف پول";
      break;
    case OrderType.VIOLATION_IMAGE_BY_CREDIT:
      translation = "استعلام عکس تخلف با کارت بانکی";
      break;
    case OrderType.VIOLATION_AGGREGATE_BY_WALLET:
      translation = "استعلام تجمیعی تخلفات با اعتبار کیف پول";
      break;
    case OrderType.VIOLATION_AGGREGATE_BY_CREDIT:
      translation = "استعلام تجمیعی تخلفات با کارت بانکی";
      break;
    case OrderType.DOCUMENT_STATUS_BY_WALLET:
      translation = "استعلام وضعیت سند خودرو با اعتبار کیف پول";
      break;
    case OrderType.DOCUMENT_STATUS_BY_CREDIT:
      translation = "استعلام وضعیت سند خودرو با کارت بانکی";
      break;
    case OrderType.BILL_AMOUNT_INQUIRY_BY_CREDIT:
      translation = "استعلام قبض با اعتبار کیف پول";
      break;
    case OrderType.BILL_PAYMENT_BY_WALLET:
      translation = "پرداخت قبض با اعتبار کیف پول";
      break;
    case OrderType.BILL_PAYMENT_BY_CREDIT:
      translation = "پرداخت قبض با اعتبار کیف پول";
      break;
    // Add other cases here
    default:
      translation = "Translation not found";
  }
  return translation;
}
