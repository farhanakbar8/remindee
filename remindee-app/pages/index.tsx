import { HiMenuAlt4, HiPlusCircle } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import TaskForm from "../components/TaskForm";
import ReminderForm from "../components/ReminderForm";

export default function Home() {
  return (
    <div className='container w-[480px] mx-auto flex justify-center'>
      <div className='w-full bg-[#F8FAFE] px-5'>
        {/* Header - Navbar */}
        <div className='flex justify-between justify-items-center pt-10'>
          <button className='text-3xl text-[#9CA3BE]'>
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
          <button>
            <HiPlusCircle className='text-5xl text-[#007FFF] animate-bounce'></HiPlusCircle>
          </button>
        </div>
      </div>
    </div>
  );
}
