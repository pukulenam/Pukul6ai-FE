import React from 'react';
import bg from '../../asset/counter/counter-banner.jpg';
import cou from '../../asset/counter/counter2.png';

function Part3() {
    return (
        <React.Fragment>
            <div className='hidden lg:contents'>
                <img className='w-full z-0 opacity-20' src={bg} alt='' />
                <div className='lg:mx-24 mx-6'>
                    <div className='absolute top-8 z-10 px-24 grid grid-cols-1 lg:grid-cols-4 place-items-start'>
                        <div className='col-span-1 '>
                            <div className='grid grid-cols-2 grid-rows-1 text-xl '>
                                <div className='col-span-1'>
                                    <center>
                                        <img alt='' src={cou} />
                                    </center>
                                </div>
                                <div className='col-span-1 text-left'>
                                    <h3 className='text-3xl'>9</h3>
                                    <br/>
                                    <p>Talenta Muda <br/>Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 '>
                            <div className=' grid grid-cols-2 grid-rows-1 text-xl'>
                                <div className=' col-span-1'>
                                    <center>
                                        <img alt='' src={cou} />
                                    </center>
                                </div>
                                <div className='col-span-1 text-left'>
                                    <h3 className='text-3xl'>59</h3>
                                    <br/>
                                    <p>Sertifikasi Nasional Dan Internasional</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 '>
                            <div className=' grid grid-cols-2 grid-rows-1 text-xl'>
                                <div className=' col-span-1'>
                                    <center>
                                        <img alt='' src={cou} />
                                    </center>
                                </div>
                                <div className='col-span-1 text-left'>
                                    <h3 className='text-3xl'>61</h3>
                                    <br/>
                                    Penghargaan Nasional Dan Internasional
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 '>
                            <div className=' grid grid-cols-2 grid-rows-1 text-xl'>
                                <div className=' col-span-1'>
                                    <center>
                                        <img alt='' src={cou} />
                                    </center>
                                </div>
                                <div className='col-span-1 text-left'>
                                    <h3 className='text-3xl'>10</h3>
                                    <br/>
                                    <p className='mr-20'>Negara</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='visible lg:hidden'>
                <img className='w-full h-72 object-cover z-0 opacity-20' src={bg} alt='' />
                    <div className=''>
                        <div className='absolute top-8 z-10 lg:px-24 grid grid-cols-2 grid-flow-row'>
                            <div className='col-span-1 '>
                                <div className='grid grid-cols-2 grid-rows-1 text-xl '>
                                    <div className='col-span-1'>
                                        <center>
                                            <img className='object-cover h-6 w-6' alt='' src={cou} />
                                        </center>
                                    </div>
                                    <div className='col-span-1 text-left'>
                                        <h3 className=''>9</h3>
                                        <p className='text-sm'>Talenta Muda <br/>Indonesia</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-1 '>
                                <div className='grid grid-cols-2 grid-rows-1 text-xl '>
                                    <div className='col-span-1'>
                                        <center>
                                            <img className='object-cover h-6 w-6' alt='' src={cou} />
                                        </center>
                                    </div>
                                    <div className='col-span-1 text-left'>
                                        <h3 className=''>59</h3>
                                        <p className='text-sm'>Sertifikasi Nasional Dan Internasional</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-1 '>
                                <div className='grid grid-cols-2 grid-rows-1 text-xl '>
                                    <div className='col-span-1'>
                                        <center>
                                            <img className='object-cover h-6 w-6' alt='' src={cou} />
                                        </center>
                                    </div>
                                    <div className='col-span-1 text-left'>
                                        <h3 className=''>61</h3>
                                        <p className='text-sm'>Penghargaan Nasional Dan Internasional</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-1 '>
                                <div className='grid grid-cols-2 grid-rows-1 text-xl '>
                                    <div className='col-span-1'>
                                        <center>
                                            <img className='object-cover h-6 w-6' alt='' src={cou} />
                                        </center>
                                    </div>
                                    <div className='col-span-1 text-left'>
                                        <h3 className=''>10</h3>
                                        <p className='text-sm'>Negara</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Part3;