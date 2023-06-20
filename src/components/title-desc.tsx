"use client"; // this is a client component 👈🏽
interface TitleDescInterface {
  title?: string;
  desc1?: string;
  desc2?: string;
}
import Skeleton from "@mui/material/Skeleton";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useEffect, useState } from "react";
const TitleDesc: React.FC<TitleDescInterface> = ({
  title,
  desc1 = "",
  desc2 = null,
}) => {
  const [titleL, setTitle] = useState<string>("");
  const handleClick = () => {
    window.history.back();
  };
  useEffect(() => {
    if (title) {
      console.log(title);
      setTitle(title?.toString());
    }
  }, [title]);
  return (
    <div
      className="d-flex justify-start flex-column align-start title"
      style={{ width: "100%" }}
    >
      <div className="d-flex justify-start ">
        <ArrowForwardOutlinedIcon
          className="pointer ml-2 mt-1"
          onClick={handleClick}
        />

        {titleL =="" ? (
          <Skeleton variant="text" width={60} height={40} />
        ) : (
          <h2>{titleL}</h2>
        )}
      </div>

      {desc1 && <p className="mid_gray--text mt-1 mr-8">{desc1}</p>}
      {!desc1 && <Skeleton variant="text" width={120} height={40} />}
      {desc2 && <p className="mid_gray--text mt-1">{desc2}</p>}
    </div>
  );
};
export default TitleDesc;
