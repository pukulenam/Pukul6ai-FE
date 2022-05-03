import React from "react";
import p6logo from "../asset/logo/pukulEnam.jpg";

function LoginCover() {
    return (
        <div className="shadow-lg">
            <div className="px-16 py-8 rounded-l">
                <span className="inline-block">
                    <img className="inline" alt='' src={p6logo} />
                    <h1 className='inline text-2xl lg:text-4xl px-4 lg:px-12'>PukulEnam AI</h1>
                </span>
            </div>
            <div className="bg-local bg-pict2 text-white text-center w-full bg-no-repeat bg-cover rounded-l pb-24">
                <h2 className='text-xl lg:text-3xl px-4 lg:px-12 py-16 lg:py-36'>Ceritakan Tugas Anda, <br/>Kami Bantu Bagai Teman Yang <br/>Selalu Ada</h2>
            </div>
        </div>
    )
}

export default LoginCover;