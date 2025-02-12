import Image from "next/image";
import Button from "@/Components/Button";
import Icons from "@/Libs/Icons/SvgIcon";
import Link from "next/link";

const Header = () =>{
    return(
        <header className="p-7 px-[100px] fixed top-0 left-0 w-full z-[999]">
            <div className="flex flex-wrap justify-between">
                <div className="w-1/2 lg:w-1/5">
                   <Link href="/" className="inline-block">
                        <Image src="/images/logo.svg" width={210} height={70} alt="Hash Software"/>
                    </Link>
                </div>
                <div className="flex-initial">
                    <div className="bg-white rounded-[15px] px-6 py-2.5">
                        <ul className="flex">
                            <li className="px-2.5">
                                <Link href="" className="inline-block p-2.5 text-xl font-medium">Home</Link>
                            </li>
                            <li class="flex items-center">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            </li>
                            <li className="px-2.5">
                                <Link href="" className="inline-block p-2.5 text-xl font-medium">About</Link>
                            </li>
                            <li class="flex items-center">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            </li>
                            <li className="px-2.5">
                                <Link href="" className="inline-block p-2.5 text-xl font-medium">Testimonials</Link>
                            </li>
                            <li class="flex items-center">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            </li>
                            <li className="px-2.5">
                                <Link href="" className="inline-block p-2.5 text-xl font-medium">Services</Link>
                            </li>
                            <li class="flex items-center">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            </li>
                            <li className="px-2.5">
                                <Link href="" className="inline-block p-2.5 text-xl font-medium">Case Study</Link>
                            </li>
                            <li class="flex items-center">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            </li>
                            <li className="px-2.5">
                                <Link href="" className="inline-block p-2.5 text-xl font-medium">Blog</Link>
                            </li>
                        </ul>        
                    </div> 
                </div>
                <div className="flex-initial">
                    <button class="flex p-2.5 border border-[#CECFD0] rounded-[15px] gap-5 items-center text-xl font-medium pr-4 bg-white">
                        <Icons name="right" className="bg-red-200" />
                        Get in Touch
                    </button>
                </div>
            </div>
        </header>
    )
};
export default Header;
