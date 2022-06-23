import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseCircle, IoAddCircle } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import TaskForm from "../components/TaskForm";
import ReminderForm from "../components/ReminderForm";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";
import cx from "classnames";
import api from "../client/api";
import { useRouter } from "next/router";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [task, setTask] = useState(null);
  const [reminder, setReminder] = useState(null);
  const [profile, setProfile] = useState(null);
  const [profpic, setProfpic] = useState(null);
  const [isHovering, setIsHovered] = useState(false);
  const [isHovering2, setIsHovered2] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const onMouseEnter2 = () => setIsHovered2(true);
  const onMouseLeave2 = () => setIsHovered2(false);

  const router = useRouter();

  useEffect(() => {
    if ("userId" in localStorage) {
      const userId = localStorage.getItem("userId");
      api.get(`/task?userId=${userId}`).then((res) => {
        setTask(res.data);
      });
      api.get(`/reminder?userId=${userId}`).then((res) => {
        setReminder(res.data);
      });
      api.get(`/profile?id=${userId}`).then((res) => {
        setProfile(res?.data["name"]);
        setProfpic(res?.data["image"]);
        setIsLogin(true);
      });
    }
  }, []);

  const handleLogout = async (event: SyntheticEvent) => {
    event.preventDefault();
    localStorage.clear();
    router.push("/login");
  };

  const handleProfile = async (event: SyntheticEvent) => {
    event.preventDefault();
    router.push(`/${localStorage.getItem("userId")}/editProfile`);
  };

  var arrName = [];
  if (profile) {
    arrName = profile.split(" ");
  }

  // Profile Page
  function profilePage() {
    return (
      <div
        className={cx(
          "container w-[480px] h-full mx-auto flex justify-center bg-[#0D1F51] absolute overflow-hidden z-50",
          {
            "slide-open": isShow,
            "slide-close": !isShow,
          }
        )}
      >
        <div className='w-full px-10'>
          {/* Header */}
          <div className='flex justify-end justify-items-center pt-10 '>
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
          {isLogin ? (
            <div className='mt-16 text-white font-[T-Medium] font-bold flex-row items-center gap-4'>
              <div className='flex items-center gap-6'>
                <div className='w-[105px] h-[105px] relative border-[3px] border-[#3D4D7A] rounded-full p-1 relative'>
                  {profpic ? (
                    <img
                      src={profpic}
                      width={120}
                      height={120}
                      className='rounded-full'
                    />
                  ) : (
                    <img src='' alt='' />
                  )}
                </div>
                <div className='flex flex-col text-2xl'>
                  {arrName &&
                    arrName.map((name) => {
                      return <p key={name.id}>{name}</p>;
                    })}
                </div>
              </div>
              <div className='mt-10'>
                <Link href='/editprofile'>
                  <button
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    {isHovering ? (
                      <div className='py-1 px-3 flex items-center gap-2 bg-white rounded-xl transition-width duration-100 drop-shadow-lg'>
                        <BiUser
                          onClick={handleProfile}
                          className='text-slate-400 text-5xl'
                        />
                        <p className='text-slate-400 font-bold font-[T-Medium] transition-opacity opacity-100'>
                          Edit Profile
                        </p>
                      </div>
                    ) : (
                      <div className='py-1 px-1 flex items-center gap-2 rounded-xl transition-width duration-200'>
                        <BiUser className='text-white text-5xl' />
                        <p className='text-white font-bold font-[T-Medium] transition-opacity opacity-0'>
                          Edit Profile
                        </p>
                      </div>
                    )}
                  </button>
                </Link>
              </div>
              <div className='mt-80'>
                <button
                  onMouseEnter={onMouseEnter2}
                  onMouseLeave={onMouseLeave2}
                  onClick={handleLogout}
                >
                  {isHovering2 ? (
                    <div className='py-1 px-3 flex items-center gap-2 bg-red-500 rounded-xl transition-width duration-100 drop-shadow-lg'>
                      <HiOutlineLogout className='text-white text-5xl' />
                      <p className='text-white font-bold font-[T-Medium] transition-opacity opacity-100'>
                        Logout
                      </p>
                    </div>
                  ) : (
                    <div className='py-1 px-1 flex items-center gap-2 rounded-xl transition-width duration-200'>
                      <HiOutlineLogout className='text-red-500 text-5xl' />
                      <p className='text-red-500 font-bold font-[T-Medium] transition-opacity opacity-0'>
                        Logout
                      </p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className='flex mt-96 justify-start items-center'>
              <button
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={handleLogout}
              >
                {isHovering ? (
                  <div className='py-1 px-3 flex items-center gap-2 bg-green-500 rounded-xl transition-width duration-100 drop-shadow-lg'>
                    <HiOutlineLogout className='text-white text-5xl' />
                    <p className='text-white font-bold font-[T-Medium] transition-opacity opacity-100'>
                      Login
                    </p>
                  </div>
                ) : (
                  <div className='py-1 px-1 flex items-center gap-2 rounded-xl transition-width duration-200'>
                    <HiOutlineLogout className='text-green-500 text-5xl' />
                    <p className='text-green-500 font-bold font-[T-Medium] transition-opacity opacity-0'>
                      Login
                    </p>
                  </div>
                )}
              </button>
            </div>
          )}
          {/* User Name */}
        </div>
      </div>
    );
  }

  function addCircleClicked() {
    return !isClicked ? (
      <IoAddCircle className='text-5xl text-[#007FFF] active:animate-spin my-9'></IoAddCircle>
    ) : (
      <IoCloseCircle className='text-5xl text-[#FF002E] active:animate-spin'></IoCloseCircle>
    );
  }

  return (
    <div className='container w-[480px] h-full mx-auto flex justify-center overflow-hidden relative'>
      {profilePage()}
      <div className='w-full bg-[#F8FAFE] px-5 min-h-screen'>
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
        </div>
        {/* Header - Navbar */}
        {/* Logo */}
        <div className='font-[Minimo] font-bold text-4xl text-[#007FFF] flex justify-center py-20 select-none'>
          <p>remindee</p>
        </div>
        {/* Logo */}
        {isLogin ? (
          <div>
            <div>
              <p className='tracking-wider text-[#9CA3BE] font-[T-Regular] font-medium'>
                TASK
              </p>
              <div className='mt-5'>
                {/* Form */}
                {task &&
                  task.map((res) => {
                    return <TaskForm key={res.id} taskList={res} />;
                  })}
                {/* Form */}
              </div>
            </div>
            <div className='mt-16'>
              <p className='tracking-wider text-[#9CA3BE] font-[T-Regular] font-medium'>
                REMINDER
              </p>
              <div className='mt-5'>
                {reminder &&
                  reminder.map((res) => {
                    return <ReminderForm key={res.id} reminder={res} />;
                  })}
              </div>
            </div>
            <div className='flex justify-end mt-10 pb-10'>
              {isClicked && (
                <>
                  <div className='flex justify-center items-center font-[T-Regular] transition-transform duration-300'>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                      <Link href={"addtask"}>
                        <div className='w-[100px] h-[50px] bg-white rounded-t-xl rounded-bl-xl flex justify-center items-center bg-[#007FFF] text-white hover:cursor-pointer transition-all duration-150'>
                          Task
                        </div>
                      </Link>
                      <Link href={"addreminder"}>
                        <div className='w-[100px] h-[50px] bg-white rounded-b-xl rounded-tl-xl flex justify-center items-center bg-[#007FFF] text-white hover:cursor-pointer transition-all duration-150'>
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
                {addCircleClicked()}
              </button>
            </div>
          </div>
        ) : (
          <div className='font-[T-Regular] font-semibold mt-40 text-[#9CA3BE] text-center'>
            Login first to access all features!
          </div>
        )}
      </div>
    </div>
  );
}
