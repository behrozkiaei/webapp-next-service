"use client";
import React, { useEffect, useState } from "react";
import "@/globals.css";
import { LoginMode } from "@/utils/enums";
import ModalView from "../core/modal";
import Login from "../login";
import useAuthStore from "@/store/login";
import { BeatLoader } from "react-spinners";
import useStateStore from "@/store/ui-state.store";
import IncreaseAmount from "./increase-amount";

export default function IncreaseButton() {
  const { isLoading } = useAuthStore();
  const [openIncrease, setIncreseModalOpen] = useState<boolean>(false);
  const { set ,get} = useStateStore();
  const toggleLoginModal = () => {
    setIncreseModalOpen((prev: boolean) => !prev);
  };

  useEffect(()=>{
    set("isBottomSheetOpen" , openIncrease)
  },[openIncrease])
  const toggleIncreseModal = () => {
    console.log("close")
    setIncreseModalOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleIncreseModal}
        type="button"
        className="v-btn v-btn--outlined theme--light v-size--default "
        id="header-login-btn"
      >
        {isLoading && (
          <BeatLoader
            color={"var(--primary)"}
            loading={isLoading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
         {!isLoading && (
           <span className="v-btn__content" >
           افزایش موجودی    
         </span>
        )}
       
      </button>
      <ModalView
        isOpen={openIncrease}
        modalStyle={{ width: "600px" }}
        onClose={toggleIncreseModal}
      >
        <IncreaseAmount   handleOpen={toggleIncreseModal}   />
      </ModalView>
    </>
  );
}
