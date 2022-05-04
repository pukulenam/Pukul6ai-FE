import React from 'react';
import Card from '../Card';
import img1 from '../../asset/home/consultency.png';
import img2 from '../../asset/home/busisness_grow.png';
import img3 from '../../asset/home/support-logo.png';

function Part1() {

    const obj1 = {
        "img": img1,
        "title": "Konsultasi Dan Tutor",
        "text": "Kami dapat memberikan konsultasi tanpa dipungut biaya awal bila anda ingin melakukan proyek atau penelitian di bidang AI dan kesehatan."
    }

    const obj2 = {
        "img": img2,
        "title": "Transformasi Digital Dan Data",
        "text": "Kami dapat membantu anda untuk bermigrasi dan menyesuaikan solusi teknologi yang tepat, terlepas apakah anda membangun UMKM atau menggunakannya sebagai individual."
    }

    const obj3 = {
        "img": img3,
        "title": "Konsultasi Dan Tutor",
        "text": "Baik mahasiswa, dokter, atau siswa SMP, semuanya berhak mendapat pelayanan yang setara dan setimbang oleh ahli kami. Menyesuaikan kebutuhan anda."
    }
    
    return (
        <div className='py-16'>
            <h2 className='text-3xl font-bold'>Apa Yang Kami Lakukan</h2>
            <p className='px-6 lg:px-52'><br/>Mengatur teknis berita memang keseharian kami. Namun kami juga senang bila dapat membantu, serta memberikan dampak. Kami dapat membantu tidak hanya proses transformasi digital, juga transformasi data sesuai dengan kebutuhan terkini. Kami dapat membantu penelitian dan pengembangan teknologi khususnya kecerdasan buatan. Selain itu, bersama dokter-dokter muda kami yang cakap dalam bidang teknologi, kami dapat melaksanakan penelitian di bidang kesehatan.</p>
            <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-40">
                <Card obj={obj1} />
                <Card obj={obj2} />
                <Card obj={obj3} />
            </div>
        </div>
    )
}

export default Part1;