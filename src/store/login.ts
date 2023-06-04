import IncreaseAmount from "@/components/increse-amount/increase-amount";
import { IncreaseAount } from "@/repository/login";
import { User } from "@/utils/interfaces";
import { StringMappingType } from "typescript";
import { create } from "zustand";

interface Payload {
  mobile: String;
  nationalCode?: string;
}

export interface StoreState {
  payload: any;
  isLoggedIn: boolean;
  result?: User;
  isLoading: boolean;
  error: string;
  redirectUrl ?:string,
  set: (key: keyof StoreState, value: any) => void;
  get: (key: keyof StoreState) => any;
  increaseWalletAmount: (
    amount: string,
  ) => Promise<void>;
}

const useAuthStore = create<StoreState>((set, get) => ({
  payload: null,
  isLoading: false,
  isLoggedIn: false,
  error: "",
  set: (key, value) => set((state) => ({ ...state, [key]: value })),
  get: (key) => get()[key],
  increaseWalletAmount : async (amount:string)=>{
    try {
      set((state) => ({ ...state, isLoading: true  }));
      const res = await IncreaseAount(
        amount
      );
      console.log(res);
      set((state) => ({
        ...state,
        redirectUrl: res.result?.RedirectURL
      }));
     
      console.log(get());
    } catch (e) {
      console.log(e);
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  }
}));

export default useAuthStore;

//   const { payload, result, isLoading, error, set, get } = useStore();
// Update the values of payload, result, isLoading, and error
//   set('payload', newValue);
//   set('result', newResult);
//   set('isLoading', true);
//   set('error', 'An error occurred');

// Retrieve the values of payload, result, isLoading, and error
//   const currentPayload = get('payload');
//   const currentResult = get('result');
//   const currentIsLoading = get('isLoading');
//   const currentError = get('error');
