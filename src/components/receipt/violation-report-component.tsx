"use client";
import {
  responseValueToFaKey,
  translateKey,
} from "@/utils/heplers/bill.helper";
import {
  Violation,
  ViolationReportResponse,
} from "@/utils/interfaces/naji.interface";
import { OrderInterface } from "@/utils/interfaces/order.interface";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import { addCommas } from "@persian-tools/persian-tools";
import React, { useEffect, useState } from "react";
import useIsMdDown from "../effects/isMdDown";
import { ReceiptTitleHeaderBox } from "./top-receipt-title-desc";
import { ListMakerFromObject } from "./list-maker-from-object";
import { BoxWrapper } from "../core/box-wrapper";
const dotStyle = {
  position: "absolute",
  bottom: 19,
  left: 20,
  right: 20,
  zIndex: 1,
  borderBottom: "1px dotted var(--main_gray)",
};
export interface ReceiptDatailPropInterface {
  receipt: OrderInterface;
}
const handleShare = () => {
  // Add your share logic here
};

const handlePrint = () => {
  // Add your print logic here
};

const ViolationReceiptDetails: React.FC<ReceiptDatailPropInterface> = ({
  receipt,
}) => {
  const [receiptViolationObject, setReceipt] = useState<any>();
  const [showViolationDetail, setShowViolationDetail] =
    useState<boolean>(false);
  const [violations, setViolations] = useState<Array<Violation>>();

  useEffect(() => {
    if (receipt?.data1) {
      console.log(receipt?.data1);
      setReceipt(JSON.parse(receipt?.data1));
    }
  }, []);

  useEffect(() => {
    if (receiptViolationObject) {
      //   console.log(receiptViolationObject.violations);
      if (receiptViolationObject.violations) {
        setViolations(receiptViolationObject.violations);
      }
      if (Array.isArray(receiptViolationObject)) {
        console.log(receiptViolationObject)
        setViolations(receiptViolationObject);
        setShowViolationDetail(true)
      }
    }
  }, [receiptViolationObject]);
  const isMdDown = useIsMdDown();
  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 800, width: 800, margin: 5 }}>
      <ReceiptTitleHeaderBox
        status={receipt.isPaid ?? false}
        title={receipt.title ?? ""}
        desc={`مبلغ استعلام: ${addCommas(receipt?.amount ?? 0)} ریال `}
      />
      {receiptViolationObject && (
        <>
          <ListMakerFromObject obj={receiptViolationObject} key={Date.now()}/>{" "}
        </>
      )}
      {violations && showViolationDetail && (
        <>
          <Box
            className="full-width"
            style={{ overflowX: "scroll" }}
            sx={{ my: 2 }}
          >
            <div className="d-flex flex-start">
              {violations.map((item: any, index: number) => (
                <div className="mx-1" style={{ width: "800px" }} key={index}>
                  <BoxWrapper>
                    <ListMakerFromObject obj={item} fontSize={0.6} />
                  </BoxWrapper>
                </div>
              ))}
            </div>
          </Box>
        </>
      )}
      <Box sx={{ my: 3 }} />
      {receiptViolationObject?.violations && (
        <>
          <Button
            variant="contained"
            disableElevation
            sx={{ mx: 2, my: 2 }}
            style={{ color: "var(--white)" }}
          >
            پرداخت تجمیعی
          </Button>

          <Button
            onClick={() => {
              setShowViolationDetail((prev) => !prev);
            }}
            variant="contained"
            disableElevation
            sx={{ mx: 2, my: 2 }}
            style={{ color: "var(--white)" }}
          >
            مشاهده جزییات خلافی
          </Button>
        </>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          mx: 2,
          mt: 4,
          // color:"white"
        }}
      >
        <IconButton onClick={handleShare}>
          <ShareIcon />
        </IconButton>
        <Button variant="outlined" className="mx-2" onClick={handleShare}>
          Share
        </Button>
        <Button variant="outlined" className="mx-2" onClick={handlePrint}>
          Print
        </Button>
      </Box>
    </Paper>
  );
};
export default ViolationReceiptDetails;
