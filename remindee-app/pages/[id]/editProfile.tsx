import Link from "next/link";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import api from "../../client/api";

const EditProfile = () => {
  const [name, setName] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await api.put(`/profile?id=${router.query.id}`, {
        name: name,
      });
      router.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const id = router.query.id;
    api.get(`/profile?id=${id}`).then((res) => {
      setName(res.data.name);
    });
  }, []);

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
          <form
            onSubmit={handleSubmit}
            action=''
            className='flex flex-col gap-5'
          >
            <div className='flex flex-col gap-1'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
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

export default EditProfile;
