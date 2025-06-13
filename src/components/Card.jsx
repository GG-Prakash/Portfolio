import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, logo }) => {
    return (
        <div className={`w-full px-3 py-3 bg-white  h-80 rounded-2xl flex items-center group `}>
            <div className="h-auto overflow-y-hidden">
                <div className="flex h-full flex-col gap-5">
                    <div className="w-16 flex flex-col justify-between">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className={`text-xl md:text-xl font-titleFont font-bold text-black`}>
                            {title}
                        </h2>
                        <p className={`text-base font-semibold truncated text-black/80`}>
                            {des}
                        </p>
                        <span className="text-2xl text-[#61c3f1] opacity-0 group-hover:opacity-100 ">
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
