import React from 'react'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { Badge } from './ui/badge'
import { IPostDocument } from '@/models/postmodel.'
import ProfilePhoto from './shared/ProfilePhoto'
import PostContent from './PostContent'
import SocialOptions from './SocialOptions'
import { currentUser } from '@clerk/nextjs/server'
import moment from 'moment';
import DeleteButton from './DeleteButton'
import { DeleteDialog } from './DeleteDialog'

const IndiviualPost = async ({ post }: { post: IPostDocument }) => {
  const fullName = post.user.firstName + " " + post.user.lastName
  const username = post.user.firstName + "-" + post.user.lastName
  const user: any = await currentUser();

  return (
    <div className='bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300'>
      <div className='flex gap-2 p-4'>
        <ProfilePhoto src={post?.user?.profilePhoto!} />
        <div className='flex items-center justify-between w-full'>
          <div>
            <h1 className='text-sm font-bold'>{fullName}{user?.firstName == post?.user?.firstName && <Badge className='ml-2' variant={"secondary"}>you</Badge>}</h1>
            <p className='text-xs text-gray-500 '>@{username}</p>
            <p className='text-xs text-gray-500 '>{moment(post.createdAt).fromNow()}</p>
          </div>
        </div>
        <div>
          {
            user?.firstName == post?.user?.firstName && <DeleteDialog id={String(post._id)} />
          }

        </div>
      </div>
      <PostContent post={post} />
      <SocialOptions />
    </div>
  )
}

export default IndiviualPost
