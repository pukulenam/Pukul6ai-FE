import React from 'react';

function Footer() {
    return (
        <React.Fragment>
            <div className='bg-slate-800 py-24 lg:px-52 px-4 text-white grid lg:grid-cols-3 grid-cols-2'>
                <div className='col-span-1 text-left'>
                    <h2 className='lg:text-5xl text-2xl'>PukulEnam.AI</h2>
                    <br/>
                    <p className='lg:text-lg text-gray-400'>Karena Teman, Selalu Ada</p>
                </div>
                <div className='col-span-1 text-left'>
                    <h2 className='lg:text-4xl text-xl'>Newsletter Kami</h2>
                    <br/>
                    <p className='lg:text-lg text-gray-400'>
                    Jangan lupa untuk berlangganan <a className='text-blue-600 hover:text-purple-700' href="https://www.pukulenam.id/">pukulenam.id</a> untuk mendapat berita terhangat setiap pagi, yang juga hasil kontribusi kami.    
                    </p>
                </div>
            </div>
            <div className='bg-slate-900 py-12 lg:px-52 text-white text-xl'>
                PukulEnam.AI
            </div>
        </React.Fragment>
    )
}

export default Footer;