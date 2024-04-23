import React from "react";

// This component will be generic and receive props to define its content
const InfoBox = ({ Icon, bgColor, title, content }) => {
  return (
    <div className="p-4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-full">
      <div className={`flex border-2 ${bgColor} p-5 sm:flex-row flex-col`}>
        <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex rounded-full flex-shrink-0">
          <Icon />
        </div>
        <div className="flex-grow">
          <h2 className="text-md title-font font-medium mb-3">{title}</h2>
          <p className="leading-relaxed text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;