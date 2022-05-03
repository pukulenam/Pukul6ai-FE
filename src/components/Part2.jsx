import React from 'react';
import about from '../asset/about/about-part.jpg';

function Part2() {
    return (
        <div className='lg:py-20 lg:px-52 py-12 px-6 bg-gray-50 grid grid-cols-1 lg:grid-cols-2 place-items-center'>
            <div className='col-span-1'>
                <h2 className='font-bold text-left text-2xl text-gray-600'>Tentang Kami</h2>
                <p className='text-left pt-6'>Kami adalah tim gabungan yang terdiri atas UI/UX Engineer, Web Specialist, AI Engineer, Junior Doctor, Technical Writer, Data Engineer, Junior Analyst, Academic Writer, Telecommunication Engineer, dan Cloud Engineer. Diversitas kami adalah kekuatan kami. Karena bila digabungkan, banyak bidang yang kami geluti, kami merasa dapat membuat dampak lebih besar dari sekedar membuat berita.</p>
            </div>
            <div className='col-span-1'>
                <div className="rounded overflow-hidden shadow-xl">
                    <img alt='' src={about} />
                </div>
            </div>
        </div>
    )
}

export default Part2;