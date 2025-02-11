import Image from "next/image";
import Navigation from "../Navigation/Navigation";
// import Button from "../Button/Buttons";
import Link from "next/link";
import Icons from "../Icons/Icons";
import Button from "../Button/Buttons";

const Header = () =>{
    return(
        <>
            <div className="bg-white py-3 shadow-md relative z-50">
                <div className="container-full mx-auto px-2 xl:px-16">
                    <div className="flex justify-between items-center gap-3">
                        <div className="w-1/2 md:w-1/4 lg:w-1/6">
                            <Link href="/">
                            <Image src="/images/hashsoftware-1.svg" alt="hash logo" className="" width={150} height={100} /></Link>
                        </div>
                        <div className="w-1/2 md:w-6/12 lg:w-2/5">
                            <Navigation/>
                        </div>
                        <div className="w-1/2 md:w-1/4 lg:w-2/5 justify-end hidden md:flex">
                            <div className="flex justify-end lg:justify-end lg:gap-x-4 xl:gap-x-8 items-center">
                                <div className="hidden lg:flex flex gap-4 items-center">
                                    <Image src="/images/india.png" alt="country" className="max-w-[20px]" width={20} height={20}/>
                                    <span> <Link href="tel:919056559922" className="hover:text-primary"> +91 9056559922</Link></span>
                                </div>
                                <Link href="/contact">    <span className="items-center hidden lg:block">Contact</span> </Link>
                                <div className="hidden md:flex flex-end">
                                    <Button variant="solid" >Get in Touch</Button>
                                </div>
                                    
                                {/* <Button
                                className="bg-transparent border-2 px-6 py-4 rounded-full border-secondary text-secondary 
                                hover:bg-primary hover:text-white hover:border-primary" >
                                    Get Started
                                    </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Header;