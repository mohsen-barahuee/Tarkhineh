import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <div className="w-full relative mb-6 md:mb-12 ">
        <img src="./images/about.png" className="h-[360px] md:h-auto" />
        <div className=" flex flex-wrap gap-y-10 items-stretch  justify-center  md:justify-between w-full px-6 md:px-26.5 absolute   top-4 md:top-12 text-white">
          <div className="max-w-80 md:max-w-[600px] relative">
            <h4 className="text-Overline-LG md:text-H4 font-Bold">
              رستوران‌های زنجیره‌ای ترخینه
            </h4>
            <p className="text-Caption-SM md:text-Body-XL font-Regular pt-2  md:pt-6 text-justify ">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <Link
              className=" flex justify-center items-center gap-x-2 absolute left-0  rounded border-2 border-white  py-1.5 px-7 text-Caption-MD md:text-Button-LG font-Medium mt-2 md:mt-4"
              href={"/aboutus"}
            >
              اطلاعات بیشتر
              <img src="./svg/LeftArrow.svg" className="w-4 md:w-6" alt="" />
            </Link>
          </div>

          <div className=" grid grid-cols-2 gap-y-4 gap-x-12 md:gap-x-6 md:gap-y-2 items-center justify-center">
            <div className="flex flex-col items-center gap-y-1 py-[26px]">
              <img
                src="./svg/user2.svg"
                className=" fill-current text-white w-6 md:w-12  "
              />
              <p className="text-Caption-MD md:text-Body-LG font-Regular">
                پرسنلی مجرب و حرفه‌ای
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-1 py-[26px]">
              <img src="./svg/diagram.svg" className="w-6 md:w-12" />
              <p className="text-Caption-MD md:text-Body-LG font-Regular">
                کیفیت بالای غذاها
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-1 py-[26px]">
              <img src="./svg/home-wifi.svg" className="w-6 md:w-12" />
              <p className="text-Caption-MD md:text-Body-LG font-Regular">
                {" "}
                محیطی دلنشین و آرام{" "}
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-1 py-[26px]">
              <img src="./svg/menu-board.svg" className="w-6 md:w-12" />
              <p className="text-Caption-MD md:text-Body-LG font-Regular">
                {" "}
                منوی متنوع
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
