import TextField from "@mui/material/TextField";
import { digitsArToEn, digitsFaToEn } from "@persian-tools/persian-tools";
import { useEffect, useState, useRef } from "react";
import { verifyIranianNationalId } from "@persian-tools/persian-tools";
import InputAdornment from "@mui/material/InputAdornment";
interface ValidationFunction {
  (value: string): string;
}
interface Callback {
  value: string;
  hasError: boolean;
}
interface MyInputInterface {
  value: string;
  onChange: (data: Callback) => void;
  error?: string;
  placeholder?: string;
  title?: string;
  maxLength: number;
  minLength: number;
  type?: string;
  disabled?: boolean;
  mode?: string;
  validations?: ValidationFunction[];
  inputRef?: any;
  focused?: boolean;
  topTitle?: string;
}

const MyInput: React.FC<MyInputInterface> = ({
  value,
  onChange,
  error,
  placeholder,
  maxLength,
  minLength,
  topTitle,
  title,
  type = "text",
  mode,
  validations = [],
  disabled,
  inputRef,
  focused = false,
}) => {
  const [inputError, setInputError] = useState("");
  const [inputValue, setValue] = useState(value ?? "");
  const textRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setValue(value);
  }, [value]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (type == "tel") {
      setValue(digitsFaToEn(digitsArToEn(value)));
    }
    console.log(value);
    checkValidation(value);
    if (value.length < minLength) {
      setInputError("");
    }
    setValue(value);
    const hasErr =
      inputError || value.length < minLength || value.length > maxLength
        ? true
        : false;
    onChange({
      value: value,
      hasError: hasErr,
    });
  };

  const checkValidation = (value: string) => {
    let inputErrorL=null ; 
    if (
      validations.length > 0 &&
      value.length <= maxLength &&
      value.length >= minLength
    ) {
      const errorMessage = validations.reduce(
        (acc, validation) => acc || validation(value),
        ""
      );
      setInputError(errorMessage);
    } else if (
      validations.length == 0 &&
      value.length <= maxLength &&
      value.length >= minLength &&
      mode
    ) {
      let regex;
      switch (mode) {
        case "mobile":
          console.log(mode);
          regex = new RegExp("^09\\d{9}$");
          if (!regex.test(value)) {
            setInputError("شماره تماس را به درستی وارد کنید: 09116264382");
            inputErrorL= "شماره تماس را به درستی وارد کنید: 09116264382";
          }
          break;
        case "nationalCode":
          regex = /^\d{10}$/;
          if (!regex.test(value)) {
            setInputError("کد ملی 10 رقمی است");
            inputErrorL= "کد ملی 10 رقمی است";
          }
          console.log(value);
          console.log(verifyIranianNationalId(value));
          if (!verifyIranianNationalId(value)) {
            setInputError("کد ملی 10 رقمی صحیح نیست");
            inputErrorL= "کد ملی 10 رقمی است";
          }
        case "number":
          regex = /^\d+$/;
          if (!regex.test(value)) {
            setInputError("لطفا عدد انگلیسی وارد کنید");
            inputErrorL= "کد ملی 10 رقمی است";
          }
        default:
          break;
      }
    }
    return inputErrorL ? false : true;
  };

  return (
    <div
      style={{ width: "100%" }}
      className="d-flex flex-column justify-center align-center"
    >
      {topTitle && (
        <div className="full-width d-flex flex-start">
          <p style={{marginRight:"unset !important"}}>{topTitle}</p>
        </div>
      )}
      <TextField
        dir="rtl"
        inputRef={inputRef}
        variant="outlined"
        size="small"
        style={{
          marginTop: "10px",
          width: "100%",
          color: "var(--primary)",
          textAlign: "center",
          borderRadius: "9px",
        }}
        focused={focused}
        sx={{ textAlign: "center" }}
        InputProps={{
          startAdornment: title ? (
            <InputAdornment position="start">
              <div style={{ width: "50px" }}>{title}</div>
            </InputAdornment>
          ) : undefined,
        }}
        type={type}
        disabled={disabled}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        inputProps={{
          style: {
            textAlign: "center",
            direction: type == "tel" ? "ltr" : "rtl",
            borderRadius: 9,
          },
          maxLength,
        }}
        error={Boolean(error || inputError)}
        helperText={error || inputError}
      />
      {/* <div onClick={()=>{
          textRef.current?.focus()
      }} >
                          focus
                        </div> */}
    </div>
  );
};

export default MyInput;
