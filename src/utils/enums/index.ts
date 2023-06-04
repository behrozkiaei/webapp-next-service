

export enum LoginMode {
    MOBILE="MOBILE",
    CODE="CODE",
    MOBILE_WITH_NATIONAL="MOBILE_WITH_NATIONAL",
    REGISTER_NAJI_TOKEN_BUT_AUTHED="REGISTER_NAJI_TOKEN_BUT_AUTHED"
  }

  export enum NajiType {
    DRIVING_LICENSE = 'DRIVING_LICENSE',
    NEGETIVE_POINT = 'NEGETIVE_POINT',
    ACTIVE_PLATES = 'ACTIVE_PLATES',
    PASSPORT_STATUS = 'PASSPORT_STATUS',
    COUNTRY_LEAVING = 'COUNTRY_LEAVING',
    VIOLATION_REPORT = 'VIOLATION_REPORT',
    VIOLATION_IMAGE = 'VIOLATION_IMAGE',
    VIOLATION_AGGREGATE = 'VIOLATION_AGGREGATE',
    VIOLATION_AGGREGATE_NO_AUTH = 'VIOLATION_AGGREGATE_NO_AUTH',
    DOCUMENT_STATUS = 'DOCUMENT_STATUS',
  }
  
  export enum PlateType {
    MOTOR = 'MOTOR',
    CAR = 'CAR',
  }
  export enum NajiUiState {
    confirmNationAndMobileState= "confirmNationAndMobileState",
    confirmNationAndMobileStateCode= "confirmNationAndMobileStateCode" ,
    selectedPlate= "selectedPlate",
    checkMobileAndNationalCodeExist= "checkMobileAndNationalCodeExist",
    
  }

  export enum OtpType {
    Login = 'Login',
    RessetPass = 'RessetPass',
    Payment = 'Payment',
  }