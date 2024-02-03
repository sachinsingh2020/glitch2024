import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ categories, currentPage, setCurrentPage }) => {
    return (
        <div className='flex justify-center'>
            <div
                className='flex flex-col md:flex-row justify-between items-center bg-white bg-opacity-30 text-black relative shadow-sm font-mono backdrop-filter backdrop-blur-[15px] w-[90%] md:w-[85%] mt-4 rounded-xl px-8 py-3'
                style={{
                    fontFamily: 'Poppins, sans-serif',
                }}
            >
                <div className='text-[#FE7C2B] text-2xl font-[700]'>GLITCH @ GBU</div>
                <div
                    className='flex font-semibold text-[16px] space-x-4 font-[500] uppercase md:mt-0'
                    style={{
                        fontFamily: 'Sora, sans-serif',
                    }}
                >
                    {
                        categories.map((category, index) => {

                            return (
                                <Link to={`/${category.path}`} key={index}>
                                    <div
                                        key={index}
                                        className={`text-[13px] md:text-[1rem] font-bold mt-2 md:mt-0 cursor-pointer ${currentPage === category.name ? 'text-[#FE7C2B]' : ''
                                            }`}
                                        onClick={() => {
                                            setCurrentPage(category.name);
                                        }}
                                    >
                                        {category.name}
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
