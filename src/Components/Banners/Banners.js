"use client"
import Image from "next/image";
import Button from "../Button/Buttons";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Banners = () =>{
    const [openModal , setOpenModal] = useState(false);
    const handleOpenPopup = () => {
       
        setOpenModal(true);
       
    };

    return(
        <>
            <div className="banner py-6 px-16 bg-hero bg-contain bg-right bg-no-repeat overflow-y-hidden">
                <div className="flex flex-wrap items-center lg:flex-nowrap">
                    <div className="w-full lg:w-1/2">
                        <div className=" pl-28 pr-10">
                            <h4 className="text-2xl text-gray-500">We are #hashers</h4>
                            <h2 className="text-5xxl font-poppins font-bold leading-11">Design, Development & Digital Marketing Services</h2>
                            <p className="text-2xl text-greyc mt-2 mb-5">Want to truly “Go Digital”, we are here to help you with your vision and mission for your business.</p>
                            <Button 
                            className="bg-mainbtn py-3 w-40 text-white font-bold shadow-inner">
                                Get a Quote
                            </Button>
                            
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 min-h-custom">
                        <div className="flex relative">
                            <Image src="/images/shape1.png" alt="banner-media" className="w-full contain position-top absolute top-2" width={500} height={250} />
                            <Image src="/images/shape2-1.png" alt="banner-media" className="w-full contain position-top absolute top-2" width={500} height={250} />
                            <Image src="/images/shape3.png" alt="banner-media" className="w-full contain position-top absolute top-2" width={500} height={250} />
                            <Image src="/images/shape4.png" alt="banner-media" className="w-full contain position-top absolute top-2" width={500} height={250} />
                            <Image src="/images/shape5.png" alt="banner-media" className="w-full contain position-top absolute top-2" width={500} height={250} />
                            <Image src="/images/shape6.png" alt="banner-media" className="w-full contain position-top absolute top-2" width={500} height={250} />
                            <Image src="/images/shape7.png" alt="banner-media" className="w-full contain position-top absolute top-2" width={500} height={250} />
                        </div>
                    </div>
                    {openModal && (
                        <Modal title="Delete Modal" onClose={() => setOpenModal(false)}/>
                    )}
                </div>
            </div>
        </>
    )
}
export default Banners;