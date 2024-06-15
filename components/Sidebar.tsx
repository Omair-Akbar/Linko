import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
const Sidebar = ({ user }: { user: any }) => {
  return (
    <div className='hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded-lg'>
      <div className='flex relative flex-col items-center justify-between'>
        <div className='w-full h-16 overflow-hidden'>
          {user && <Image src={"/Banner.webp"} alt='Banner' width={200} height={200} className='w-full h-full rounded-t' />}
        </div>

        <div className='my-1 absolute top-10 left-[40%]'>
          <ProfilePhoto src={user && user?.imageUrl} />
            </div>
          <div className='border-b border-b-gray-300'>
            <div className='p-2 mt-5 text-center '>
              <h1 className=' hover:underline cursor-pointer'>{user ? `${user.firstName} ${user.lastName}`:`Name`}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
