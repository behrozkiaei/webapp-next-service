import { addCommas } from "@persian-tools/persian-tools";
import { BillType } from "../interfaces/bill.interface";

export const translateKey = (key: string): string => {
  const translations: { [key: string]: string } = {
    bill_type: "نوع قبض",
    mobile: "موبایل",
    operator: "اپراتور",
    period: "دوره",
    phone: "تلفن",
    bill_id: "شناسه قبض",
    participate_code: "کد شرکت",
    payId: "شناسه پرداخت",
    pay_id: "شناسه پرداخت",
    billId: "شناسه قبض",
    frmoWallet: "از کیف پول",
    code: "وضعیت استعلام",
    msg: "پیام",
    type_en: "نوع (انگلیسی)",
    type_fa: "نوع (فارسی)",
    amount: "مقدار",
    pay_type: "نوع پرداخت",
    orderId: "شناسه سفارش",
    url: "لینک",
    ref_code: "کد ارجاع",
    order_id: "شناسه سفارش",
    water: "آب",
    elec: "برق",
    gas: "گاز",
    city: "شهر",
    tax: "مالیات",
    traffic_fines: "جرائم ترافیکی",
    online: "آنلاین",
    credit: "اعتباری",
    mid: "میانه",
    final: "نهایی",
    nationalCode: "کد ملی",
    firstName: "نام",
    lastName: "نام خانوادگی",
    title: "عنوان",
    rahvarStatus: "وضعیت راهور",
    barcode: "بارکد",
    printNumber: "شماره چاپ",
    printDate: "تاریخ چاپ",
    validYears: "سال های معتبر",
    negativePoint: "امتیاز منفی",
    isDrivingAllowed: "رانندگی مجاز است؟",
    icensePlateNumber: "شماره پلاک",
    escription: "شرح",
    eparationDate: "تاریخ جدایی",
    icensePlate: "پلاک خودرو",
    asPassport: "دارای گذرنامه",
    asRequest: "درخواست دارد",
    equestStatue: "وضعیت درخواست",
    equestDate: "تاریخ درخواست",
    ostBarcode: "بارکد پستی",
    assportNo: "شماره گذرنامه",
    sueDate: "تاریخ صدور",
    xpiryDate: "تاریخ انقضاء",
    status: "وضعیت",
    violations: "تخلفات",
    plateDictation: "شماره گویای پلاک",
    plateChar: "حرف پلاک",
    updateViolationsDate: "تاریخ بروزرسانی تخلفات",
    inquiryDate: "تاریخ استعلام",
    inquiryTime: "زمان استعلام",
    priceStatus: "وضعیت بدهی",
    inquirePrice: "مبلغ جریمه به ریال",
    paperId: "شناسه قبض",
    paymentId: "شناسه پرداخت",
    violationId: "شناسه تخلف",
    finalPrice: "مبلغ جریمه به ریال",
    violationAddress: "مکان تخلف",
    violationOccuredDate : "تاریخ ثبت خلافی" ,
    violationDeliveryTypeName: "نوع ثبت تخلف",
    violationOccuredTime: "زمان ثبت تخلف",
    hasImage: "دارای عکس",
    iolationOccuredDate: "تاریخ وقوع تخلف",
    iolationOccuredTime: "زمان وقوع تخلف",
    iolationDeliveryType: "نوع ارسال تخلف",
    iolationType: "نوع تخلف",
    inalPrice: "قیمت نهایی",
    iolationDeliveryTypeName: "نام نوع ارسال تخلف",
    violationTypeId: "شناسه نوع تخلف",
    violationTypeName: "نام نوع تخلف",
    plateImage: "تصویر پلاک",
    vehicleImage: "تصویر خودرو",
    complaintStatus: " شرح وضعیت شکایت",
    complaint: "شکایت",
    pageCount: "تعداد صفحات",
    price: "قیمت به ریال",
    cardPrintDate: "تاریخ چاپ کارت",
    cardPostalBarcode: "بارکد پستی کارت",
    cardStatusTitle: "عنوان وضعیت کارت",
    ocumentPrintDate: "تاریخ چاپ سند",
    ocumentPostalBarcod: "بارکد پستی سند",
    ocumentStatusTitle: "عنوان وضعیت سند",
    serial: "شماره سریال",
    licensePlateNumber: "شماره پلاک",
    description: "توضیحات",
    separationDate: "تاریخ",
    licensePlate: "پلاک",
    isPersonFound : "شخص پیدا شده است؟",
    expiryDate: "تاریخ انقضا",
    issueDate: "تاریخ درخواست",
    passportNo: "شماره پاسپورت",
    postBarcode: "بارکد پاسپورت",
    requestDate: "تاریخ درخواست",
    requestStatue: "وضعیت",
    hasRequest: "درخواست داده شده؟",
    hasPassport: "پاسپورت دارد؟",

  };

  return translations[key] || key;
};
export const isBillType = (value: unknown): value is BillType => {
  return Object.values(BillType).includes(value as BillType);
};

export const responseValueToFaKey = (
  key: any,
  value: any
): string | number | boolean => {
  let translatedValue: string;
  let res = value;
  if (key == "status" || key == "Status") {
    if (value == true || value == "true" || value == "True") {
      res = "فعال";
    }
    if (value == false || value == "false" || value == "False") {
      res = "غیر فعال ";
    }
  }
  if (key == 'hasImage') {
    if (value == true || value == 'true') {
      res = 'دارای عکس';
    } else {
      res = 'فاقد عکس';
    }
  }
  if (
    key.includes('price') ||
    key.includes('inquirePrice') ||
    key.includes('finalPrice') ||
    key.includes('Price') ||
    key.includes('Amount') ||
    key.includes('amount')
  ) {
    res = addCommas(value.toString());
  }
  if (
    key.includes('priceStatus') 
  ) {
    res = value == "1" ? "پرداخت نشده": "پرداخت شده";
  }
  if (
    key == ('complaint') 
  ) {
    res = value == "0" ? "شکایتی نشده": "شکایت شده";
  }
  return res;
};
