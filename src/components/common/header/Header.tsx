'use client'
import HeaderBanner from '@/components/common/header/HeaderBanner'
import HeaderCTA from '@/components/common/header/HeaderCTA'
import HeaderNav from '@/components/common/header/HeaderNav'
import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import React, { FC } from 'react'
interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return <header
        className='relative pt-2'
    >
        {/* navbar */}
        <HeaderNav />
        {/* banner */}
        <HeaderBanner />
        {/* cta */}
        <HeaderCTA />
        {/* dev 3d icon */}
        <div className='w-full md:w-2/3 h-full absolute -top-1 -right-8 xl:top-0 xl:right-0 pointer-events-none'>
            {/* using spline scene */}
            <Spline
                scene="https://prod.spline.design/pKRClpK50GB4yH6d/scene.splinecode"
            />
            {/* using png image */}
            {/* <Image
                src='/dev-icons.png'
                alt='dev_icon'
                fill
                className='object-contain pointer-events-none w-full h-full'
            /> */}
        </div>
    </header>
}

export default Header