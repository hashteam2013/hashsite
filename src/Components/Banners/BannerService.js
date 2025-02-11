import Image from "next/image";
import Button from "../Button/Buttons";

const BannerService = () =>{
    return(
        <>
            <div className="flex items-center bg-offwhite p-32">
                <div className="w-1/12">
                    <Image src="/images/langol.png" alt="hash" className="w-auto animate-bounce" width={100} height={100} />
                </div>
                <div className="flex items-start gap-y-12 flex-col w-6/12">
                    <h2 className="text-8xl font-semibold capitalize font-lg">Our services define us</h2>
                    <p className="text-base text-greyc">You have come to the right place. Give us a try once and keep on choosing us time and again.</p>
                    <Button variant="solid" className="">Learn More</Button>
                </div>
                <div className="w-5/12">
                    <Image src="/images/features.png" alt="hash" className="w-full" width={500} height={100}/>
                </div>
            </div>
        </>
    )
};
export default BannerService;