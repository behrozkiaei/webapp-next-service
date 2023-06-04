import IncreaseAmount from "@/components/increse-amount/increase-amount";
import { IncreaseAount } from "@/repository/login";
import { User } from "@/utils/interfaces";
import { StringMappingType } from "typescript";
import { create } from "zustand";



export interface useStateStoreInterface {
  isBottomSheetOpen?: boolean;
  set: (key: keyof useStateStoreInterface, value: any) => void;
  get: (key: keyof useStateStoreInterface) => any;
}

const useStateStore = create<useStateStoreInterface>((set, get) => ({
  isBottomSheetOpen: false,
  set: (key, value) => set((state) => ({ ...state, [key]: value })),
  get: (key) => get()[key],
}));

export default useStateStore;

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
