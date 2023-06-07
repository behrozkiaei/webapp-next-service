import React, { useEffect, useState } from "react";
import MyInput from "../core/my-input";
import {
  addCommas,
  removeCommas,
} from "@persian-tools/persian-tools";
import MyButton from "../core/button";
import useAuthStore from "@/store/login";
import { numberToWords } from "@persian-tools/persian-tools";
const numberToPersian = require('number-to-persian');
import { red } from "@mui/material/colors";
import  Icon  from "@mui/material/Icon";
import  IconButton  from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
interface IncreaseAmountProp {
  handleOpen: (res?: boolean) => void;
  formtitle?: string;
}
const   IncreaseAmount : React.FC<IncreaseAmountProp>= ({handleOpen,formtitle })=> {
  const [amount, setAmount] = useState<string>("");
  const [persianAmount, setPersianAmount] = useState<string >("");
  const { isLoggedIn, result, set, isLoading , redirectUrl ,increaseWalletAmount} = useAuthStore();
  

  useEffect(()=>{
    if(redirectUrl){
      // location.href=redirectUrl
      window.open(
        redirectUrl
      );
    }
  },[redirectUrl])
  const submit = async () => {
   parseFloat(amount)> 2000 ?  increaseWalletAmount(amount):null
  };
  return (
    <div className=" d-flex justify-center align-start  flex-column full-width ">
      <div className="full-width d-flex justify-space-between align-center">
        <h2 className="pointer" >
          {formtitle ? formtitle : "مبلغ دلخواه را به ریال وارد کنید "}
        </h2>
        <div onClick={() => handleOpen()}>
          <IconButton>
                <CloseIcon />
          </IconButton>
        </div>
      </div>
      <div className="devider  mt-1 mb-2"></div>
      <MyInput
        onChange={(data) => {
          setAmount(removeCommas(data.value).toString());
        }}
        error={""}
        value={addCommas(amount)}
        maxLength={10}
        minLength={4}
        type="tel"
        title="مبلغ به ریال"
        placeholder=""
        mode="amount"
        validations={[]}
      />
      <span>
        {numberToPersian(amount) && (
          <p>
             { numberToPersian(amount)  } ریال
          </p>
        )}
        {!numberToPersian(amount) && (
          <p>
             
          </p>
        )}
      </span>

      <div
        style={{ marginTop: "20px" }}
        className="full-width d-flex justify-center"
      >
        <MyButton
          text="تایید"
          width="100%"
          height="40px"
          disabled={isLoading}
          isLoading={isLoading}
          onClick={() => submit()}
        />
      </div>
    </div>
  );
}
export default IncreaseAmount;