import { FiCircle } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";
import cx from "classnames";

type TaskFormProps = {
  taskList: string;
};

const TaskForm = ({ taskList }: TaskFormProps) => {
  const [isChecked, setIsChecked] = useState(false);
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
          <button
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          >
            {!isChecked ? (
              <FiCircle className='text-xl text-[#BB1FC2]'></FiCircle>
            ) : (
              <HiCheckCircle className='text-xl text-[#C9D8F9]'></HiCheckCircle>
            )}
          </button>
          <p
            className={
              !isChecked ? "font-[T-Regular]" : "font-[T-Regular] line-through"
            }
          >
            {taskList}
          </p>
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

export default TaskForm;
