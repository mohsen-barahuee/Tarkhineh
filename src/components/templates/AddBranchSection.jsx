import React, { useState, useEffect } from "react";

export default function AddBranchSection() {
  const [firstName_lastName, setFirstName_lastName] = useState();
  const [time, setTime] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [firstName_lastNameAdd, setFirstName_lastNameAdd] = useState();
  const [nationalID, setNationalID] = useState();
  const [phoneNumberAdd, setPhoneNumberAdd] = useState();
  const [branchName, setBranchName] = useState();
  const [branchOwner, setBranchOwner] = useState({});
  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [location, setLocation] = useState();
  const [propertyTypeOfOwninerShip, setPropertyTypeOfOwninerShip] = useState();
  const [propertyArea, setPropertyArea] = useState();
  const [properyAge, setPropertyAge] = useState();
  const [workTime, setWorkTime] = useState();
  const [propertyInfo, setPropertyInfo] = useState({});
  const [image, setImage] = useState({});
  const [address, setAddress] = useState({});

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

  useEffect(() => {
    setBranchOwner({ firstName_lastNameAdd, nationalID, phoneNumberAdd });
  }, [firstName_lastNameAdd, nationalID, phoneNumberAdd]);

  const addBranchHandler = async () => {
    console.log(branchOwner);
  };

  const ownerPropertyFacilities = [
    "پروانه کسب دارد.",
    "پارکینگ دارد.",
    "آشپزخانه دارد.",
    "انبار دارد.",
  ];

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
        <div className="w-full border px-6 border-neutral-300 py-6 md:py-12">
          <h4 className="text-H5 text-nowrap md:text-H4 font-Bold text-center">
            فرم درخواست نمایندگی
          </h4>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              مشخصات فردی متقاضی
            </h1>
            <div className=" grid grid-cols-1 mt-4 md:grid-cols-3 gap-6 child:border child:text-Body-SM child:p-3 child:rounded-lg child:border-neutral-300 child:text-neutral-700 child:font-Regular child:outline-none">
              <input
                type="text"
                onChange={(e) => setFirstName_lastNameAdd(e.target.value)}
                onCh
                placeholder="نام و نام‌خانوادگی"
                value={firstName_lastNameAdd}
              />
              <input
                type="text"
                onChange={(e) => setNationalID(e.target.value)}
                value={nationalID}
                placeholder="کد ملی"
              />
              <input
                type="text"
                onChange={(e) => setPhoneNumberAdd(e.target.value)}
                value={phoneNumberAdd}
                placeholder="شماره تماس "
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              آدرس ملک متقاضی{" "}
            </h1>
            <div className=" grid grid-cols-1 mt-4 md:grid-cols-3 gap-6 child:border child:text-Body-SM child:p-3 child:rounded-lg child:border-neutral-300 child:text-neutral-700 child:font-Regular child:outline-none">
              <input
                type="text"
                onChange={(e) => setProvince(e.target.value)}
                value={province}
                placeholder="استان"
              />
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder="شهر"
              />
              <input
                type="text"
                onChange={(e) => setRegion(e.target.value)}
                value={region}
                placeholder="منطقه"
              />
              <textarea
                placeholder="آدرس دقیق"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                className="h-[100px]"
              ></textarea>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              مشخصات ملک متقاضی
            </h1>
            <div className=" grid grid-cols-1 mt-4 md:grid-cols-3 gap-6 child:border child:text-Body-SM child:p-3 child:rounded-lg child:border-neutral-300 child:text-neutral-700 child:font-Regular child:outline-none">
              <input
                type="text"
                onChange={(e) => setPropertyTypeOfOwninerShip(e.target.value)}
                value={propertyTypeOfOwninerShip}
                placeholder="نوع مالکیت"
              />
              <input
                type="text"
                onChange={(e) => setPropertyArea(e.target.value)}
                value={propertyArea}
                placeholder="مساحت ملک (متر مربع)"
              />
              <input
                type="text"
                onChange={(e) => setPropertyAge(e.target.value)}
                value={properyAge}
                placeholder="سن بنا"
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-Body-LG mt-5 md:mt-3 text-center md:text-right  font-Regular">
              امکانات ملک متقاضی{" "}
            </h1>
            <p className="mt-6 text-Body-MD font-Regular text-neutral-500">
              ملک متقاضی:
            </p>
            <div className="flex justify-start items-center mt-3">
              <div>
                <div>
                  <ul className=" grid grid-cols-2 gap-x-9 gap-y-4 text-Body-MD font-Regular text-neutral-500">
                    {ownerPropertyFacilities.map((facilities, index) => {
                      return (
                        <li key={index} className="flex  ">
                          {facilities}
                          <input
                            type="checkbox"
                            onChange={(e) => console.log()}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="h-auto w-auto relative border border-neutral-500 rounded-lg text-neutral-500  ">
                <label className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center text-nowrap ">
                  تصاویری از ملک را بارگذاری کنید...{" "}
                </label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className=" bg-black w-[400px] h-[200px] opacity-0 z-30 cursor-pointer  "
                  placeholder="عکس ملک را بارگزاری کنید"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={addBranchHandler}
              className="text-Button-LG  bg-Primary rounded-lg text-white px-4 py-2 mt-6"
            >
              ثبت اطلاعات{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
