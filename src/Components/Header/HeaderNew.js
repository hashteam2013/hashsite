import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Buttons";
import Icons from "../Icons/Icons";
import Link from "next/link";

const HeaderNew = () =>{
    return(
        <>
            <div className="flex flex-wrap items-center md:justify-between justify-start gap-0 bg-transparent max-w-screen-1xl mx-auto relative z-50 top-6 lg:py-6 lg:px-4 p-4">
                <div className="w-1/2 lg:w-1/5">
                   <Link href="/"> <Image src="/images/logo.svg" className="pl-0 lg:pl-8" quality={100} width={200} height={200} /> </Link>
                </div>
                <div className="w-1/2 lg:w-3/5">
                    <Navigation/>
                </div>
                <div className="w-1/2 lg:w-1/5 hidden lg:block">
                    <div className="flex items-center gap-x-10 lg:justify-end justify-center">
                        <Button variant="solid"> <Icons name="right" className="bg-red-200" /> Get in Touch</Button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default HeaderNew;