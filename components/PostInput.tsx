"use client"
import React, { useState } from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { Input } from './ui/input'
import { PostDialog } from './PostDialog'
import { Button } from './ui/button'
import { FaImage } from 'react-icons/fa'
import { Plus } from 'lucide-react'

const PostInput = ({ user }: { user: any }) => {
    const [open, setOpen] = useState<boolean>(false);
    const inputHandler = () => {
        setOpen(true);
    }

    return (
        <div className='bg-white p-4 pb-2 m-2 md:m-0 rounded-lg border border-gray-300'>
            <div className='flex items-center gap-3'>
                <ProfilePhoto src={user?.imageUrl} />
                <Input type='text' onClick={inputHandler} placeholder='Start a post' className=' rounded-full focus-visible:ring-0 bg-gray-100 h-12 cursor-pointer  border-gray-300 ' />
                <PostDialog user={user} setOpen={setOpen} open={open} src={user?.imageUrl} />
            </div>
            <div className="flex justify-evenly items-center m-3">
                <Button className="gap-2" onClick={inputHandler} variant={"ghost"}>
                    <FaImage className="text-xl text-blue-600" />
                    <p>Media</p>
                </Button>
                <Button className="gap-2" onClick={inputHandler} variant={"ghost"}>
                    <Plus className="text-slate-700" />
                    <p>More</p>
                </Button>
            </div>
        </div>
    )
}

export default PostInput
