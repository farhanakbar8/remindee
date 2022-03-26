import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

const signupPage = () => {
  return (
    <div className='container w-[480px] mx-auto flex justify-center'>
      <div className='w-full px-5 font-[T-Regular]'>
        {/* Header - Navbar */}
        <div className='flex justify-between justify-items-center pt-10'>
          <Link href={"login"}>
            <button className='text-2xl'>
              <HiArrowNarrowLeft></HiArrowNarrowLeft>
            </button>
          </Link>
          <p className='select-none text-xl'>Sign Up</p>
          <button className='opacity-0 text-[0.1px]'>
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </button>
        </div>
        {/* Header - Navbar */}
        {/* Login Form */}
        <div className='mt-20'>
          <form action='' className='flex flex-col'>
            <label htmlFor='' className='text-sm text-[#9C9AA8]'>
              Your Name
            </label>
            <input
              type='text'
              name=''
              id=''
              className='border-b-[1.5px] focus:outline-0 mt-3 text-sm font-semibold'
            />
            <label htmlFor='' className='text-sm mt-5 text-[#9C9AA8]'>
              Your Email
            </label>
            <input
              type='email'
              name=''
              id=''
              className='border-b-[1.5px] focus:outline-0 mt-3 font-semibold text-sm'
            />
            <label htmlFor='' className='text-sm mt-5 text-[#9C9AA8]'>
              Password
            </label>
            <input
              type='password'
              name=''
              id=''
              className='border-b-[1.5px] focus:outline-0 mt-3'
            />
            {/* Button */}
            <div className='flex flex-col justify-center mt-20'>
              <button
                type='submit'
                className=' bg-[#408CFC] rounded-3xl text-white py-4 text-lg font-[T-Medium] w-[327px] m-auto'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        {/* Login Form */}
        <div className='flex justify-center mt-5 text-sm'>
          <p className='text-[#9C9AA8]'>
            Have Account?{" "}
            <Link href={"/login"}>
              <a className='text-[#408CFC] font-[T-Medium]'>Log In</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default signupPage;
