import React from 'react';

interface ButtonProps {
    text: string;
    color?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
  return (
    <div>
      {color 
      ? 
      <button className="px-[35px] py-[20px] border rounded-[14px] border-black transition">
        <p className='font-normal text-[20px] m-0' >{text}</p>
      </button>
      :
      <button className="bg-black px-[35px] py-[20px] border rounded-[14px] transition">
        <p className='text-white font-normal text-[20px] m-0' >{text}</p>
      </button>
      }
      
    </div>
  );
};

export default Button;