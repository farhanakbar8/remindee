import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import React, { useState } from "react";
import Image from "next/image";
import cx from "classnames";

const profilePage = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={cx(
        "container w-[480px] min-h-full mx-auto flex justify-center bg-[#0D1F51] absolute",
        {
          "slide-open": isShow,
          "slide-close": !isShow,
        }
      )}
    >
      <div className='w-full px-5'>
        {/* Header */}
        <div className='flex justify-between justify-items-center pt-10 '>
          <div className='w-[110px] h-[110px] relative border-[3px] border-[#3D4D7A] rounded-full p-1 relative'>
            <Image
              src={"/image/simp.jpg"}
              width={120}
              height={120}
              alt='Fill User'
              className='rounded-full'
            ></Image>
          </div>
          <button
            onClick={() => {
              setIsShow(false);
            }}
            className='w-[50px] h-[50px] border-[3px] border-[#3D4D7A] rounded-full p-3'
          >
            <IoIosArrowBack className='text-xl text-white'></IoIosArrowBack>
          </button>
        </div>
        {/* Header */}
        {/* User Name */}
        <div className='mt-16 text-white font-[T-Medium] font-bold text-4xl flex flex-col gap-4'>
          <p>Baila</p>
          <p>Fauri</p>
        </div>
        {/* User Name */}
        {/* User Utility */}

        <button className='flex items-center mt-20 gap-3'>
          <IoExitOutline className='text-3xl text-[#3D4D7A]' />
          <p className='text-[#F0F1F0]'>Log Out</p>
        </button>
        {/* User Utility */}
      </div>
    </div>
  );
};

export default profilePage;
