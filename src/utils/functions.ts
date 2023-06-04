import { PlateType } from "./enums";
import { Plate } from "./interfaces/naji.interface";

export const plateChartoDigit = (char:string) =>{
    switch (char) {
      case 'ب':
        return '02';
        break;
      case 'ت':
        return '03';
        break;
      case 'ج':
        return '04';
        break;
      case 'د':
        return '05';
        break;
      case 'س':
        return '06';
        break;
      case 'ص':
        return '07';
        break;
      case 'ط':
        return '08';
        break;
      case 'ع':
        return '09';
        break;
      case 'ق':
        return '10';
        break;
      case 'ل':
        return '11';
        break;
      case 'م':
        return '12';
        break;
      case 'ن':
        return '13';
        break;
      case 'و':
        return '14';
        break;
      case 'ه':
        return '15';
        break;
      case 'ی':
        return '16';
        break;
      case 'ژ':
        return '19';
        break;

      default:
        break;
    }
  }

//   export const lateLicenseMake = (plate:Plate)=>{
//     let license;
//     // if (plate.type == PlateType.CAR) {
//       const charDigit = plateChartoDigit(plate!.charPart);
//       license = `${plate.countryPart}${charDigit}${plate.firstPart}${plate.secondPart}`;
//       return license;
//     // }
//     // if (plate?.type == PlateType.MOTOR) {
//     //   license = `08${plate.firstPart}${plate.secondPart}000`;
//     // }
//   }