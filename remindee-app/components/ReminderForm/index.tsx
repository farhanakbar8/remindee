import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCalendar2Week } from "react-icons/bs";
import React, { useState } from "react";
import cx from "classnames";

type ReminderFormProps = {
  reminderList: string;
  reminderDate: string;
};

const ReminderForm = ({ reminderList, reminderDate }: ReminderFormProps) => {
  const [isClicked, setIsClicked] = useState(false);

  function dropDownBox() {
    return (
      <div
        className={cx(
          "bg-white rounded-2xl mb-8 relative text-xs flex flex-col items-center",
          {
            hidden: !isClicked,
            block: isClicked,
          }
        )}
      >
        <div>Description</div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }

  return (
    <div
      className={cx("h-[47px] w-[440px] bg-white rounded-2xl px-5 mb-4", {
        "h-full": isClicked,
        "h-[47px]": !isClicked,
      })}
    >
      <div className='flex justify-between items-center h-[47px]'>
        <div className='flex gap-3'>
          <button>
            <BsCalendar2Week className='text-xl text-[#BB1FC2]'></BsCalendar2Week>
          </button>
          <div className='font-[T-Regular]'>
            <p>{reminderList}</p>
            <p className='text-xs text-[#777777] font-light'>{reminderDate}</p>
          </div>
        </div>
        <div className='h-full flex items-center'>
          <button
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {!isClicked ? (
              <IoIosArrowDown className='text-xl text-[#9CA3BE]'></IoIosArrowDown>
            ) : (
              <IoIosArrowUp className='text-xl text-[#9CA3BE]'></IoIosArrowUp>
            )}
          </button>
        </div>
      </div>
      {dropDownBox()}
    </div>
  );
};

export default ReminderForm;
