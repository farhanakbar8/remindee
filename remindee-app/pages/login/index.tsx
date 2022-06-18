// Import Link, this is same as tag <a></a> or anchor in basic HTML. But Next JS, is using Link
import Link from "next/link";

// Import Icon from react-icons, react-icons is small library for adding icons to our React Apps
import { HiArrowNarrowRight } from "react-icons/hi";

/*
Create function for Remindee Login Page using Next JS and Tailwind framework for layouting
*/
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import api from "../../client/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIslogin] = useState(true);

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await api.post("/authentication/login", {
        email: email,
        password: password,
      });
      setIslogin(true);
      localStorage.setItem("userId", response.data.id);
      router.push("/");
    } catch (error: any) {
      console.log(error.response);
      setIslogin(false);
    }
  };

  return (
    <div className='container w-[480px] mx-auto flex justify-center'>
      <div className='w-full px-5'>
        {/* Header - Navbar */}
        <div className='flex justify-between justify-items-center pt-10'>
          <div className='opacity-0 text-2xl'>
            <HiArrowNarrowRight></HiArrowNarrowRight>
          </div>
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
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor='' className='text-sm text-[#9C9AA8]'>
              Your Email
            </label>
            <input
              type='email'
              name='email'
              id='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-b-[1.5px] focus:outline-0 mt-3'
            />
            <label htmlFor='' className='text-sm mt-5 text-[#9C9AA8]'>
              Password
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              name='password'
              id='user_pass'
              className='border-b-[1.5px] focus:outline-0 mt-3'
            />

            {isLogin ? "" : <h1>Username or Password incorrect</h1>}

            {/* Button */}
            {/* There are 2 buttons are created, Log In with personal email or Google personal account */}
            <div className='flex flex-col justify-center mt-20 font-[T-Medium]'>
              {/* <Link href={"/"}> */}
              <button
                type='submit'
                className=' bg-[#408CFC] rounded-3xl text-white py-4 text-lg w-[327px] m-auto'
              >
                Log In
              </button>
              {/* </Link> */}
              <p className='text-center my-5 text-sm text-[#9C9AA8] font-[T-Regular]'>
                or with
              </p>
              <Link href={"/api/auth/signin"}>
                <button className='bg-[#FF6464] rounded-3xl text-white py-4 text-lg w-[327px] m-auto'>
                  Google
                </button>
              </Link>
            </div>
            {/* Button */}
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

export default LoginPage;
