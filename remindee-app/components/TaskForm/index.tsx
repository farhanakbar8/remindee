import { FiCircle } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";
import { RiMoreFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import React, { useState } from "react";

type TaskFormProps = {
  taskList: string;
};

const TaskForm = ({ taskList }: TaskFormProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='h-[47px] bg-white rounded-2xl px-5 flex justify-between items-center mb-4'>
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
      <button>
        <RiMoreFill className='text-xl text-[#9CA3BE]'></RiMoreFill>
      </button>
    </div>
  );
};

export default TaskForm;
