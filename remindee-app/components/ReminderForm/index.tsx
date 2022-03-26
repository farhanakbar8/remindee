import { RiMoreFill } from "react-icons/ri";
import { BsCalendar2Week } from "react-icons/bs";

type ReminderFormProps = {
  reminderList: string;
  reminderDate: string;
};

const ReminderForm = ({ reminderList, reminderDate }: ReminderFormProps) => {
  return (
    <div className='h-[47px] bg-white rounded-2xl px-5 flex justify-between items-center mb-4'>
      <div className='flex gap-3'>
        <button>
          <BsCalendar2Week className='text-xl text-[#BB1FC2]'></BsCalendar2Week>
        </button>
        <div className='font-[T-Regular]'>
          <p>{reminderList}</p>
          <p className='text-xs text-[#777777] font-light'>{reminderDate}</p>
        </div>
      </div>
      <button>
        <RiMoreFill className='text-xl text-[#9CA3BE]'></RiMoreFill>
      </button>
    </div>
  );
};

export default ReminderForm;
