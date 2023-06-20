import { OrderType } from "./order.interface";

export interface Order {
    id: string;
    type: OrderType;
    amount: number;
    commission: number;
    userId: string;
    date: string;
    title?: string;
    subTitle?: string;
    avatar?: string;
    isPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
    datePaid?: string;
    data1?: string;
    data2?: string;
    data3?: string;
    data4?: string;
    payload?: string;
}

export interface Transaction {
    id: string;
    destWalletId?: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    date: string;
    resnum?: string;
    rrn?: string;
    traceNum?: string;
    isPaid: boolean;
    securePan: string;
    datePaid?: string;
    card_pan?: string;
    ref_id?: number;
    fee_type?: string;
    fee?: number;
    order: Order;
    orderId: string;
}
