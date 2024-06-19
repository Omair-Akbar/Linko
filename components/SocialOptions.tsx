import React from 'react'
import { Button } from './ui/button'
import { VscThumbsup } from "react-icons/vsc";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";

const SocialOptions = () => {
  return (
    <div>
        <div className='flex items-center m-1 justify-around'>
          <Button variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'> <VscThumbsup className='text-xl' /><p>Likes</p></Button>
          <Button variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'> <FaRegCommentDots /><p>Comments</p></Button>
          <Button variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'> <MdOutlineShare /><p>Share</p></Button>
          <Button variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'> <IoBookmarkOutline /><p>Save</p></Button>
        </div>
    </div>
  )
}

export default SocialOptions
