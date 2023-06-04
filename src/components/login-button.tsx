"use client";
import React, { useEffect, useState } from "react";
import "@/globals.css";
import { LoginMode } from "@/utils/enums";
import ModalView from "./core/modal";
import Login from "./login";
import useAuthStore from "@/store/login";
import { BeatLoader } from "react-spinners";
import useStateStore from "@/store/ui-state.store";

const  LoginButton: React.FC  =  () =>{
  const { isLoading } = useAuthStore();
  const { set ,get} = useStateStore();

  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const toggleLoginModal = () => {

    setLoginModalOpen((prev: boolean) => !prev);

    set("isBottomSheetOpen" , isLoginModalOpen)
  };
  useEffect(()=>{
    set("isBottomSheetOpen" , isLoginModalOpen)
  },[isLoginModalOpen])
  useEffect(()=>{
    setLoginModalOpen((prev: boolean) => get("isBottomSheetOpen"));
  },[get("isBottomSheetOpen")])
  const closeLoginModal = () => {
    // chagneState && chagneState(!isLoginModalOpen)
    setLoginModalOpen((prev: boolean) => false);
  };
  return (
    <>
      <button
        onClick={toggleLoginModal}
        type="button"
        className="v-btn v-btn--outlined theme--light v-size--default "
        id="header-login-btn"
      >
        {isLoading && (
          <BeatLoader
            color={"var(--primary)"}
            loading={isLoading}
            // cssOverride={override}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
         {!isLoading && (
           <span className="v-btn__content">
           ورود
           <span className="login-splitter"></span>
           ثبت‌نام
         </span>
        )}
       
      </button>
      <ModalView
        isOpen={isLoginModalOpen}
        modalStyle={{ width: "600px" }}
        onClose={closeLoginModal}
      >
        <Login loginMode={LoginMode.MOBILE} handleOpen={closeLoginModal}
         />
      </ModalView>
    </>
  );
}
export default LoginButton;