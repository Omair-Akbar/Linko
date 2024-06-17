import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
            <div className=' w-full h-[80vh] flex flex-col  items-center justify-center gap-6'>
                <div>
                    <Image alt='' height={80} width={80} src={"/logo.png"}></Image>
                </div>
                <div className=' loader'>
                </div>
            </div>
    )
}

export default loading
