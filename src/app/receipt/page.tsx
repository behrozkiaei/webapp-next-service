"use client";
// import ReceiptDetails from "@/components/receipt/receipt-component";
import ReceiptSkeleton from "@/components/receipt/receipt-skeleton";
import { OrderInterface, OrderType } from "@/utils/interfaces/order.interface";

import "@/globals.css";
import ReceiptDetails from "@/components/receipt/receipt-component";

import { useEffect, useState } from "react";
import useOrderStore from "@/store/order.store";
const receiptC: OrderInterface = {

  type: OrderType.ACTIVE_PLATES_BY_CREDIT,
  amount: 100.0,
  desc: [
    {
      key: "asd",
      value: "asd",
    },
    {
      key: "asd",
      value: "asd",
    },
    {
      key: "asd",
      value: "asd",
    },
    {
      key: "devider",
      value: "devider",
    },
    {
      key: "asd",
      value: "asd",
    },
  ],
  date: "2022-11-01",
  title: "Sample Order",
  subTitle: "This is a sample order",
  avatar: "https://example.com/avatar.png",
  isPaid: true,
  datePaid: "2022-11-02",
  data1: "Sample data 1",
  data2: "Sample data 2",
  data3: "Sample data 3",
  data4: "Sample data 4",
  payload: "Sample payload",
};
const Recipt = () => {
  const [receipt, setReceipt] = useState<OrderInterface>();
  const [id, setId] = useState<string>("");
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      setReceipt(receiptC);
    }, 100);
  }, []);
  // const id = useSearchParam("id");
  // var token = useSearchParam("token");

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    setId(urlParams.get("id") ?? "")
    setToken(urlParams.get("token") ?? "")

  },[])
  // const { id } = router?.query;
  const { fetchData, isLoading, data } = useOrderStore((state) => ({
    fetchData: state.fetchData,
    isLoading: state.isLoading,
    data: state.data,
  }));
  useEffect(() => {
    if (id && token) {
      fetchData(id);
    }
    if (id && !token) {
      fetchData(id);
    }
  }, [id, token]);
  useEffect(() => {
    if (data) {
     setReceipt(data)
    }
  }, [data,setReceipt]);
  return (
    <>
      <div className=" d-flex  justify-center   mt-10 full-width">
        {receipt && <ReceiptDetails receipt={receipt} />}
        {!receipt && <ReceiptSkeleton />}
      </div>
    </>
  );
};
export default Recipt;
