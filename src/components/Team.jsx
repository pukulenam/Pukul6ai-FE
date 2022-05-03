import React from "react";

export default function Team({img, name, desc}) {
    return (
        <div className="rounded overflow-hidden shadow-xl cursor-pointer border bg-white mx-3">
            <div className="grid grid-cols-1 grid-flow-row place-items-center">
                <div className="col-span-1">
                    <img className="w-48 h-48" src={`../team/${img}`} alt="" />
                </div>
                <div className="col-span-1 px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                        <p>{name}</p>
                    </div>
                    <p className="col-span-1 text-gray-700 text-base">
                        {desc}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span> */}
                </div>
            </div>
        </div>
    );
}