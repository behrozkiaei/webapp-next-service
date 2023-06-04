import React, { useState } from "react";
import Button from "@mui/material/Button";
import useIsMdDown from "@/components/effects/isMdDown";

interface ScrollableButtonListProps {
  buttons: {
    id: string;
    title: string;
    amount: string;
  }[];
  height: number;
}

const ScrollableButtonListVertical: React.FC<ScrollableButtonListProps> = ({
  buttons,
  height,
}) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
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
          onClick={() => setSelectedButton(index)}
        >
            <div className="d-flex justify-space-between full-width">
                <div className="my-1">{button.title ?? ""}</div>
                <div className="mid_gray--text my-1">{button.amount + " تومان "  ?? ""} </div>
            </div>
        </Button>
      ))}
    </div>
  );
};

export default ScrollableButtonListVertical;
