import Link from "next/link";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import api from "../../client/api";

const AddReminder = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [desc, setDesc] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await api.post("/reminder", {
        userId: localStorage.getItem("userId"),
        title: title,
        description: desc,
        date: date,
        time: hour.concat(":", min),
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
          <p className='select-none text-xl'>Reminder</p>
          <div className='opacity-0 text-2xl'>
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </div>
        </div>
        {/* Header - Navbar */}
        {/* Reminder Form */}
        <div className='mt-16 mx-7'>
          <form
            action=''
            onSubmit={handleSubmit}
            className='flex flex-col gap-5'
          >
            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Title</label>
              <input
                required
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='px-1 text-sm h-[30px] rounded-lg focus:outline-[#408CFC]'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Date</label>
              <input
                required
                type='date'
                name='date'
                id='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='px-1 text-sm h-[30px] rounded-lg focus:outline-[#408CFC]'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor=''>
                Time <span className='text-[9.5px]'>(24 hour format)</span>
              </label>
              <div className='flex justify-center items-center gap-4'>
                <input
                  required
                  type='number'
                  name='hour'
                  id='hour'
                  min='0'
                  max='23'
                  placeholder='H'
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className='w-[82px] h-[82px] rounded-lg text-5xl text-[#007FFF] focus:bg-[#007FFF] focus:text-white text-center focus:outline-none'
                />
                :
                <input
                  required
                  type='number'
                  name='minute'
                  id='minute'
                  min='0'
                  max='59'
                  placeholder='M'
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                  className='w-[82px] h-[82px] rounded-lg text-5xl text-[#007FFF] focus:bg-[#007FFF] focus:text-white text-center focus:outline-none'
                />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Description</label>
              <input
                required
                type='text'
                name='desc'
                id='desc'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className='px-1 text-sm h-[30px] rounded-lg focus:outline-[#408CFC]'
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
        {/* Reminder Form */}
      </div>
    </div>
  );
};

export default AddReminder;
