import React, { useState } from "react";

export default function AddBranchSection() {
  const [firstName_lastName, setFirstName_lastName] = useState();
  const [time, setTime] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const requestForconsultingHandler = async () => {
    const response = await fetch("/api/consulting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName_lastName, time, phoneNumber }),
    });

    if (response.status === 400) {
      alert("Invalid message");
    } else {
      alert("message Sended Successfullyz");
    }
  };

  return (
    <>
      <img src="/images/branch/header.png" className=" md:w-full" />
      <div className="px-10 md:px-26.5  my-12">
        <div className="w-full border-t border-neutral-300 py-6 md:py-12">
          <h4 className="text-H5 text-nowrap md:text-H4 font-Bold text-center">
            مزیت دریافت نمایندگی
          </h4>
          <ul className=" grid grid-cols-1 md:grid-cols-2 mt-5 md:gap-x-[150px] gap-y-4 md:px-[320px]  list-disc mx-auto child:font-Regular justify-center items-center child:text-neutral-800 text-Body-SM md:text-Body-XL child:text-nowrap">
            <li>استفاده از برند شناخته شده ترخینه</li>
            <li>مشاوره در امور حقوقی، مالی و مالیاتی</li>
            <li>به حداقل رساندن ریسک سرمایه گذاری</li>
            <li>پشتیبانی بازاریابی و منابع انسانی</li>
            <li>تسریع روند بازگشت سرمایه</li>
            <li>دریافت مشاوره جهت تامین مواد اولیه و تجهیزات</li>
            <li>مشاوره های تخصصی جهت مدیریت رستوران</li>
            <li>طرح های تشویقی برای ارتقا فروش</li>
          </ul>
        </div>

        <div className="w-full border-t border-neutral-300 py-6 md:py-12">
          <h4 className="text-H5 text-nowrap md:text-H4 font-Bold text-center">
            دریافت مشاوره
          </h4>
          <div className="grid grid-cols-1  md:grid-cols-3 mt-6 child:border gap-6 child:text-Body-SM child:p-3 child:rounded-lg child:border-neutral-300 child:text-neutral-700 child:font-Regular child:outline-none">
            <input
              type="text"
              onChange={(e) => setFirstName_lastName(e.target.value)}
              placeholder="نام و نام‌خانوادگی"
            />
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="شماره تماس"
            />
            <input
              type="text"
              onChange={(e) => setTime(e.target.value)}
              placeholder="زمان ایده‌آل"
            />
          </div>
          <div className=" flex justify-center">
            <button
              onClick={requestForconsultingHandler}
              className="text-Button-LG  bg-Primary rounded-lg text-white px-4 py-2 mt-6"
            >
              درخواست مشاوره
            </button>
          </div>
        </div>
        <div className="w-full border-t border-neutral-300 py-6 md:py-12">
          <h4 className="text-H5 text-nowrap md:text-H4 font-Bold text-center">
            فرم درخواست نمایندگی
          </h4>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              مشخصات فردی متقاضی
            </h1>
            <div className=" grid grid-cols-1 mt-4 md:grid-cols-3 gap-6 child:border child:text-Body-SM child:p-3 child:rounded-lg child:border-neutral-300 child:text-neutral-700 child:font-Regular child:outline-none">
              <input type="text" placeholder="نام و نام‌خانوادگی" />
              <input type="text" placeholder="کد ملی" />
              <input type="text" placeholder="شماره تماس " />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              آدرس ملک متقاضی{" "}
            </h1>
            <div className=" grid grid-cols-1 mt-4 md:grid-cols-3 gap-6 child:border child:text-Body-SM child:p-3 child:rounded-lg child:border-neutral-300 child:text-neutral-700 child:font-Regular child:outline-none">
              <input type="text" placeholder="استان" />
              <input type="text" placeholder="شهر" />
              <input type="text" placeholder="منطقه" />
              <textarea
                placeholder="آدرس دقیق"
                className="h-[100px]"
              ></textarea>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              مشخصات ملک متقاضی
            </h1>
            <div className=" grid grid-cols-1 mt-4 md:grid-cols-3 gap-6 child:border child:text-Body-SM child:p-3 child:rounded-lg child:border-neutral-300 child:text-neutral-700 child:font-Regular child:outline-none">
              <input type="text" placeholder="نوع مالکیت" />
              <input type="text" placeholder="مساحت ملک (متر مربع)" />
              <input type="text" placeholder="سن بنا" />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              امکانات ملک متقاضی{" "}
            </h1>
            <p className="mt-6 text-Body-MD font-Regular text-neutral-500">
              ملک متقاضی:
            </p>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
