import { IPostDocument } from '@/models/postmodel.'
import Image from 'next/image'
import React from 'react'

const PostContent = ({ post }: { post: IPostDocument }) => {
  return (
    <div className='my-3'>
      <p className='my-3 px-4'>{post?.desc}</p>
      {
        post?.imageUrl && (
          <Image src={post?.imageUrl} width={1200} height={1200} alt='' className='w-full mx-auto' />
        )
      }

    </div>
  )
}

export default PostContent
