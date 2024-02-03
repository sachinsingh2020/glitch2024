import React from 'react'
import { MdMail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Home = () => {
    return (
        <div
            className='flex justify-center'
        >
            <div
                className='w-full flex justify-center items-center flex-col'
            >
                <div
                    className='flex flex-col justify-between items-center bg-white bg-opacity-30 text-black relative shadow-sm font-mono backdrop-filter backdrop-blur-[15px] w-[85%] mt-4 rounded-xl px-8 py-7 mt-8'
                    style={{
                        fontFamily: "space-grotesk, sans-serif",
                    }}
                >
                    <div
                        className='text-5xl font-[700]'
                    >
                        Explore
                        <span
                            className='mx-2 text-[#FE7C2B]'
                        >
                            Limitless
                        </span>
                        Creative
                        <span
                            className='mx-2 text-[#FE7C2B]'
                        >
                            Possibilities

                        </span>
                    </div>
                    <div
                        className='mt-6 text-[20px]'
                    >Uniting tech and culture for limitless creativity and community enrichment at the University School. Explore, express, engage.</div>
                </div>
                <div
                    className='flex justify-between items-center bg-white bg-opacity-30 text-black relative shadow-sm font-mono backdrop-filter backdrop-blur-[15px] rounded-xl px-4 py-2 mt-4'
                >
                    <div>
                        <MdMail
                            className='text-3xl mx-2 text-[#ffa46c]'
                        />
                    </div>
                    <div>
                        <AiFillInstagram
                            className='text-3xl mx-2 text-[#ffa46c]'
                        />
                    </div>
                    <div>
                        <FaTwitter
                            className='text-3xl mx-2 text-[#ffa46c]'
                        />
                    </div>
                    <div>
                        <FaLinkedinIn
                            className='text-3xl mx-2 text-[#ffa46c]'
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
