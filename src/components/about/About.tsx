'use client'
import React, { FC } from 'react'
import Spline from '@splinetool/react-spline'
import { SquareArrowOutUpRight } from 'lucide-react'
interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
    const content = [
        'I am a software engineer based in the Vietnam.',
        "I specialize in building exceptional websites and applications. Currently focused on web development, I'm eager to work with a talented team. Passionate about new technologies, I'm a fast learner and a team player ready for new challenges. Seeking a full-time software engineer position. Interested in collaborating? Reach out!"
    ]
    const resume = 'link to resume'
    return <div className="w-full h-fit flex flex-row justify-center items-center">
        <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center items-center">
            <Spline
                scene="https://prod.spline.design/1Oy2-jHxkrewulmF/scene.splinecode"
            />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start px-6">
            <div className="w-full flex justify-center items-center mt-4 mb-6">
                <div
                    className='text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text'
                >
                    <p>ABOUT ME</p>
                </div>
            </div>
            {content.map((item, index) => (
                <p key={index} className="text-md md:text-xl font-extralight mt-4">{item}</p>
            ))}
            <div className="w-full flex justify-center items-center mt-8"            >
                <div className='flex justify-center items-center cursor-pointer hover:animate-bounce transition-all duration-300 ease-in-out'
                    onClick={() => window.open(resume, '_blank')}
                >
                    <p className="text-lg md:text-2xl font-semibold
            bg-gradient-to-r bg-clip-text text-transparent from-blueOne via-blueTwo to-blueThree
            ">View my resume
                    </p>
                    <SquareArrowOutUpRight size={24} className="inline-block ml-2
                    text-blueThree hover:text-blueTwo transition-all duration-300 ease-in-out
                " />
                </div>
            </div>
        </div>
    </div>
}

export default About