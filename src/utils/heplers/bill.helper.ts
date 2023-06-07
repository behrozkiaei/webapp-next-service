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
  };

  return translations[key] || key;
};
export const isBillType = (value: unknown): value is BillType => {
  return Object.values(BillType).includes(value as BillType);
};

export const responseValueToFaKey = (
  key: any,
  value: any,
): string | number|boolean=> {
  let translatedValue: string;
  let res = value;
  if (key == 'status' || key == 'Status') {
    if (value == true || value == 'true' || value == 'True') {
      res = 'فعال';
    }
    if (value == false || value == 'false' || value == 'False') {
      res = 'غیر فعال ';
    }
  }
  if(key.includes('price') || key.includes("Price") || key.includes("Amount") || key.includes("amount")){
    res = addCommas(value.toString()) + " تومان "
  }
  if (key.includes('code')) {
    res = value == 1 ? 'موفق' : 'ناموفق';
  }
  return res;
};