import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Buttons";
import Link from "next/link";
import Icons from "../Icons/Icons";

const Header = () =>{
    return(
        <>
            <div className="bg-white py-3 shadow-md">
                <div className="container-full mx-auto px-2 lg:px-16 xl:px-18">
                    <div className="flex justify-between items-center gap-3">
                        <div className="w-1/3 lg:w-1/6">
                            <Link href="/">
                            <Image src="/images/hashsoftware-1.svg" alt="hash logo" className="" width={150} height={100} /></Link>
                        </div>
                        <div className="hidden md:block w-1/2 lg:w-2/4">
                            <Navigation/>
                        </div>
                        <div className="w-1/2 lg:w-2/6 text-right">
                            <div className="flex justify-end lg:justify-between items-center">
                                <div className="hidden md:flex flex gap-4 items-center">
                                    <Image src="/images/india.png" alt="country" className="max-w-[20px]" width={20} height={20}/>
                                    <span> <Link href="tel:919056559922" className="hover:text-primary"> +91 9056559922</Link></span>
                                </div>
                                <span className="items-center hidden lg:block">Contact</span>
                                <Button
                                className="bg-transparent border-2 px-6 py-4 rounded-full border-secondary text-secondary 
                                hover:bg-primary hover:text-white hover:border-primary" >
                                    Get Started
                                    </Button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Header;