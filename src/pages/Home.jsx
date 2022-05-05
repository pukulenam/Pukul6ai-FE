import React from 'react';
import Navbar from '../components/home/Navbar';
import Welcome from '../components/home/Welcome';
import Part1 from '../components/home/Part1';
import Part2 from '../components/home/Part2';
import Part3 from '../components/home/Part3';
import Part4 from '../components/home/Part4';
import Part5 from '../components/home/Part5';
import Footer from '../components/Footer';

function Home() {
    
    return (
        <div className='bg-white text-black'>
            <Navbar />
            <div className='grid grid-cols-1 lg:grid-cols-12 grid-flow-row'>
                <div className='col-span-1 lg:col-span-12'>
                    <Welcome />
                </div>
                <div className='col-span-1 lg:col-span-12'>
                    <Part1 />
                </div>
                <div className='col-span-1 lg:col-span-12'>
                    <Part2 />
                </div>
                <div className='col-span-1 lg:col-span-12'>
                    <div className='bg-red-300 text-white relative'>
                        <Part3 />
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-12'>
                    <div className='bg-red-300 text-white relative'>
                        <Part4 />
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-12'>
                    <div className='bg-red-300 text-white relative grid grid-cols-3'>
                        <Part5 />
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-12'>
                    <div className='bg-red-400 text-white relative grid grid-cols-2 lg:grid-cols-3 py-24'>
                        <h2 className='lg:mx-52 mx-4 lg:text-5xl text-2xl lg:col-span-2 col-span-1 text-left'>Kontak Kami Sekarang Juga Untuk Konsultasi Dan Mulai Proyek!</h2>
                        <a className='hover:bg-white hover:text-red-400 hover:border-yellow-400 border-4 lg:mx-32 mx-4 my-10 col-span-1 p-6' href='https://wa.me/6285339435369?text=Halo,%20Saya%20tertarik%20untuk%20konsultasi'>HUBUNGI KAMI</a>
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-12'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;