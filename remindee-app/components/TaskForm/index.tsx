import { FiCircle } from "react-icons/fi";
import { RiMoreFill } from "react-icons/ri";

type TaskFormProps = {
  taskList: string;
};

const TaskForm = ({ taskList }: TaskFormProps) => {
  return (
    <div className='h-[47px] bg-white rounded-2xl px-5 flex justify-between items-center mb-4'>
      <div className='flex gap-3'>
        <button>
          <FiCircle className='text-xl text-[#BB1FC2]'></FiCircle>
        </button>
        <p className='font-[T-Regular]'>{taskList}</p>
      </div>
      <button>
        <RiMoreFill className='text-xl text-[#9CA3BE]'></RiMoreFill>
      </button>
    </div>
  );
};

export default TaskForm;
