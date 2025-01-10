'use client';
import React from "react";

const ContentContainer = ({children,design}:{children:React.ReactNode,design:any}) => {
  const mainDesign="custome-container bg-[#e5e8eb] flex flex-wrap p-5 rounded-md gap-3" 
  return (
    <div className={design ? `${design} `: mainDesign}>
      {children}
    </div>
  );
};

export default ContentContainer;
