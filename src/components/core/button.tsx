import React from "react";
import Button from '@mui/material/Button';
import { Loading } from "./loading/loading";
import { BeatLoader } from "react-spinners";
interface MyButtonProps {
  text: string;
  width: string;
  height: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({
  text,
  width,
  height,
  onClick,
  isLoading = false,
  disabled = false,
}) => {
  const buttonStyle = {
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    background: "var(--primary)",
    borderRadius: "10px",
    color: "var(--white)",
    padding: "8px 22px",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "160%",
  };

  return (
    <Button style={buttonStyle} onClick={disabled ? ()=>{} : onClick}>
      {isLoading ?  <BeatLoader
        color={"var(--white)"}
        loading={isLoading}
        // cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : text}
    </Button>
  );
};

export default MyButton;
