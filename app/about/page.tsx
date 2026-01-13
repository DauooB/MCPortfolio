"use client";
import React from 'react'
import MCButton from "@/components/MCButton";
import { useRouter } from "next/navigation";
import ItemFrame from "@/components/ItemFrame";

const page = () => {
    const router = useRouter();
    return (

        <div className=' flex flex-col gap-3 justify-center items-center max-w-5xl mx-auto'>
            <div className='text-white text-4xl mt-30'>
                About Me
            </div>
            <div className='flex
            bg-gray-900 
            p-6 
            rounded-md 
            shadow-lg
            text-gray-300
            text-sm md:text-base
            border-t-3 border-t-zinc-300
            border-l-3 border-t-zinc-300
            border-r-3 border-gray-700
            border-b-3 border-gray-700'>
                <div>
                    <img src="/profilepic.png" alt="Profile Picture" className='min-w-40 max-h-42 md:w-64 md:h-64 mr-6 rounded-md' />
                </div>
                <div >
                    <span>Hello! My name is </span>
                    <span className='text-yellow-300'> Dauoo Bhaiya</span>, a Computer Science and Engineering student at International Institute of Information Technology, Naya Raipur. I have a deep passion for technology and programming, which has driven me to explore various facets of computer science. I am interested in web development. I have worked on several projects that showcase my skills in front-end and back-end development. I enjoy learning new technologies and applying them to solve real world problems.
                </div>
            </div>

            <div className='w-full max-w-4xl flex flex-col mt-6 p-6'>
                <div className='text-white text-2xl mt-10 mb-4'>
                    Skills
                </div>
                <div className='flex flex-wrap gap-4'>
                    <ItemFrame label="Frontend Dev">
                        <img src="/skills/frontend-development.png" alt="Drontend Development" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Backend Dev">
                        <img src="/skills/backend-development.png" alt="Backend Development" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Version Control">
                        <img src="/skills/version-control.png" alt="Version Control" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Deployment">
                        <img src="/skills/deployment&hosting.png" alt="Deployment & Hosting" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="DBMS">
                        <img src="/skills/dbms.png" alt="DBMS" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Authentication">
                        <img src="/skills/authentication.png" alt="Authentication" className='w-full h-full object-contain' />
                    </ItemFrame>

                </div>
                <div className='text-white text-2xl mt-10 mb-4'>
                    Programming Languages
                </div>
                <div className='flex flex-wrap gap-4'>
                    <ItemFrame label="Python">
                        <img src="/languages/python.png" alt="Python" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="C++">
                        <img src="/languages/cpp.png" alt="C++" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="JavaScript">
                        <img src="/languages/javascript.png" alt="JavaScript" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Java">
                        <img src="/languages/java.png" alt="Java" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="HTML">
                        <img src="/languages/html.png" alt="HTML" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="CSS">
                        <img src="/languages/css.png" alt="CSS" className='w-full h-full object-contain' />
                    </ItemFrame>
                </div>
                <div className='text-white text-2xl mt-10 mb-4'>
                    Tools / Frameworks / Platforms
                </div>
                <div className='flex flex-wrap gap-4'>
                    <ItemFrame label="Node.js">
                        <img src="/tools/nodejs.png" alt="Node.js" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Express.js">
                        <img src="/tools/expressjs.png" alt="Express.js" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="React.js">
                        <img src="/tools/reactjs.png" alt="React.js" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Next.js">
                        <img src="/tools/nextjs.png" alt="Next.js" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Github">
                        <img src="/tools/github.png" alt="Github" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Clerk">
                        <img src="/tools/clerk.png" alt="Clerk" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="Convex">
                        <img src="/tools/convex.png" alt="Convex" className='w-full h-full object-contain' />
                    </ItemFrame>
                    <ItemFrame label="MongoDB">
                        <img src="/tools/mongodb.png" alt="MongoDB" className='w-full h-full object-contain' />
                    </ItemFrame>
                </div>
            </div>

            <div className='mb-30'>
                <MCButton className="pt-3 px-5" fullWidth onClick={() => router.push("/")}>
                    Back to main menu
                </MCButton>
            </div>
        </div>
    )
}

export default page