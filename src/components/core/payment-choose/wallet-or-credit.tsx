import React, { useState } from "react";
export type CreditOrWallet = "credit" | "wallet";
import "./index.css";
import "@/globals.css";
import Button from "@mui/material/Button";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import useIsMdDown from "@/components/effects/isMdDown";
interface ButtonSelectorInterface {
  defaultSelected?: CreditOrWallet;
  onSelectionChange: (data: CreditOrWallet) => void;
  walletAmount?: string;
  price?: string;
}

const WalletOrCredit: React.FC<ButtonSelectorInterface> = ({
  defaultSelected,
  onSelectionChange,
}) => {
  const [selected, setSelected] = useState(defaultSelected ?? "credit");
  const isMdDown = useIsMdDown();
  const handleButtonClick = (value: CreditOrWallet) => {
    setSelected(value);
    onSelectionChange(value);
  };
  return (
    <>
      <div className={`d-flex justify-space-around  full-width`}>
        <Button
          key={1}
          sx={{ width: isMdDown ? "100%" : "50%" }}
          variant="outlined"
          style={{
            marginBottom: "5px",
          }}
          className={`d-flex justify-space-around align-center button-style ${
            selected === "credit" ? " selected-button" : ""
          }`}
          onClick={() => handleButtonClick("credit")}
        >
          <CreditCardIcon />
          پرداخت با کارت بانکی
        </Button>
        <Button
          key={2}
          sx={{ width: isMdDown ? "100%" : "50%" }}
          variant="outlined"
          style={{
            marginBottom: "5px",
          }}
          className={`d-flex justify-space-around align-center button-style ${
            selected === "wallet" ? " selected-button" : ""
          }`}
          onClick={() => handleButtonClick("wallet")}
        >
          <AccountBalanceWalletIcon />
          پرداخت با اعتبار کیف پول
        </Button>
      </div>
    </>
  );
};
export default WalletOrCredit;
