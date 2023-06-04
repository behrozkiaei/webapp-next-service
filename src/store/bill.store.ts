
import { checkBillNNotAuthed, inquiryBillAuthed, payBillAuthed, payBillNNotAuthed } from "@/repository/bill.repository";
import { AxiosDataResponse } from "@/utils/interfaces";
import { PayBillNNotAuthed } from "@/utils/interfaces/bill.interface";
import { BillPaymentResponse } from "@/utils/interfaces/bill.interface";
import { PayBillAuthed } from "@/utils/interfaces/bill.interface";
import { BillInquiryResponseRepoInterface } from "@/utils/interfaces/bill.interface";
import { BillAmountInquiryDto, CheckBillRepoResponseInterface } from "@/utils/interfaces/bill.interface";
import { create } from "zustand";

export interface BillStoreInterface {
  billCheckData?: BillInquiryResponseRepoInterface;
  orderId?: string;
  redirectUrl?: string;
  isLoading?: boolean;
  error?: string;
  set: (key: keyof BillStoreInterface, value: any) => void;
  get: (key: keyof BillStoreInterface) => any;
  inquryBill: (payload : BillAmountInquiryDto) => Promise<void>;
  checkBill: (payload : PayBillNNotAuthed) => Promise<void>;
  payBill: (payload : PayBillAuthed) => Promise<void>;
}

const useBillStore = create<BillStoreInterface>((set, get) => ({
  isLoading: false,
  error: "",
  set: (key, value) => set((state) => ({ ...state, [key]: value })),
  get: (key) => get()[key],
  inquryBill: async (payload) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await inquiryBillAuthed(payload);

      if (res.status && res.result) {
        //save the result
        set((state) => ({ ...state, billCheckData: res.result }));
      }
      console.log(res);
      return;
    } catch (e) {
      console.log(e);
    } finally {
      console.log(get());
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  checkBill :async (payload)=>{
    try {
        set((state) => ({ ...state, isLoading: true }));
        const res = await checkBillNNotAuthed(payload);
  
        if (res.status && res.result) {
          //save the result
          set((state) => ({ ...state, billCheckData: res.result }));
        }
        console.log(res);
        return;
      } catch (e) {
        console.log(e);
      } finally {
        console.log(get());
        set((state) => ({ ...state, isLoading: false }));
      }
  } ,
  payBill :async (payload)=>{
    try {
        set((state) => ({ ...state, isLoading: true }));
        const token = localStorage.getItem("token")
        let res : AxiosDataResponse<BillPaymentResponse> ; 
        if(token){
            res = await payBillAuthed(payload);
        }else{
            res = await payBillNNotAuthed(payload);

        }
  
        if (res.status && res.result && res.result.url) {
          //save the result
          set((state) => ({ ...state, redirectUrl: res.result?.url }));
        }
        if (res.status && res.result && res.result.order_id) {
            //save the result
            set((state) => ({ ...state, orderId: res.result?.order_id }));
          }
        console.log(res);
        return;
      } catch (e) {
        console.log(e);
      } finally {
        console.log(get());
        set((state) => ({ ...state, isLoading: false }));
      }
  }

}));
export default useBillStore;
