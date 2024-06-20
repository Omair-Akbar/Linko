"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { IoBookmark } from "react-icons/io5";


const SocialOptions = () => {

  let [toggleLike, setToggleLike] = useState(false)
  let [toggleSave, setToggleSave] = useState(false)
  return (
    <div>
      <div className='flex items-center m-1 justify-around'>
        <Button onClick={() => { setToggleLike(!toggleLike) }} variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black '>{toggleLike ? <><AiFillLike className=' text-blue-600' /><p className='text-xs'>Liked</p></> : <><AiOutlineLike /><p>Likes</p></>}</Button>
        <Button variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'> <FaRegCommentDots /><p>Comments</p></Button>
        <Button variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'> <MdOutlineShare /><p>Share</p></Button>
        <Button onClick={() => { setToggleSave(!toggleSave) }} variant={"ghost"} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'> {toggleSave ? <><IoBookmark /><p className='text-xs'>Saved</p></> : <><IoBookmarkOutline /><p>Save</p></>}</Button>
      </div>
    </div>
  )
}

export default SocialOptions
