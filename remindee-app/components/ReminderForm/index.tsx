import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCalendar2Week } from "react-icons/bs";
import React, { SyntheticEvent, useState, useEffect } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import api from "../../client/api";

type ReminderFormProps = {
  reminder: any;
};

const ReminderForm = ({ reminder }: ReminderFormProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsClicked(false);

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

  const handleEdit = async (event: SyntheticEvent) => {
    event.preventDefault();
    router.push(`/${reminder.id}/editReminder`);
  };

  function notifyMe() {
    let title = "Reminder";
    let options = {
      body: countDate(),
    };
    let n = new Notification(title, options);
    console.log(n);

    Notification.requestPermission()
      .then(function (result) {
        console.log(result); //granted || denied
        if (Notification.permission == "granted") {
          return "Access Granted";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function countDate() {
    const arrUserDate = reminder.date.split("-").map(Number);

    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth() + 1;
    const dateNow = new Date().getDate();

    const arrNowDate = [];
    arrNowDate.push(yearNow);
    arrNowDate.push(monthNow);
    arrNowDate.push(dateNow);

    const count = arrUserDate.map(function (item, index) {
      return item - arrNowDate[index];
    });

    return count[2] < 0
      ? "Overdue"
      : `${count[0]} year(s) ${count[1]} month(s) ${count[2]} day(s) left`;
  }

  function dropDownBox() {
    return (
      <div
        className={cx(
          "bg-white rounded-2xl mb-8 relative text-xs flex flex-col items-center gap-3 p-2 font-[T-Regular] font-semibold drop-shadow-lg",
          {
            hidden: !isClicked,
            block: isClicked,
          }
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <div>
            <div className='h-[25px] w-full text-center'>
              {reminder.description}
            </div>
            <button
              onClick={handleEdit}
              className='hover:bg-[#007FFF] hover:text-white active:bg-[#007FFF] active:text-white w-[60px] h-[25px] rounded-lg text-[#007FFF] font-semibold'
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className='hover:bg-[#FF002E] hover:text-white active:bg-[#FF002E] active:text-white w-[60px] h-[25px] rounded-lg text-[#FF002E] font-semibold'
            >
              Delete
            </button>
          </div>
        ) : (
          <div>
            <div className='h-[25px] w-full text-center'>
              {reminder.description}
            </div>
            <button
              onClick={handleEdit}
              className='hover:bg-[#007FFF] hover:text-white active:bg-[#007FFF] active:text-white w-[60px] h-[25px] rounded-lg text-[#007FFF] font-semibold'
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className='hover:bg-[#FF002E] hover:text-white active:bg-[#FF002E] active:text-white w-[60px] h-[25px] rounded-lg text-[#FF002E] font-semibold'
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cx("h-[73px] w-[440px] bg-white rounded-2xl px-5 mb-4", {
        "h-full": isClicked,
        "h-[73px]": !isClicked,
      })}
    >
      <div className='flex justify-between items-center h-[77px]'>
        <div className='flex gap-3'>
          <button
            onClick={() => {
              notifyMe();
            }}
          >
            <BsCalendar2Week className='text-xl text-[#BB1FC2]'></BsCalendar2Week>
          </button>
          <div className='font-[T-Regular]'>
            <p className='text-sm'>{reminder.title}</p>
            <p className='text-xs text-[#777777] font-light'>{reminder.date}</p>
            <p className='text-xs'>{reminder.time}</p>
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
      {/* {countDate()} */}
    </div>
  );
};

export default ReminderForm;
