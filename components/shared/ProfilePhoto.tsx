import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const ProfilePhoto = ({ src }: { src: any }) => {
  return (
    <div>
      <Avatar>
        <AvatarImage src={src} alt="img" />
        <AvatarFallback>DP</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default ProfilePhoto
