import React, { useState } from "react";
import Button from "@mui/material/Button";
import useIsMdDown from "@/components/effects/isMdDown";
import { InternetPackageInterface } from "@/utils/interfaces/charge-internet";

interface ScrollableButtonListProps {
  buttons:any[];
  height: number;
  onClick: (index: number) => void;
}

const ScrollableButtonListVertical: React.FC<ScrollableButtonListProps> = ({
  buttons,
  height,
  onClick
}) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const setSelected = (index: number) => {
    setSelectedButton(index);
    onClick(index)
  };

const isMdDown =useIsMdDown()
  return (
    <div style={{ overflowY: "scroll", height, width: "100%" }}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          sx={{ width: "95%" }}
          variant="outlined"
          style={{
            backgroundColor: selectedButton === index ? "lightblue" : "white",
            marginBottom: "5px",
            // display: 'block',
            width: "99%",
          }}
          onClick={() => setSelected(index)}
        >
            <div className="d-flex justify-space-between full-width">
                <div className="my-1">{button.name ?? ""}</div>
                <div className="mid_gray--text my-1">{button.amount + " تومان "  ?? ""} </div>
            </div>
        </Button>
      ))}
    </div>
  );
};

export default ScrollableButtonListVertical;
