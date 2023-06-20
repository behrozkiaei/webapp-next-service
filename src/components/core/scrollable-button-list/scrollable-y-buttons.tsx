import React, { useState } from "react";
import Button from "@mui/material/Button";
import useIsMdDown from "@/components/effects/isMdDown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { addCommas } from "@persian-tools/persian-tools";

interface ScrollableButtonListProps {
  buttons:any[];
  height: number;
  onClick: (index: any , button:any) => void;
}

const ScrollableButtonListVertical: React.FC<ScrollableButtonListProps> = ({
  buttons,
  height,
  onClick
}) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const setSelected = (index: number , button:any) => {

    setSelectedButton(index);
    onClick(index , button)
  };

const isMdDown =useIsMdDown()
  return (
    <div style={{  height, width: "100%" }}>
      <Swiper className=""  slidesPerView={4.5}  direction={"vertical"}>
    {buttons.map((button, index) => (
      <SwiperSlide  key={index}>
        <Button
          sx={{ width: "95%" }}
          variant="outlined"
          style={{
            backgroundColor: selectedButton === index ? "lightblue" : "white",
            marginBottom: "5px",
            // display: 'block',
            width: "99%",
          }}
          onClick={() => setSelected(index,button)}
        >
            <div className="d-flex justify-space-between full-width">
                <div className="my-1">{button.name ?? ""}</div>
                <div className="my-1">{button.product_id ?? ""}</div>
                <div className="mid_gray--text my-1">{addCommas(button.amount) + " تومان "  ?? ""} </div>
            </div>
        </Button>
        </SwiperSlide>
      ))}
     </Swiper>
    </div>
  );
};

export default ScrollableButtonListVertical;
