"use client";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
// import { BottomSheet } from "mui-bottom-sheet";
import { BottomSheet } from "react-spring-bottom-sheet";
import useBreakpoint from "@/components/effects/breakpoint-effect";
import "react-spring-bottom-sheet/dist/style.css";
import "@/globals.css";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "9px",
  //   border: '1px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
interface MyModalProps {
  children?: React.ReactNode;
  modalStyle?: React.CSSProperties;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalView: React.FC<MyModalProps> = ({
  children,
  modalStyle = {},
  isOpen = false,
  onClose,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const breakpoint = useBreakpoint();

  return (
    <>
      {breakpoint != "xs" && breakpoint != "sm" && (
        <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, ...modalStyle }}>
            {children && children}
            {!children && (
              <>
                <h2 id="parent-modal-title">Text in a modal</h2>
                <p id="parent-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
              </>
            )}
          </Box>
        </Modal>
      )}
      {(breakpoint == "xs" || breakpoint == "sm") && (
        <BottomSheet
          blocking={false}
          style={{ zIndex: 1000 }}
          open={isOpen}
          onDismiss={onClose}
        >
          <>
            <Box sx={{ padding: 2 }}>
              {children && children}
              {!children && (
                <>
                  <h2 id="parent-modal-title">Text in a modal</h2>
                  <p id="parent-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </p>
                </>
              )}
            </Box>
          </>
        </BottomSheet>
      )}
    </>
  );
};

export default ModalView;
