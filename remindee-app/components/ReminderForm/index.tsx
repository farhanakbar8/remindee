import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCalendar2Week } from "react-icons/bs";
import React, { SyntheticEvent, useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import api from "../../client/api";

type ReminderFormProps = {
  reminder: any;
};

const ReminderForm = ({ reminder }: ReminderFormProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();

  const handleDelete = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await api.delete(`/reminder?id=${reminder.id}`);
      router.reload();
    } catch (error: any) {
      console.log(error.response);
    }
  };

  function dropDownBox() {
    return (
      <div
        className={cx(
          "bg-white rounded-2xl mb-8 relative text-xs flex flex-col items-center gap-3 p-2",
          {
            hidden: !isClicked,
            block: isClicked,
          }
        )}
      >
        <div className='h-[25px] w-full text-center'>
          {reminder.description}
        </div>
        <button className='hover:bg-[#007FFF] hover:text-white active:bg-[#007FFF] active:text-white w-[60px] h-[25px] rounded-lg text-[#007FFF]'>
          Edit
        </button>
        <button
          onClick={handleDelete}
          className='hover:bg-[#FF002E] hover:text-white active:bg-[#FF002E] active:text-white w-[60px] h-[25px] rounded-lg text-[#FF002E]'
        >
          Delete
        </button>
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
            <p>{reminder.title}</p>
            <p className='text-xs text-[#777777] font-light'>{reminder.date}</p>
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
