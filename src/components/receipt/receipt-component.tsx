import * as React from "react";
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
  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 800, width: 800, margin: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {receipt.isPaid ? (
          // <></>
          <CheckCircleIcon
            color="success"
            sx={{ mb: 2 }}
            width={80}
            height={80}
            style={{fontSize:80}}
          />
        ) : (
          // <></>
          <CancelIcon color="error" sx={{ mb: 2 }} width={80} height={80} style={{fontSize:80}} />
        )}
        <Typography variant="h5" sx={{ mt: 2 }} >
          {receipt.title}
        </Typography>
      </Box>
      <List sx={{ maxHeight: 700, overflow: "auto" }}>
        {receipt &&
          receipt.desc?.map((item) =>
            item.key === "devider" ? null : (
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
                    {item.key}
                  </Box>
                  <Box sx={{ bgcolor: "white", paddingRight: 2 }}>
                    {item.value}
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
