import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="w-full  relative">
        <img src="./images/Header.png" className=" h-[176px] md:h-auto" />
        <div className=" absolute top-1/3 right-0 left-0">
          <div className="flex justify-center md:px-6 md:justify-between items-center w-full">
            <div className="hidden md:inline-block">
              <img src="./svg/RightArrow.svg" alt="" />
            </div>
            <div>
              <h2 className=" text-white text-H6 md:text-H2 font-Bold">
                تجربه غذای سالم و گیاهی به سبک ترخینه
              </h2>
            </div>
            <div className="hidden md:inline-block">
              <img src="./svg/LeftArrow.svg" />
            </div>
          </div>
          <div className="w-full flex justify-center mt-4.5 md:mt-11">
            <Link
              className=" rounded-lg bg-Primary font-Regular md:font-Medium text-Caption-SM md:text-Body-LG text-white py-1 px-2 md:px-8 md:py-2"
              href={""}
            >
              سفارش آنلاین غذا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
