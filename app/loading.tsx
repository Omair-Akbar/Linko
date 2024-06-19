import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
        <div className='absolute top-0 left-0 right-0 w-full h-[90vh] flex flex-col  items-center justify-center gap-6'>
            <div>
                <Image alt='' height={80} width={80} src={"/logo.png"}></Image>
            </div>
            <div className=' loader'>
            </div>
        </div>
    )
}

export default loading
