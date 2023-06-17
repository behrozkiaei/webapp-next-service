import { NajiType, PlateType } from "../enums";
import { OrderInterface } from "./order.interface";

export interface InquiryWithNoAuth {
    mobile: string;
    nationalCode: string;
    firstPart: string;
    secondPart: string;
    countryPart: string;
    charPart: string;
    type: string;
    fromWallet :boolean
  }
export interface plateData{
    
    firstPart: string,
    secondPart: string,
    countryPart: string,
    charPart: string,
    najiId: string,
    type: string,
    id? :string
      
}

export interface Plate {
  id?: string;
  najiId?: string;
  plateType?: PlateType;
  firstPart: string;
  secondPart: string;
  countryPart?: string;
  type?:PlateType
  charPart?: string;
  date?: string;
  license?: string;
  isVerified?: boolean;
  createdAt?: Date;
  complete? : boolean
  naji?: NajiUser
}



export interface DriverLicenseResponse {
  nationalCode: string;
  firstName:    string;
  lastName:     string;
  title:        string;
  rahvarStatus: string;
  barcode:      string;
  printNumber:  string;
  printDate:    string;
  validYears:   string;
}


export interface NegetivePointResponse {
  negativePoint:    string;
  isDrivingAllowed: boolean;
}

export interface ActivePlateResopnse {
  licensePlateNumber: string;
  description:        string;
  separationDate:     string;
  licensePlate:       string;
}


export interface PassportResponse {
  hasPassport:   boolean;
  hasRequest:    boolean;
  requestStatue: string;
  requestDate:   string;
  postBarcode:   string;
  passportNo:    string;
  issueDate:     string;
  expiryDate:    string;
  status:        string;
}


export interface CountryLeavingResponse {
  status: boolean;
}

export interface ViolationReportResponse {
  violations:           Violation[];
  plateDictation:       string;
  plateChar:            string;
  updateViolationsDate: string;
  inquiryDate:          string;
  inquiryTime:          string;
  priceStatus:          string;
  inquirePrice:         string;
  paperId:              string;
  paymentId:            string;
}

export interface Violation {
  violationId:           string;
  violationOccuredDate:  string;
  violationOccuredTime:  string;
  violationDeliveryType: ViolationDeliveryType;
  violationType:         ViolationType;
  finalPrice:            string;
  paperId:               string;
  paymentId:             string;
  hasImage:          boolean;
}

export interface ViolationDeliveryType {
  violationDeliveryTypeName: string;
}

export interface ViolationType {
  violationTypeId:   string;
  violationTypeName: string;
}


export interface ViolationImageResponse {
  violationId:  string;
  plateImage:   string;
  vehicleImage: string;
}

export interface ViolationAggregateResponse {
  plateChar:       string;
  complaintStatus: string;
  complaint:       string;
  priceStatus:     string;
  pageCount:       number;
  paperId:         string;
  paymentId:       string;
  price:           number;
}
export interface ViolationAggregateWithoutRegistrationResponse {
  plateChar:   string;
  priceStatus: string;
  paperId:     string;
  paymentId:   string;
  price:       number;
}
export interface NajiResponse<T>{
  data : T,
  id:string,
  RedirectURL?:string,
  order?:OrderInterface,
}

export interface DocumentStatusResponse {
  cardPrintDate:        string;
  cardPostalBarcode:    string;
  cardStatusTitle:      string;
  documentPrintDate:    string;
  documentPostalBarcod: string;
  documentStatusTitle:  string;
  plateChar:            string;
}


export interface NajiUser{
  id  :   string 
  najiId?: string
  userPlates?:plateData
  nationalCode? :string
  nationalCodeVerified? :boolean 
  mobile?: string
  driverLicenseCode?: string
  date? :string
  name?: string
}

export interface  NajiInquiryResult{
  id:     string 
  date? :string
  data?: string
  type :NajiType
  status? :Boolean
  paid?: Boolean
  naji : NajiUser
  order : any
  plate : Plate
}


export type QueryModeType =
  | "passport-status"
  | "country-leaving-status"
  | "active-plates"
  | "document"
  | "passport"

  | "khalafi"
  | "";