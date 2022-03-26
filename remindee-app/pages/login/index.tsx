import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const loginPage = () => {
  return (
    <div className='container w-[480px] mx-auto flex justify-center'>
      <div className='w-full px-5'>
        {/* Header - Navbar */}
        <div className='flex justify-between justify-items-center pt-10'>
          <button className='opacity-0 text-[0.1px]'>
            <HiArrowNarrowRight></HiArrowNarrowRight>
          </button>
          <p className='select-none text-xl font-[T-Regular]'>Log In</p>
          <Link href={"/"}>
            <button className='text-2xl'>
              <HiArrowNarrowRight></HiArrowNarrowRight>
            </button>
          </Link>
        </div>
        {/* Header - Navbar */}
        {/* Login Form */}
        <div className='mt-20 font-[T-Regular]'>
          <form action='' className='flex flex-col'>
            <label htmlFor='' className='text-sm text-[#9C9AA8]'>
              Your Email
            </label>
            <input
              type='email'
              name=''
              id=''
              className='border-b-[1.5px] focus:outline-0 mt-3'
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
            <a
              href=''
              className='flex justify-end text-sm font-[T-Medium] font-medium text-[#9C9AA8] mt-3'
            >
              Forgot your password?
            </a>
            {/* Button */}
            <div className='flex flex-col justify-center mt-20 font-[T-Medium]'>
              <button
                type='submit'
                className=' bg-[#408CFC] rounded-3xl text-white py-4 text-lg w-[327px] m-auto'
              >
                Log In
              </button>
              <p className='text-center my-5 text-sm text-[#9C9AA8] font-[T-Regular]'>
                or with
              </p>
              <button className='bg-[#FF6464] rounded-3xl text-white py-4 text-lg w-[327px] m-auto'>
                Google
              </button>
            </div>
          </form>
        </div>
        {/* Login Form */}
        <div className='flex justify-center mt-5 text-sm'>
          <p className='text-[#9C9AA8] font-[T-Regular]'>
            New User?{" "}
            <Link href={"/signup"}>
              <a href='' className='text-[#408CFC] font-[T-Medium]'>
                Create Account
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
