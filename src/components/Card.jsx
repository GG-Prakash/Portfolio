import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, logo }) => {
    return (
        <div className={`w-full px-3   h-80 rounded-2xl flex items-center transition-all duration-300 group bg-blue-100/50 shadow-md`}>
            <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-5 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-16 flex flex-col justify-between">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className={`text-xl md:text-2xl font-titleFont font-bold text-black`}>
                            {title}
                        </h2>
                        <p className={`text-base truncated text-black/80`}>
                            {des}
                        </p>
                        <span className="text-2xl text-[#61c3f1]">
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
