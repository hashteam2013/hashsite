import Image from "next/image";
import Button from "../Button/Buttons";

const ProjectMindAbout = () =>{
    return(
        <>
            <div className="flex flex-col  bg-about3 bg-cover bg-no-repeat bg-center items-center relative gap-6 py-6 px-8 lg:py-36 lg:px-24">
                <div className=" flex mx-auto justify-center relative">
                    <h2 className="text-4xl lg:text-7xl text-center w-3/4 z-40 font-bold relative"> <span className="lg:text-white text-black"> Ready </span> for your digital success?</h2>
                    <span className="absolute px-10 lg:px-32 h-8 lg:h-20 mt-1 z-10 lg:left-40 left-20 bg-primary rounded-2xl"></span>
                    
                </div>
                
                <p className="text-lg text-black z-20">Our services solve any business problem.</p>
                <Image src="/images/uih7.png" className="w-auto absolute z-0 top-10 " quality={100} alt="hash" width={500} height={100} />
                <Button variant="solid" className="">Contact Us
                <Image src="/images/Highlight_05.png" className="w-auto absolute -top-6 -left-6" width={20} height={20} alt="test"/>
                <Image src="/images/Highlight_05.png" className="w-auto absolute -bottom-6 -right-6 transform rotate-180" width={20} height={20} alt="test"/>
                </Button>
                {/* <Button className="bg-primary border-2 border-primary mt-4 flex items-center font-semibold py-4 px-8 relative z-20 text-white rounded-full hover:bg-transparent hover:text-primary"> Learn More
                <Image src="/images/Highlight_05.png" className="w-auto absolute -top-6 -left-6" width={20} height={20} alt="test"/>
                <Image src="/images/Highlight_05.png" className="w-auto absolute -bottom-6 transform rotate-180 -right-6" width={20} height={20} alt="test"/>
                 </Button> */}
            </div>
        </>
    )
};
export default ProjectMindAbout;