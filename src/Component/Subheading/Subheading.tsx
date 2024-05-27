import React from "react";

interface SubheadingProps {
    title: string;
    text: string;
}

const Subheading: React.FC<SubheadingProps> = ({ title, text }) => {
  return (
    <div className="flex flex-row mt-[140px] overflow-x-hidden gap-[40px]"> {/* ... почему не работает pt-[140px] ... */}
      <h2 className="font-medium text-[40px] m-0">
        {title}
      </h2>
      <p className="font-normal text-[18px] m-0">
        {text}
      </p>
    </div>
  )
}

export default Subheading
