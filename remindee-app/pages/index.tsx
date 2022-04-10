import { HiMenuAlt4 } from "react-icons/hi";
import {
  IoNotifications,
  IoCloseCircle,
  IoAddCircle,
  IoExitOutline,
} from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import TaskForm from "../components/TaskForm";
import ReminderForm from "../components/ReminderForm";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [isShow, setIsShow] = useState(false);

  // Profile Page
  function profilePage() {
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
        <div className='w-full px-10'>
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
          <div className='flex flex-col gap-5 font-[T-Regular]'>
            <button className='flex items-center mt-20 gap-3'>
              <MdModeEditOutline className='text-3xl text-[#3D4D7A]' />
              <p className='text-[#F0F1F0]'>Edit Profile</p>
            </button>
            <button className='flex items-center gap-3'>
              <IoExitOutline className='text-3xl text-[#3D4D7A]' />
              <p className='text-[#F0F1F0]'>Log Out</p>
            </button>
          </div>
          {/* User Utility */}
        </div>
      </div>
    );
  }

  return (
    <div className='container w-[480px] mx-auto flex justify-center overflow-hidden relative'>
      {profilePage()}
      <div className='w-full bg-[#F8FAFE] px-5'>
        {/* Header - Navbar */}
        <div className='flex justify-between justify-items-center pt-10'>
          <button
            onClick={() => {
              setIsShow(true);
            }}
            className='text-3xl text-[#9CA3BE]'
          >
            <HiMenuAlt4></HiMenuAlt4>
          </button>
          <button className='text-2xl text-[#9CA3BE]'>
            <IoNotifications></IoNotifications>
          </button>
        </div>
        {/* Header - Navbar */}
        {/* Logo */}
        <div className='font-[Minimo] text-4xl text-[#007FFF] flex justify-center py-20 select-none'>
          <p>remindee</p>
        </div>
        {/* Logo */}
        {/* Task Form */}
        <div>
          <p className='tracking-wider text-[#9CA3BE] font-[T-Regular] font-medium'>
            TASK
          </p>
          <div className='mt-5'>
            {/* Form */}
            <TaskForm taskList='Apex' />
            <TaskForm taskList='Valo' />
            <TaskForm taskList='Pusreng' />
            <TaskForm taskList='Tidur' />
            <TaskForm taskList='Makan' />
            {/* Form */}
          </div>
        </div>
        {/* Task Form */}
        {/* Reminder Form */}
        <div className='mt-16'>
          <p className='tracking-wider text-[#9CA3BE] font-[T-Regular] font-medium'>
            REMINDER
          </p>
          <div className='mt-5'>
            <ReminderForm
              reminderList='Tugas'
              reminderDate='Fri, 18 March 2022'
            />
          </div>
        </div>
        {/* Reminder Form */}
        <div className='flex justify-end mt-10 pb-10'>
          {isClicked && (
            <>
              <div className='flex justify-center items-center font-[T-Regular]'>
                <div className='flex flex-col gap-5 justify-center items-center'>
                  <Link href={"addtask"}>
                    <div className='w-[100px] h-[50px] bg-white rounded-t-xl rounded-bl-xl flex justify-center items-center bg-[#007FFF] text-white hover:cursor-pointer'>
                      Task
                    </div>
                  </Link>
                  <Link href={"addreminder"}>
                    <div className='w-[100px] h-[50px] bg-white rounded-b-xl rounded-tl-xl flex justify-center items-center bg-[#007FFF] text-white hover:cursor-pointer'>
                      Reminder
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
          <button
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {!isClicked ? (
              <IoAddCircle className='text-5xl text-[#007FFF] active:animate-spin my-9'></IoAddCircle>
            ) : (
              <IoCloseCircle className='text-5xl text-[#FF002E] active:animate-spin'></IoCloseCircle>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
