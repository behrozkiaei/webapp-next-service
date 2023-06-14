import React from "react";
interface MyModalProps {
    children?: React.ReactNode;
    
  }
export const BoxWrapper: React.FC<MyModalProps> = ({children}) => {
  return (
    <div className="d-flex  flex-column justify-start align-center full-width box-section">
      <div
        className="d-flex justify-start flex-column align-start"
        style={{ width: "95%" }}
      ></div>
      {children}
    </div>
  );
};
