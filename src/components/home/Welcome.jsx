import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper'
import "swiper/css";
import "swiper/css/navigation";

function Welcome(props) {

    return (
        <React.Fragment>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide>
                    <div className='bg-local bg-pict1 text-white text-left w-full bg-no-repeat bg-cover'>
                        <h2 className='text-4xl lg:text-7xl px-4 lg:px-48 pt-16'>Ceritakan Tugas Anda, <br/>Kami Bantu Bagai Teman Yang <br/>Selalu Ada</h2>
                        <p className='text-xl lg:text-2xl px-4 lg:px-48 pt-16'>Perkenalkan! Kami tim PukulEnam.AI. Orang-orang yang mengatur teknis di <p/>balik berita hangat pukulenam.id. Sehingga anda tidak perlu membaca 1100<br/> berita dari seluruh dunia.</p>
                        <p className='lg:py-60 py-24'><br/></p> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-local bg-pict2 text-white text-left w-full bg-no-repeat bg-cover'>                        
                        <h2 className='text-4xl lg:text-7xl px-4 lg:px-48 pt-16'>Ceritakan Tugas Anda, <br/>Kami Bantu Bagai Teman Yang <br/>Selalu Ada</h2>
                        <p className='text-xl lg:text-2xl px-4 lg:px-48 pt-16'>PukulEnam menggunakan bantuan kecerdasan buatan dan automasi pada <br/>produksi dan pemeriksaan berita setiap harinya. Mengapa tidak <br/>melakukannya ke produk, usaha, atau tugas anda?</p>
                        <p className='lg:py-60 py-24'><br/></p> 
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}

export default Welcome;