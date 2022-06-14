import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import api from "../../client/api";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await api.post("/task", {
        userId: localStorage.getItem("userId"),
        title: title,
        description: desc,
      });
      router.push("/");
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <div className='container w-[480px] mx-auto flex justify-center bg-[#F8FAFE] min-h-screen'>
      <div className='w-full px-5 font-[T-Regular]'>
        {/* Header - Navbar */}
        <div className='flex justify-between items-center pt-10'>
          <Link href={"/"}>
            <button className='text-2xl'>
              <HiArrowNarrowLeft></HiArrowNarrowLeft>
            </button>
          </Link>
          <p className='select-none text-xl'>Task</p>
          <div className='opacity-0 text-2xl'>
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </div>
        </div>
        {/* Header - Navbar */}
        {/* Task Form */}
        <div className='mt-16 mx-7'>
          <form
            action=''
            onSubmit={handleSubmit}
            className='flex flex-col gap-5'
          >
            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Title</label>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='px-1 text-sm h-[30px] rounded-lg focus:outline-[#408CFC]'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Description</label>
              <textarea
                name='desc'
                id='desc'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className='p-1 h-[90px] text-sm col rounded-lg focus:outline-[#408CFC]'
              />
            </div>

            <div className='flex flex-col justify-center mt-6'>
              <button
                type='submit'
                className=' bg-[#408CFC] rounded-3xl text-white py-3 font-[T-Medium] w-[207px] m-auto'
              >
                Create
              </button>
            </div>
          </form>
        </div>
        {/* Task Form */}
      </div>
    </div>
  );
};

export default AddTask;
