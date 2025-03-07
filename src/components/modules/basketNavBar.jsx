import React from "react";

export default function BasketNavBar({ status }) {
  switch (status) {
    case "/basket":
      return (
        <div className="flex justify-evenly py-10  ">
          <h6 className="text-Primary text-H6 font-Bold ">سبد خرید</h6>
          <h6 className="text-Body-SM font-Regular text-neutral-400">
            تکمیل اطلاعات
          </h6>
          <h6 className="text-Body-SM font-Regular text-neutral-400">پرداخت</h6>
        </div>
      );

    case "/basket/completeinfo":
      return (
        <div className="flex justify-evenly py-10  ">
          <h6 className="text-Body-SM font-Regular text-neutral-400">
            سبد خرید
          </h6>
          <h6 className="text-Primary text-H6 font-Bold ">تکمیل اطلاعات</h6>
          <h6 className="text-Body-SM font-Regular text-neutral-400">پرداخت</h6>
        </div>
      );
    case "/basket/payment":
      return (
        <div className="flex justify-evenly py-10  ">
          <h6 className="text-Body-SM font-Regular text-neutral-400">
            سبد خرید
          </h6>
          <h6 className="text-Body-SM font-Regular text-neutral-400">
            تکمیل اطلاعات
          </h6>
          <h6 className="text-Primary text-H6 font-Bold ">پرداخت</h6>
        </div>
      );

    default:
      break;
  }
}
