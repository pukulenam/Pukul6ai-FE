import React from "react";

export default function Card({obj}) {
    return (
        <div className="rounded overflow-hidden shadow-lg col-span-1">
            <center>
                <img className="w-16 my-12" src={obj.img} alt="" />
            </center>
            <div className="px-6 lg:py-4">
                <div className="font-bold text-xl mb-2">{obj.title}</div>
                <p className="text-gray-700 text-base">
                    {obj.text}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span> */}
            </div>
        </div>
    );
}