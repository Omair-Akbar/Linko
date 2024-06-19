import React from 'react'
import { IPostDocument } from '@/models/postmodel.';
import IndiviualPost from './IndiviualPost';


const Posts = async ({ posts }: { posts: IPostDocument[] }) => {
  return (
    <div>
      {
        posts.map((post, index) => {
          return (
            <IndiviualPost key={index} post={post} />
          )
        })}

    </div>
  )
}

export default Posts
