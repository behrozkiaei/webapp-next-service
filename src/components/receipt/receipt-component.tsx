"use client";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { OrderInterface } from "@/utils/interfaces/order.interface";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import { useEffectOnce, useStateList } from "react-use";
import { ReceiptTitleHeaderBox } from "./top-receipt-title-desc";
import { addCommas } from "@persian-tools/persian-tools";
import { responseValueToFaKey, translateKey } from "@/utils/heplers/bill.helper";
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

const ReceiptDetails: React.FC<ReceiptDatailPropInterface> = ({ receipt }) => {
  const [seperateReceipt, setReceipt] = useState<Array<any>>();
  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 800, width: 800, margin: 5 }}>
      <ReceiptTitleHeaderBox
        status={receipt.isPaid ?? false}
        title={receipt.title ?? ""}
        desc={`مبلغ پرداختی: ${addCommas(receipt?.amount ?? 0)} ریال `}
      />
      <List sx={{ maxHeight: 700, overflow: "auto" }}>
        {receipt &&
          receipt.desc?.map((item, index) =>
            item.key === "separator" ? (
              <> </>
            ) : (
              <ListItem
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <Box component="div" sx={dotStyle} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    zIndex: 2,
                  }}
                >
                  <Box sx={{ bgcolor: "white", paddingLeft: 2 }}>
                    {translateKey(item.key)}
                  </Box>
                  <Box sx={{ bgcolor: "white", paddingRight: 2 }}>
                    {responseValueToFaKey(item.key,item.value)}
                  </Box>
                </Box>
              </ListItem>
            )
          )}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          mx: 2,
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
export default ReceiptDetails;
