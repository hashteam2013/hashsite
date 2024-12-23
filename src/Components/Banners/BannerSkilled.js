import Image from "next/image";
import Icons from "../Icons/Icons";
import Button from "../Button/Buttons";

const BannerInner = () => {
    return(
        <>
            <div className="flex flex-wrap w-full relative lg:flex-nowrap items-center px-32 py-24 ">
                <div className="w-full md:w-2/3 pr-32 pl-10 relative z-40">
                    <h2 className="text-9xl text-black font-black uppercase">We are Skilled in </h2>
                    <div className="flex gap-4 text-2xl font-semibold"> <span className="text-4xl w-1/6 border-b-4 border-primary border-double pb-6 h-full uppercase font-bold"> Web Design </span>  <h2 className="text-9xl text-black font-black uppercase">and </h2>  
                        <div className="flex gap-4 items-center">
                            <div className="py-8 px-6 rounded-full bg-primary transform -rotate-90">
                                <span className="text-black font-normal text-base -mr-12">development</span>
                            </div>
                            <Image src="/images/img-s-60.webp" className="w-full -ml-8 relative z-90" width={100} height={100} />
                        </div>
                        
                    </div>
                        <div className="flex flex-col justify-start items-center mt-8">
                            <div className="flex gap-5 justify-start items-center w-1/2">
                                <Image src="/images/img-s-61.webp" className="w-auto" width={50} height={50} />
                                <div className="">
                                    <p className="text-lg font-semibold">We are a full-service digital agency that builds fascinating user experiences. our team creates and exceptional UI design and functionality. </p>
                                    <Button className="bg-transparent w-40 mt-8 flex items-center font-semibold border-b-2 border-black rounded-none">Get Started Now<Image src="/images/arrow-right-half.webp" className="w-auto ml-2" width={10} height={10} /> </Button>
                                </div>
                            </div>
                        </div>  
                </div> 
                <div className="w-full md:w-2/6">
                    <div className="flex justify-center relative items-center ">
                        <img src="/images/img-s-68.webp" className="w-full mt-32 rounded-l-full" width={100} height={100} />
                        <img src="/images/img-s-69.webp" className="w-full mb-32 rounded-r-full" width={100} height={100} />
                        <img src="/images/img-s-62.webp" className="w-auto absolute top-6 left-16 animate-bounce" width={100} height={100} />
                        <div className="absolute before:content-[*] bg-primary w-1/2 h-100 mt-32 rounded-l-full top-0 left-0 opacity-70"></div>
                        <div className="absolute bottom-20 right-0 flex gap-4 items-center">
                            <div className="p-6 bg-primary rounded-full border-white border-2 text-white" >
                                <Icons name="play" />
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/images/img-s-64.webp" className="absolute bottom-0 left-0 " width={400} height={100} />
               
            </div>
        </>
    );
};
export default BannerInner;