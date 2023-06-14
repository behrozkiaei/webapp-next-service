import React from 'react'
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export interface ReceiptTitleHeaderBoxProps {
    status:boolean,title:string,desc:string
  }
export const  ReceiptTitleHeaderBox: React.FC<ReceiptTitleHeaderBoxProps> =({
    status,title,desc
}) => {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    }}
  >
    {status ? (
      // <></>
      <CheckCircleIcon
        color="success"
        sx={{ mb: 2 }}
        width={80}
        height={80}
        style={{ fontSize: 80 }}
      />
    ) : (
      // <></>
      <CancelIcon
        color="error"
        sx={{ mb: 2 }}
        width={80}
        height={80}
        style={{ fontSize: 80 }}
      />
    )}
    <div style={{fontSize : "1em" ,textAlign:"right"}} >
      {title} 
    </div>
    <div style={{fontSize : "0.85em" ,textAlign:"right"}} className="mt-2">
     {desc}
    </div>
  </Box>
  )
}
