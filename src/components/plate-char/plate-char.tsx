import "@/globals.css";
import CloseIcon from "@mui/icons-material/Close";
import { CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import "./plate-char.css";

interface PlateCharPropInterface {
  handleOpen: () => void;
  charChoosed: (char: string) => void;
}

const PlateChar: React.FC<PlateCharPropInterface> = ({
  handleOpen,
  charChoosed,
}) => {
  const handleClick = (event: any) => {
    const innerText = event.target.innerText;
    charChoosed(innerText);
  };
  const handleClickForVilchair = () => {
    charChoosed("wheelchair");
  };

  return (
    <>
      <Card elevation={0}>
        <CardHeader
          action={
            <IconButton>
              <CloseIcon />
            </IconButton>
          
          }
          titleTypographyProps={{ variant: "h6", color: "primary" }}
          title="انتخاب حرف پلاک"
        />
        <CardContent>
          <div className="char_list_container">
            <div onClick={handleClick}>الف</div>
            <div onClick={handleClick}>ب</div>
            <div onClick={handleClick}>پ</div>
            <div onClick={handleClick}>ت</div>
            <div onClick={handleClick}>ث</div>
            <div onClick={handleClick}>ج</div>
            <div onClick={handleClick}>چ</div>
            <div onClick={handleClick}>ح</div>
            <div onClick={handleClick}>خ</div>
            <div onClick={handleClick}>د</div>
            <div onClick={handleClick}>ذ</div>
            <div onClick={handleClick}>ر</div>
            <div onClick={handleClick}>ز</div>
            <div onClick={handleClick}>ژ</div>
            <div onClick={handleClick}>س</div>
            <div onClick={handleClick}>ش</div>
            <div onClick={handleClick}>ص</div>
            <div onClick={handleClick}>ض</div>
            <div onClick={handleClick}>ط</div>
            <div onClick={handleClick}>ظ</div>
            <div onClick={handleClick}>ع</div>
            <div onClick={handleClick}>غ</div>
            <div onClick={handleClick}>ف</div>
            <div onClick={handleClick}>ق</div>
            <div onClick={handleClick}>ک</div>
            <div onClick={handleClick}>گ</div>
            <div onClick={handleClick}>ل</div>
            <div onClick={handleClick}>م</div>
            <div onClick={handleClick}>ن</div>
            <div onClick={handleClick}>و</div>
            <div onClick={handleClick}>ه</div>
            <div onClick={handleClick}>ی</div>
            <div onClick={handleClickForVilchair}>
              <svg
                data-v-65445537=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mt-3 icon__char_gray wheelchair-accessibility"
                style={{ height: "24px" }}
              >
                <path
                  data-v-65445537=""
                  d="M18.4 11.2l-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5c.6-.9.9-1.9.9-3 0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4zM18 5.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4s-.2-1-.6-1.4c-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6c-.4.4-.6.9-.6 1.4s.2 1 .6 1.4c.4.4.9.6 1.4.6zm-5.5 16.1c-.9.6-1.9.9-3 .9C6.5 22.5 4 20 4 17c0-1.1.3-2.1.9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5z"
                ></path>
              </svg>
            </div>
            <div onClick={handleClick}>D</div>
            <div onClick={handleClick}>S</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PlateChar;
