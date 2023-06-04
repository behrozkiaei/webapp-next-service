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
    billByCredit = 'billByCredit',
    billByWallet = 'billByWallet',
    internetByWallet = 'internetByWallet',
    internetByCredit = 'internetByCredit',
    chargeByWallet = 'chargeByWallet',
    chargeByCredit = 'chargeByCredit',
    walletToWallet = 'walletToWallet', //done
    increaseWallet = 'increaseWallet', // done
    creditToOtherWallet = 'creditToOtherWallet',
    DRIVING_LICENSE_BY_WALLET = 'DRIVING_LICENSE_BY_WALLET',
    DRIVING_LICENSE_BY_CREDIT = 'DRIVING_LICENSE_BY_CREDIT',
    NEGETIVE_POINT_BY_WALLET = 'NEGETIVE_POINT_BY_WALLET',
    NEGETIVE_POINT_BY_CREDIT = 'NEGETIVE_POINT_BY_CREDIT',
    ACTIVE_PLATES_BY_WALLET = 'ACTIVE_PLATES_BY_WALLET',
    ACTIVE_PLATES_BY_CREDIT= 'ACTIVE_PLATES_BY_CREDIT',
    PASSPORT_STATUS_BY_WALLET = 'PASSPORT_STATUS_BY_WALLET',
    PASSPORT_STATUS_BY_CREDIT = 'PASSPORT_STATUS_BY_CREDIT',
    COUNTRY_LEAVING_BY_WALLET = 'COUNTRY_LEAVING_BY_WALLET',
    COUNTRY_LEAVING_BY_CREDIT = 'COUNTRY_LEAVING_BY_CREDIT',
    VIOLATION_REPORT_BY_WALLET = 'VIOLATION_REPORT_BY_WALLET',
    VIOLATION_REPORT_BY_CREDIT = 'VIOLATION_REPORT_BY_CREDIT',
    VIOLATION_IMAGE_BY_WALLET = 'VIOLATION_IMAGE_BY_WALLET',
    VIOLATION_IMAGE_BY_CREDIT = 'VIOLATION_IMAGE_BY_CREDIT',
    VIOLATION_AGGREGATE_BY_WALLET = 'VIOLATION_AGGREGATE_BY_WALLET',
    VIOLATION_AGGREGATE_BY_CREDIT = 'VIOLATION_AGGREGATE_BY_CREDIT',
    VIOLATION_AGGREGATE_NO_AUTH_BY_CREDIT = 'VIOLATION_AGGREGATE_NO_AUTH_BY_CREDIT',
    DOCUMENT_STATUS_BY_WALLET = 'DOCUMENT_STATUS_BY_WALLET',
    DOCUMENT_STATUS_BY_CREDIT = 'DOCUMENT_STATUS_BY_CREDIT',
  }