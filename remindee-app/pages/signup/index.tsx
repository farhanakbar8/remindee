import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
// import { GetServerSideProps } from "next";
// import {
//   ClientSafeProvider,
//   getProviders,
//   LiteralUnion,
// } from "next-auth/react";
// import { BuiltInProviderType } from "next-auth/providers";
import React, { SyntheticEvent, useState } from "react";
import api from "../../client/api";
import { useRouter } from "next/dist/client/router";

// type LoginPageProps = {
//   providers: Record<
//     LiteralUnion<BuiltInProviderType, string>,
//     ClientSafeProvider
//   >;
// };

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       providers: await getProviders(),
//     },
//   };
// };

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      // setLoading(true);
      // setError(null);
      await api.post("/authentication/register", {
        name: name,
        email: email,
        password: password,
      });
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error.response);
      if (error.response) {
        console.log("Email is already taken");
        // setError("Email is already taken");
      }
      // setLoading(false);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className='container w-[480px] mx-auto flex justify-center'>
      <div className='w-full px-5 font-[T-Regular]'>
        {/* Header - Navbar */}
        <div className='flex justify-between items-center pt-10'>
          <Link href={"login"}>
            <button className='text-2xl'>
              <HiArrowNarrowLeft></HiArrowNarrowLeft>
            </button>
          </Link>
          <p className='select-none text-xl'>Sign Up</p>
          <div className='opacity-0 text-2xl'>
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </div>
        </div>
        {/* Header - Navbar */}
        {/* Register Form */}
        <div className='mt-20'>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor='' className='text-sm text-[#9C9AA8]'>
              Your Name
            </label>
            <input
              type='text'
              name='name'
              id='user_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-b-[1.5px] focus:outline-0 mt-3 text-sm font-semibold'
            />
            <label htmlFor='' className='text-sm mt-5 text-[#9C9AA8]'>
              Your Email
            </label>
            <input
              type='email'
              name='email'
              id='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-b-[1.5px] focus:outline-0 mt-3 font-semibold text-sm'
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

export default SignupPage;
