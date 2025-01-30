import React from "react";

export default function ResturantMenu() {
  return (
    <div className=" container my-10 px-5 md:px-27">
      <h4 className="text-H4 font-Bold text-center">منوی رستوران</h4>
      <div className=" grid grid-cols-2 md:grid-cols-4">
        <div className="mt-10">
          <div className=" flex flex-col items-center gap-y-4 w-[150px] md:w-60 border bg-Primary/95 rounded-lg    py-5">
            <img
              src="./images/resturantMenu/drink.png"
              className="w-[75px] md:w-[165px]"
            />

            <p className=" text-Caption-MD py-1 px-5  md:text-Body-XL inline-block  bg-white  rounded  md:py-1.5 md:px-10  shadow-DropShadow-6">
              نوشیدنی
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className=" flex flex-col items-center gap-y-4 w-[150px] md:w-60 border bg-Primary/95 rounded-lg p-5">
            <img
              src="./images/resturantMenu/desert.png"
              className="w-[90px] md:w-full"
            />

            <p className=" text-Caption-MD py-1 px-5  md:text-Body-XL inline-block  bg-white  rounded  md:py-1.5 md:px-10  shadow-DropShadow-6">
              دسر
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className=" flex flex-col items-center gap-y-4 w-[150px] md:w-60 border bg-Primary/95 rounded-lg p-5">
            <img
              src="./images/resturantMenu/appetizer .png"
              className="w-[90px] md:w-full"
            />

            <p className=" text-Caption-MD py-1 px-5  md:text-Body-XL inline-block  bg-white  rounded  md:py-1.5 md:px-10  shadow-DropShadow-6">
              پیش غذا
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className=" flex flex-col items-center gap-y-4 w-[150px] md:w-60 border bg-Primary/95 rounded-lg p-5">
            <img
              src="./images/resturantMenu/mainFood.png"
              className="w-[90px] md:w-full"
            />

            <p className=" text-Caption-MD py-1 px-5  md:text-Body-XL inline-block  bg-white  rounded  md:py-1.5 md:px-10  shadow-DropShadow-6">
              غذای اصلی
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
