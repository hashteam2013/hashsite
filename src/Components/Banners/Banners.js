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
            <div className="banner py-6 px-16 bg-hero bg-contain bg-right bg-no-repeat -mt-32 max-w-screen-1xl mx-auto">
                <div className="flex flex-wrap justify-center mt-48">
                    <h2 className="text-8xl font-medium text-black">Creative & Digital Agency</h2>
                </div>
                <div className="flex flex-wrap items-end lg:flex-nowrap mt-20 mx-16">
                    <div className="w-full lg:w-1/3 relative">
                        <div className="relative">
                            <Image src="/images/banner-media.png" className="w-4/5 px-6" alt="hash" width={200} height={100} quality={100} /> 
                                <div className="absolute bottom-52 -left-52 flex w-auto items-center gap-x-10 transform transform -rotate-90">
                                    <h4 className="font-bold capitalize">Contact Us</h4>
                                    <Image src="/images/banner-media13.png" width={20} height={20} className="w-auto mx-4 transform rotate-90" quality={100} alt="hash" />
                                    <div className="flex items-center gap-2">
                                        <Image src="/images/banner-media8.png" width={20} height={20} className="w-auto transform rotate-90" quality={100} alt="hash" />
                                        <Image src="/images/banner-media9.png" width={20} height={20} className="w-auto transform rotate-90" quality={100} alt="hash" />
                                        <Image src="/images/banner-media10.png" width={20} height={20} className="w-auto transform rotate-90" quality={100} alt="hash" />
                                        <Image src="/images/banner-media11.png" width={20} height={20} className="w-auto transform rotate-90" quality={100} alt="hash" />
                                        <Image src="/images/banner-media12.png" width={20} height={20} className="w-auto transform rotate-90" quality={100} alt="hash" />
                                    </div>
                                </div>
                        </div>
                        <div className="absolute top-8 -right-80 flex w-3/4 items-start">
                            <Image src="/images/banner-media7.png" className="w-auto text-right" width={20} height={20} alt="hash" />
                            <p className="text-2xl"> <strong> DARK & LIGHT </strong>  with <br/> creative and mystical Website.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 h-full">
                        <div className="relative flex justify-center bottom-0 -ml-40">
                                <Image src="/images/banner-media2.png" className="w-auto absolute bottom-16 left-20" alt="hash" width={200} height={100} quality={100}/>
                                <Image src="/images/banner-media14.png" className="w-auto" alt="hash" width={800} height={200} quality={100} />
                                <Image src="/images/banner-media4.png" className="w-auto absolute bottom-16 right-10" alt="hash" width={150} height={50} quality={100}/>
                            <div className="absolute -top-10 right-0">
                                <div className="relative w-full flex justify-center items-center">
                                    <Image src="/images/banner-media5.png" className="absolute" alt="hash" width={35} height={35}/>
                                    <Image src="/images/banner-media6.png" className="w-auto animate-spin2" alt="hash" width={100} height={100}/>
                                </div>
                            </div>
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