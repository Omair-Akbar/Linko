"use client"
import React from 'react'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { deletePostAction } from '@/lib/serveractions'

const DeleteButton = ({id}:{id:string}) => {

  return (
    <Button onClick={()=>{deletePostAction(id)}} className='rounded-full' variant={"outline"} size={"icon"}>
            <Trash2 />
          </Button>
  )
}

export default DeleteButton
