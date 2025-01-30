import React from "react";
import Link from "next/link";

export default function AccountSidebar() {
  const sideBarValues = [
    { id: 1, title: "پروفایل", href: "/my-account" },
    { id: 2, title: "پیگیری سفارشات", href: "/my-account/my-orders" },
    { id: 3, title: "علاقمندی‌ها", href: "/my-account/favorite" },
    { id: 4, title: "آدرس‌های من", href: "/my-account/myaddress" },
  ];

  return (
    <>
      <div className="w-72 border border-neutral-300 px-2 py-4  gap-y-4 rounded-lg">
        <div>
          <div className="flex items-center gap-x-[25px] ">
            <img
              src=""
              className="bg-neutral-300 w-[88px] h-[88px] rounded-full "
            />
            <div>
              <h2 className="text-Body-MD font-Regular text-neutral-800">
                کاربر ترخینه
              </h2>
              <p className="text-Caption-MD font-Regular text-neutral-600">
                0934512521
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-black my-2"></div>
          <div className="flex flex-col gap-y-1 c">
            {sideBarValues.map((items) => {
              return (
                <div key={items.id} className="p-2">
                  <Link
                    href={items.href}
                    className="text-Body-MD font-Regular hover:text-Primary"
                  >
                    {items.title}
                  </Link>
                </div>
              );
            })}
            <button className="text-right p-2 text-Body-MD font-Regular text-Error hover:text-Error-Light">
              خروج
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
