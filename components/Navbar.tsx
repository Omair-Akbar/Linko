import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import NavItems from './NavItems'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='fixwd w-full bg-white z-50 p-1 shadow-md'>
      <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
        <div className='flex items-center gap-2'>
          <Image
            alt='' height={55} width={55}
            src={"/logo.png"} />
          <div className='sm:block hidden'>
            <SearchInput/>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='md:block hidden'>
            <NavItems />
          </div>
          <div>
            <SignedIn>
              <div className='flex flex-col justify-between'>
              < UserButton />
              <p className='pl-1 text-[#666666] text-sm '>Me</p>
              </div>
            </SignedIn>
            <SignedOut>
              <Button className=' rounded-full text-blue-700 border-blue-700 hover:text-blue-900' variant={'outline'}>
                <SignInButton/>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
