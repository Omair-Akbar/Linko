import Link from 'next/link'
import React from 'react'
import { AiFillHome , AiFillMessage } from 'react-icons/ai'
import { HiUsers, HiBell, HiBriefcase  } from 'react-icons/hi'

type NAVITEMS = {
    src:string,
    icon:JSX.Element,
    text:string
}

const navItems:NAVITEMS[] = [
    {
        src:"/",
        icon:<AiFillHome />,
        text:"Home",
    },{
        src:"/networks",
        icon:<HiUsers />,
        text:"My Network",
    },{
        src:"/job",
        icon:<HiBriefcase />,
        text:"Jobs",
    },{
        src:"/message",
        icon:<AiFillMessage />,
        text:"Messaging",
    },{
        src:"/notification",
        icon:<HiBell />,
        text:"Notification",
    }
]
const NavItems = () => {
  return (
    <div className='flex gap-8'>
        {
            navItems.map((navItem,index)=>{
                return(
                    <div key={index} className='flex flex-col items-center cursor-pointer '>
                       <Link className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black pt-2' href={navItem.src}>
                        <span >{navItem.icon}</span>
                        < p className='text-sm' >{navItem.text}</p>
                       </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NavItems
