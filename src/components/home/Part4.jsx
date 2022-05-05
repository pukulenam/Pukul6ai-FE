import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper'
import "swiper/css";
import "swiper/css/navigation";

import Team from './../Team';
import axios from 'axios';

function Part4() {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/admin')
        .then(res => {
            setPersons(res.data);
        })
    }, [])

    return (
        <div className='lg:px-24 px-4 pt-24'>
            <h3 className='text-2xl font-bold'>Lebih Dekat Dengan Tim Kami</h3>
            <p className='text-lg pt-4 mb-12'>Sembilan orang dengan banyak kemampuan yang berbeda-beda. <br/>Tidak lengkap rasanya kalau belum berkenalan satu-satu.</p>
        
            <Swiper 
                breakpoints={{
                    1000: { slidesPerView: 4 },
                }}
                slidesPerView={1}
                centeredSlides={false}
                autoplay={{ 
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className=""
            >
                {persons.map((item, id) => (
                    <SwiperSlide key={id}>
                        <Team img={item.image} name={item.full_name} desc={item.description} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Part4;