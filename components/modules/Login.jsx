import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login({ onCloseModal }) {
  const router = useRouter();

  const [seconds, SetSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);
  const [phonNumber, setPhoneNumber] = useState();
  const [buttonEnable, setButtonEnable] = useState(false);
  const [sendCod, setSendCode] = useState(false);
  const [code, setCode] = useState();

  const phonNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
    if (phonNumber >= 1) {
      setButtonEnable(true);
    }
  };

  const codeHandler = (event) => {
    setCode(event.target.value);
  };

  const sendCodHandler = () => {
    if (phonNumber.length < 11) {
      alert("Phone Is Not Valid");
      return false;
    }

    setSendCode(true);
  };

  useEffect(() => {
    setInterval(() => {
      SetSeconds((prev) => prev - 1);
    }, 1000);
  }, []);

  if (seconds <= -1) {
    SetSeconds(59);
    setMinutes((prev) => prev - 1);
  }

  const signUpHandler = async () => {
    if (!code) {
      alert("کد معتبر نیست");
      return false;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phonNumber, code }),
    });

    if (response.status === 201) {
      onCloseModal();
      router.replace("/");
      alert("User Created successfully");
    }
  };

  return (
    <div
      className={`fixed  inset-0 z-50 transition-all  md:top-1/3   md:left-1/3 md:right-1/3 bg-white rounded-lg w-full h-screen md:w-[450px] md:h-[310px] px-6`}
    >
      <div className="w-full relative">
        <div
          onClick={onCloseModal}
          className=" absolute left-0  top-6 cursor-pointer"
        >
          <img src="./svg/Close-icon-modal.svg" className="text-black" />
        </div>
        <div className="flex justify-center w-full pt-[100px] md:pt-6">
          <img
            className="w-[148px] md:w-[102px]"
            src="./images/Logo.png"
            alt=""
          />
        </div>
      </div>
      <h4 className=" mt-20 md:mt-4 text-center font-Regular text-Body-MD">
        {sendCod ? "کد تایید" : " ورود / ثبت ‌نام"}
      </h4>
      <p className="text-Caption-MD font-Regular text-neutral-600 text-center mt-6 md:mt-1">
        {sendCod
          ? `کد تایید پنج‌رقمی به شماره ${phonNumber} ارسال شد.`
          : " با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد."}
      </p>

      {sendCod ? (
        <div className=" flex gap-x-4 mt-6 justify-between items-center  child:h-10 child:border-neutral-600  child:border child:rounded-lg">
          <input
            onChange={codeHandler}
            type="text"
            className="w-full text-center rounded-lg border border-black h-10 outline-none  px-3 text-Body-MD font-Regular"
            value={code}
          />
        </div>
      ) : (
        <div className=" mt-6 relative">
          <label
            htmlFor="input"
            className=" absolute -top-3 right-3 bg-white px-1"
          >
            شماره همراه
          </label>
          <input
            onChange={phonNumberHandler}
            type="text"
            className="w-full rounded-lg border border-black h-10 outline-none text-left px-3 text-Body-MD font-Regular"
            value={phonNumber}
          />
        </div>
      )}

      {sendCod ? (
        <div className="flex justify-between">
          <div>
            {minutes}:{seconds}
          </div>
          <p
            onClick={() => setSendCode(false)}
            className="text-Caption-MD font-Regular mt-1 cursor-pointer"
          >
            ویرایش شماره
          </p>
        </div>
      ) : (
        <p className="text-Caption-SM font-Regular text-center pt-4">
          ورود و عضویت در ترخینه به منزله قبول{" "}
          <span className="text-Primary"> قوانین و مقررات</span> است.
        </p>
      )}

      {sendCod ? (
        <button
          onClick={signUpHandler}
          className={`w-full mt-4 py-2 text-white 
          bg-Primary rounded text-Button-LG cursor-pointer`}
        >
          ثبت کد
        </button>
      ) : (
        <button
          onClick={buttonEnable ? sendCodHandler : null}
          className={`w-full mt-4 py-2 text-white  ${
            buttonEnable ? "bg-Primary" : "bg-neutral-300"
          }  rounded text-Button-LG ${
            buttonEnable ? "cursor-pointer" : "cursor-default"
          }`}
        >
          ادامه
        </button>
      )}
    </div>
  );
}
