"use client"
import Image from "next/image";
import Link from "next/link";

import Button from "@/Components/Button";
import GreenArrowRight from "@Assets/shapes/green-arrow-right.svg"
import MediaIcon from "@Libs/Icons/MediaIcon"
import GreenCard from "@Assets/images/banner-element/element-green-card.png"
import ElementLaptop from "@Assets/images/banner-element/element-laptop.png"

const HomepageBanner = ({backgroundImage, heading}) =>{
   
    return(
        <section className="pt-[131px] bg-cover" style={{backgroundImage : "url("+backgroundImage.src+")"}}>
            <div className="py-12 px-[100px]">
                <div className="flex flex-wrap justify-center">
                    <h1 className="text-8xl font-medium text-black font-unbound font-normal">{heading}</h1>
                </div>
                <div className="relative min-h-[750px] flex flex-wrap items-end lg:flex-nowrap">
                    <div className="absolute left-0 bottom-[150px] flex w-auto items-center gap-5 -rotate-90 origin-left">
                        <h4 className="font-bold capitalize text-xl font-unbound">Contact Us</h4>
                        <Image src={GreenArrowRight} width={81} height={20} className="block" quality={100} alt="hash" />
                        <div className="flex items-center gap-2">
                            <Link href="" className="w-8 h-8 rounded-full border border-black text-sm flex items-center justify-center rotate-90"><MediaIcon name="facebook"/></Link>
                            <Link href="" className="w-8 h-8 rounded-full border border-black text-sm flex items-center justify-center rotate-90"><MediaIcon name="instagram"/></Link>
                            <Link href="" className="w-8 h-8 rounded-full border border-black text-sm flex items-center justify-center rotate-90"><MediaIcon name="linkedin"/></Link>
                            <Link href="" className="w-8 h-8 rounded-full border border-black text-sm flex items-center justify-center rotate-90"><MediaIcon name="skype"/></Link>
                            <Link href="" className="w-8 h-8 rounded-full border border-black text-sm flex items-center justify-center rotate-90"><MediaIcon name="phone"/></Link>    
                        </div>
                    </div>
                    <div className="absolute top-[150px] left-[450px] flex items-start">
                        <Image src="/images/banner-media7.png" className="w-auto text-right" width={20} height={20} alt="hash" />
                        <p className="text-2xl font-unbound"> <strong>23+ Years Experience</strong> <br/> We provide you the best services</p>
                    </div>
                    <div className="absolute left-[56px] bottom-[70px]">
                        <Image src={GreenCard} alt="hash" width={374} height={100} quality={100} /> 
                    </div>
                    <div className="absolute left-[520px] bottom-[35px]">
                        <Image src={ElementLaptop} alt="hash" width={924} height={200} quality={100} />
                    </div>
                    <div className="absolute left-[470px] bottom-[95px]">
                        <Image src="/images/banner-media2.png" alt="hash" width={282} height={100} quality={100}/>
                    </div>
                    <div className="w-auto absolute bottom-[95px] right-[163px]">
                         <Image src="/images/banner-media4.png"  alt="hash" width={282} height={50} quality={100}/>
                    </div>
                    <div className="absolute top-[37px] right-[116px]">
                        <div className="relative w-full flex justify-center items-center">
                            <Image src="/images/banner-media5.png" className="absolute" alt="hash" width={35} height={35}/>
                            <Image src="/images/banner-media6.png" className="w-auto animate-spin2" alt="hash" width={232} height={100}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomepageBanner;