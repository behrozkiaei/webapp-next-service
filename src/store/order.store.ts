import { getOrderById } from "@/repository/naji";
import { OrderInterface } from "@/utils/interfaces/order.interface";
import { create } from "zustand";

export interface OrderStoreInterface {
  data?: OrderInterface;
  isLoading?: boolean;
  error?: string;
  set: (key: keyof OrderStoreInterface, value: any) => void;
  get: (key: keyof OrderStoreInterface) => any;
  fetchData: (id: string, token?: string) => Promise<void>;
}

const useOrderStore = create<OrderStoreInterface>((set, get) => ({
  isLoading: false,
  error: "",
  set: (key, value) => set((state) => ({ ...state, [key]: value })),
  get: (key) => get()[key],
  fetchData: async (id, token = "") => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await getOrderById(id);

      if (res.status && res.result) {
        //save the result
        set((state) => ({ ...state, data: res.result }));
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
}));
export default useOrderStore;
