import useAuthStore from "@/store/login";
import useStateStore from "@/store/ui-state.store";
import { LoginMode } from "@/utils/enums";
import { getCache } from "@/utils/helpers/cache-repo";
import React, { useEffect, useState } from "react";
import MyButton from "../core/button";
import ModalView from "../core/modal";
import Login from "../login";
interface MyButtonProps {
  text: string;
  width: string;
  height: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  fromWallet?: boolean;
  forceAuth? :boolean
}

const DynamicAuthedButton: React.FC<MyButtonProps> = ({
  text,
  width,
  height,
  onClick,
  isLoading = false,
  disabled = false,
  fromWallet = false,
  forceAuth = true,
}) => {
  const [walletMode, setWalletMode] = useState<boolean>(fromWallet);
  useEffect(() => {
    console.log(fromWallet)
    setWalletMode(fromWallet);
  }, [fromWallet]);
  const { isLoading: AuthLoading, isLoggedIn ,result} = useAuthStore();
  const { set, get } = useStateStore();
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [isCanTransactionModalOpen, setCanTransactionModal] =
    useState<boolean>(false);
  const toggleLoginModal = () => {
    setLoginModalOpen((prev: boolean) => !prev);
    set("isBottomSheetOpen", isLoginModalOpen);
  };
  useEffect(() => {
    set("isBottomSheetOpen", isLoginModalOpen);
  }, [isLoginModalOpen]);
  useEffect(() => {
    setLoginModalOpen((prev: boolean) => get("isBottomSheetOpen"));
  }, [get("isBottomSheetOpen")]);
  const closeLoginModal = () => {
    setLoginModalOpen((prev: boolean) => false);
  };
  const closeCanTransactionModal =  () => {
    setCanTransactionModal(false);

    const canTransaction =  getCache("canTransaction");
    if (canTransaction) {
      submit();
    }
  };
  const submit = async () => {
    if(!isLoggedIn && !forceAuth){
      onClick();
      return;
    }
    if (!isLoggedIn && forceAuth) {
      setLoginModalOpen(true);
      return ;
    }
    if (isLoggedIn) {
      console.log(isLoggedIn ,walletMode )
      if (walletMode) {
        const canTransaction = await getCache("canTransaction");
        console.log("canTransaction" ,canTransaction)
        if (!canTransaction) {
          setCanTransactionModal(true);
          return ; 
        }
      } 
      onClick();
      return;
    }
   
    
  };
  return (
    <>
      <MyButton
        text={!isLoggedIn && forceAuth ? "نیاز به ورود" : text}
        width={width}
        height={height}
        disabled={isLoading || AuthLoading}
        isLoading={isLoading || AuthLoading}
        onClick={submit}
      />
      <ModalView
        isOpen={isLoginModalOpen}
        modalStyle={{ width: "600px" }}
        onClose={closeLoginModal}
      >
        <Login loginMode={LoginMode.MOBILE} handleOpen={closeLoginModal} />
      </ModalView>
      <ModalView
        isOpen={isCanTransactionModalOpen}
        modalStyle={{ width: "600px" }}
        onClose={closeCanTransactionModal}
      >
        <Login
          loginMode={LoginMode.CODE}
          data={{ mobile : result?.mobile!}}
          handleOpen={closeCanTransactionModal}
          formtitle ="تایید هویت"
        />
      </ModalView>
    </>
  );
};

export default DynamicAuthedButton;
