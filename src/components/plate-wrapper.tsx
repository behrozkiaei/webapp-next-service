"use client";
import Image from "next/image";
import "../globals.css";
import { useEffect, useRef, useState } from "react";
import ModalView from "./core/modal";
import PlateChar from "./plate-char/plate-char";
import { Plate, plateData } from "@/utils/interfaces/naji.interface";
import { PlateType } from "@/utils/enums";
import PlateBox from "./plate";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useInquiryStore from "@/store/inquiry";
import useAuthStore from "@/store/login";
interface PlateWrapperInterface {
  title?: string;
  plateData?: Plate;
  onChange?: (data: Plate) => void;
  disabled?: boolean;
}

const PlateWrapper: React.FC<PlateWrapperInterface> = ({
  title,
  plateData,
  onChange,
  disabled = false,
}) => {
  const { set } = useInquiryStore();
  const { isLoggedIn } = useAuthStore();
  const { getPlates, userPlates } = useInquiryStore((state) => ({
    getPlates: state.getPlates,
    userPlates: state.userPlates,
  }));
  const [isOpen, setOpen] = useState(false);
  const [hideMuPlate, setHideMyPlate] = useState(true);
  // const { userPlates } = useNajiStore();
  const selectedPlateLocal = (plate: Plate) => {
    if (plate) {
      set("selectedPlate", plate);
      if (plate.naji) set("selectedNajiUser", plate.naji!);
    }

    setHideMyPlate(true);
  };
  useEffect(() => {
    isLoggedIn && getPlates();
  }, [plateData, isLoggedIn]);
  // const [userPlates, setUserp] = useState([1, 3, 4]);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const changeMyPlateState = () => {
    setHideMyPlate((prev) => !prev);
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        setHideMyPlate((prev) => (prev == false ? true : prev));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
  return (
    <div className="plate-wrapper mx-auto mx-md-0 " ref={ref}>
      <div className="change-plate-title" style={{ display: "none" }}>
        <h5>پلاک:</h5>
        <button
          type="button"
          // loadingcolor="primary"
          className="v-btn v-btn--text theme--light v-size--small"
          style={{
            color: "#00843E",
            caretColor: "#00843E",
          }}
        >
          <span className="v-btn__content">تغییر یا ثبت پلاک</span>
        </button>
      </div>
      {title && <h4 style={{ display: "" }}> {title} </h4>}
      <div aria-hidden="true" className="plate-action">
        <div className="plate-template d-flex align-center ">
          <PlateBox
            disabled={disabled}
            onChange={(data) => {
              onChange && onChange(data);
            }}
            plateData={plateData ?? undefined}
          />
          {userPlates && userPlates.length>0 && (
            <span onClick={changeMyPlateState} className="pointer">
              <ArrowDropDownIcon color="error" />
            </span>
          )}
        </div>
        { userPlates && userPlates.length>0 && (
          <div
            className={`drop-down max-height py-2  ${
              hideMuPlate ? "hide" : ""
            } `}
          >
            {userPlates?.map((plate, index) => (
              <div className="d-flex flex-column" key={index}>
                <div
                  className="d-flex justify-space-between align-center pointer"
                  onClick={() => selectedPlateLocal(plate)}
                >
                  <PlateBox
                    onChange={(data) => {
                      onChange && onChange(data);
                    }}
                    disabled={true}
                    plateData={plate}
                    size="small"
                  />
                  <div className="d-flex justify-center full-height mt-4">
                    <Delete color="error" />
                  </div>
                </div>
                {userPlates?.length != index + 1 && (
                  <div className="devider mt-6"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default PlateWrapper;
