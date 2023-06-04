"use client"
import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const ReceiptSkeleton = () => {
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
        <Skeleton variant="circular" width={80} height={80} />
        <Skeleton variant="text" width={200} height={40} />
      </Box>
      <List sx={{ maxHeight: 700, overflow: "auto" }}>
        <ListItem key={"1"}>
          <Box component="div" sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Skeleton variant="text" width={200} height={40} />
              <Skeleton variant="text" width={200} height={40} />
            </Box>
          </Box>
        </ListItem>
        <ListItem key={"2"}>
          <Box component="div" sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Skeleton variant="text" width={200} height={40} />
              <Skeleton variant="text" width={200} height={40} />
            </Box>
          </Box>
        </ListItem>
        <ListItem key={"3"}>
          <Box component="div" sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Skeleton variant="text" width={200} height={40} />
              <Skeleton variant="text" width={200} height={40} />
            </Box>
          </Box>
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          mx: 2,
        }}
      >
        <Skeleton variant="rectangular" width={60} height={40} />
        <Skeleton variant="rectangular" width={60} height={40} />
        <Skeleton variant="rectangular" width={60} height={40} />
      </Box>
    </Paper>
  );
};
export default ReceiptSkeleton;
