"use client";
// import ReceiptDetails from "@/components/receipt/receipt-component";
import ReceiptSkeleton from "@/components/receipt/receipt-skeleton";
import { OrderInterface, OrderType } from "@/utils/interfaces/order.interface";

import "@/globals.css";
import ReceiptDetails from "@/components/receipt/receipt-component";

import { useEffect, useState } from "react";
import useOrderStore from "@/store/order.store";
import ViolationReceiptDetails from "@/components/receipt/violation-report-component";

const Recipt = () => {
  const [receipt, setReceipt] = useState<OrderInterface>();
  const [id, setId] = useState<string>("");
  const [token, setToken] = useState<string>("");

  // const id = useSearchParam("id");
  // var token = useSearchParam("token");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setId(urlParams.get("id") ?? "");
    setToken(urlParams.get("token") ?? "");
  }, []);
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
      setReceipt(data);
    }
  }, [data, setReceipt]);
  return (
    <>
      <div className=" d-flex  justify-center   mt-10 full-width">
        {receipt && (
          <>
            {(receipt.type!.toString().includes("VIOLATION")) ? (
              <ViolationReceiptDetails receipt={receipt}></ViolationReceiptDetails>
            ) : (
              <ReceiptDetails receipt={receipt} />
            )}
          </>
        )}
        {!receipt && <ReceiptSkeleton />}
      </div>
    </>
  );
};
export default Recipt;
