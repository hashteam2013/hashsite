import Image from "next/image";
import Icons from "../Icons/Icons";
// import Button from "../Button/Buttons";

const BannerInner = () => {
    return(
        <>
            <div className="flex flex-wrap w-full relative lg:flex-nowrap items-center px-4 xl:px-32 pt-24  lg:pb-24 pb-0">
                <div className="w-full lg:w-2/3 lg:pr-32 pr-4 pl-4 relative z-40">
                    <h2 className="lg:text-7xl 2xl:text-9xl text-6xl text-black font-black uppercase">We are Skilled in </h2>
                    <div className="flex flex-wrap gap-4 text-2xl font-semibold md:mt-4 lg:mt-0"> <span className="text-4xl w-auto lg:mr-4 lg:w-1/6 border-b-4 border-primary border-double pb-6 h-full uppercase font-bold"> Web Design </span>  <h2 className="lg:text-7xl 2xl:text-9xl text-6xl text-black font-black uppercase">and </h2>  
                        <div className="flex gap-4 md:gap-x-12 lg:gap-x-6 items-center hidden md:flex">
                            <div className="py-8 px-6 rounded-full bg-primary transform -rotate-90">
                                <span className="text-black font-normal text-base -mr-12">development</span>
                            </div>
                            <div className="">
                             <Image src="/images/img-s-60.webp" alt="hash" className="w-auto ml-0 lg:-ml-8 relative z-90 " width={100} height={100} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col justify-start lg:items-center items-start mt-8">
                        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-5 justify-start items-center lg:w-1/2 w-full">
                            <Image src="/images/img-s-61.webp" alt="hash" className="w-auto" width={50} height={50} />
                            <div className="">
                                <p className="text-lg font-semibold">We are a full-service digital agency that builds fascinating user experiences. our team creates and exceptional UI design and functionality. </p>
                                {/* <Button className="bg-transparent w-40 mt-8 flex items-center font-semibold border-b-2 border-black rounded-none">Get Started Now<Image src="/images/arrow-right-half.webp" className="w-auto ml-2" width={10} height={10} /> </Button> */}
                            </div>
                        </div>
                    </div>  
                </div> 
                <div className="w-3/5 lg:w-2/6 mx-auto">
                    <div className="flex justify-center relative items-center ">
                        
                        <div className="relative">
                            <img src="/images/img-s-68.webp" className="w-full rounded-l-full" width={100} height={100} />
                            <div className="absolute before:content-[*] bg-primary w-full h-full rounded-l-full top-0 left-0 opacity-70"></div>
                        </div>
                        <div className="">
                            <img src="/images/img-s-69.webp" className="w-full mb-20 rounded-r-full" width={100} height={100} />
                        </div>
                        
                        <img src="/images/img-s-62.webp" className="w-auto absolute top-4 left-0 lg:top-6 lg:left-16 animate-bounce " width={20} height={20} />
                        
                        <div className="absolute lg:bottom-40 bottom-10 right-0 flex gap-4 items-center">
                            <div className="p-6 bg-primary rounded-full border-white border-4 text-white cursor-pointer" >
                                <Icons name="play" />
                            </div>
                        </div>
                    </div>
                </div>
                    
                <Image src="/images/img-s-64.webp" alt="hash" className="absolute bottom-0 left-0 hidden lg:block" width={400} height={100} />
            </div>
        </>
    );
};
export default BannerInner;