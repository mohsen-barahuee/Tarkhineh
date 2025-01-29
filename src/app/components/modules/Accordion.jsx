import React, { useState } from "react";

export default function Accordion({ title, svgSrc, items }) {
  const [accordion, setAccordion] = useState(false);

  const accordionHandler = () => {
    setAccordion(!accordion);
  };

  return (
    <>
      <div onClick={accordionHandler} className="flex justify-between">
        <div className="flex gap-x-1">
          <img src={svgSrc} />
          <h2 className="text-Caption-MD font-Regular">{title} </h2>
        </div>
        <div>
          <img src="./svg/arrow-down.svg" />
        </div>
      </div>
      <div
        className={`w-full transition-all duration-150 ease-in-out ${
          accordion ? "h-auto overflow-auto" : "h-0 overflow-hidden hidden "
        }  `}
      >
        <ul className=" w-full  flex-col  items-start child:text-Caption-MD child:font-Regular  py-1 pr-5">
          {items.map((item, index) => {
            return (
              <li key={index} className="my-3">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
