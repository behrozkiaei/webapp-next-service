import { addCommas, phoneNumberDetail } from "@persian-tools/persian-tools";
import {
  OperatorColors,
  OperatorType,
  SimTypes,
} from "../enums/charge-internet";
import { Irancell } from "@persian-tools/persian-tools/build/modules/phoneNumber/utils";

export const findOperator = (mobile: string) => {
  const detail = phoneNumberDetail(mobile) as any;
  console.log(detail);
  if (detail?.operator != undefined) {
    const operator = detail?.operator;

    if (operator.includes("همراه اول")) {
      return {
        index: 0,
        operator: OperatorType.Hamrah,
        type: detail?.type?.includes("credit") ? 0 : 1,
        color: OperatorColors.Hamrah,
      };
    }
    if (operator.includes("ایرانسل")) {
      console.log("include irancel");
      return {
        index: 1,
        operator: OperatorType.Irancel,
        type: detail?.type?.includes("credit") ? 0 : 1,
        color: OperatorColors.Irancel,
      };
    }
    if (operator.includes("رایتل")) {
      return {
        index: 2,
        operator: OperatorType.Rightel,
        type: detail?.type?.includes("credit") ? 0 : 1,
        color: OperatorColors.Rightel,
      };
    }
    return {
      index: 0,
      operator: OperatorType.Hamrah,
      type: 0,
      color: OperatorColors.Hamrah,
    };
  }
};

export const toShortOperatorName = (operator: string) => {
  switch (operator) {
    case OperatorType.Hamrah:
      return "MCI";
      break;
    case OperatorType.Irancel:
      return "MCI";
      break;
    case OperatorType.Rightel:
      return "RTL ";
      break;
    default:
      return "";
      break;
  }
};
export const simTypes = [
  {
    content: "اعتباری",
    color: "lightblue",
    value: SimTypes.ETEBARI,
  },
  {
    content: "دائمی",
    color: "lightblue",
    value: SimTypes.DAEMI,
  },
];
export const operatorType = [
  {
    content: "همراه اول",
    color: OperatorColors.Hamrah,
    value: OperatorType.Hamrah,
  },
  {
    content: "ایرانسل",
    color: OperatorColors.Irancel,
    value: OperatorType.Irancel,
  },
  {
    content: "رایتل",
    color: OperatorColors.Rightel,
    value: OperatorType.Rightel,
  },
];
export const amountBaseOnOperator = (operator :string)=>{
  switch (operator) {
    case OperatorType.Hamrah:
      return amountsHamrah;
      break;
    case OperatorType.Irancel:
      return amountsIranncel;
      break;
    case OperatorType.Rightel:
      return amountsRightel;
      break;
    default:
      return amountsHamrah;
      break;
  }
}
export const amounts = [
  {
    content: addCommas(2000),
    color: "lightBlue",
    value: "2000",
  },
  {
    content: addCommas(5000),
    color: "lightBlue",
    value: "5000",
  },
  {
    content: addCommas(10000),
    color: "lightBlue",
    value: "10000",
  },
  {
    content: addCommas(20000),
    color: "lightBlue",
    value: "20000",
  },
];
export const amountsIranncel = [
  {
    content: addCommas(1000),
    color: OperatorColors.Irancel,
    value: "1000",
  },
  {
    content: addCommas(2000),
    color: OperatorColors.Irancel,
    value: "2000",
  },
  {
    content: addCommas(5000),
    color: OperatorColors.Irancel,
    value: "5000",
  },
  {
    content: addCommas(10000),
    color: OperatorColors.Irancel,
    value: "10000",
  },
  {
    content: addCommas(20000),
    color: OperatorColors.Irancel,
    value: "20000",
  },
];
export const amountsHamrah = [
  {
    content: addCommas(5000),
    color: OperatorColors.Hamrah,
    value: "5000",
  },
  {
    content: addCommas(1000),
    color: OperatorColors.Hamrah,
    value: "10000",
  },
  {
    content: addCommas(20000),
    color: OperatorColors.Hamrah,
    value: "20000",
  },
];
export const amountsRightel = [
  {
    content: addCommas(2000),
    color: OperatorColors.Rightel,
    value: "2000",
  },
  {
    content: addCommas(5000),
    color: OperatorColors.Rightel,
    value: "5000",
  },
  {
    content: addCommas(10000),
    color: OperatorColors.Rightel,
    value: "10000",
  },
  {
    content: addCommas(20000),
    color: OperatorColors.Hamrah,
    value: "20000",
  },
];
export const packages = [
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
  {
    id: "1",
    title: "1 ساعته 1.5 گیگ",
    amount: addCommas(2000),
  },
];
