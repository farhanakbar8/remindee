import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

const editProfile = () => {
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
          <p className='select-none text-xl'>Edit Profile</p>
          <div className='opacity-0 text-2xl'>
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </div>
        </div>
        {/* Header - Navbar */}
        {/* Reminder Form */}
        <div className='mt-16 mx-7 font-[T-Regular]'>
          <form action='' className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor=''>First Name</label>
              <input
                type='text'
                name=''
                id=''
                className='px-1 text-sm h-[30px] rounded-lg focus:outline-[#408CFC]'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Last Name</label>
              <input
                type='text'
                name=''
                id=''
                className='px-1 text-sm h-[30px] rounded-lg focus:outline-[#408CFC]'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                name=''
                id=''
                className='px-1 text-sm h-[30px] rounded-lg focus:outline-[#408CFC]'
              />
            </div>
            <div className='flex flex-col justify-center mt-6'>
              <button
                type='submit'
                className=' bg-[#408CFC] rounded-3xl text-white py-3 font-[T-Medium] w-[207px] m-auto'
              >
                Save
              </button>
            </div>
          </form>
        </div>
        {/* Reminder Form */}
      </div>
    </div>
  );
};

export default editProfile;
