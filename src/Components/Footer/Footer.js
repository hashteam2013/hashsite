import Image from "next/image";
import Link from "next/link";
import ProjectMind from "../ProjectMind/ProjectMind";
import NavigationFooter from "../Navigation/NavigationFooter";
import NavigationSocial from "../Navigation/NavigationSocial";

const Footer = () =>{
    return(
        <>
            {/* <div className="flex justify-between px-24 py-12 bg-footer items-center bg-cover">
                <div className="">
                    <img src="/images/cta2-img1.png" className="w-full" alt="hash" width={100} height={100} />
                </div>
                <div className="text-center flex flex-col items-center gap-4">
                    <h2 className="text-primary text-5xl font-bold">Have Project in mind</h2>
                    <p className="text-lg font-semibold">Get started for 1 Month free trial No Purchace required </p>
                    <Link className="bg-primary text-white hover:bg-navydarkbg p-6 rounded-full text-lg transform animate-pulse hover:rotate-0 -rotate-45" href="#"> <Icons name="right" /> </Link>
                </div>
                <div className="">
                    <img src="/images/cta2-img2.png" className="w-full" alt="hash" width={100} height={100} />
                </div>
            </div> */}
           
            <div className="bg-gradient-to-b from-white to-footbg py-10 lg:px-24 px-8">
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                        <div className="footer-logo flex flex-col gap-4 pr-8">
                            <Image alt="image" src="/images/hashsoftware-1.svg" width={200} height={100} alt="test"/> 
                            <p className="text-gray-500">Hash Softwares is the brainchild of Mr. Sourabh Sachdeva, the founder of the company. Our brand is the perfect amalgamation of ample experience with the same newness with which we started our company.</p>
                            <NavigationSocial/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="footer-list">
                            <h2 className="text-black text-xl font-bold mb-4">Quick Links</h2>
                            <NavigationFooter/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="footer-list">
                            <h2 className="text-black text-xl font-bold mb-4">Services</h2>
                            <ul className="text-gray-500 font-normal flex flex-col gap-3">
                                <li className="hover:text-black cursor-pointer">Web Design & Development</li>
                                <li className="hover:text-black cursor-pointer">Frontend Development</li>
                                <li className="hover:text-black cursor-pointer">Automation Solutions</li>
                                <li className="hover:text-black cursor-pointer">Development with AI/AI Services</li>
                                <li className="hover:text-black cursor-pointer">API Integrations</li>
                                <li className="hover:text-black cursor-pointer">Admin & Customer Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h2 className="text-black text-xl font-bold mb-4">Get in touch</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-2">
                                <Image src="/images/Mask-group.png" className="pt-1" alt="hash" width={20} height={20} />
                                <p className="text-gray-500"> <Link href="/" className="hover:text-primary"> TDi, Taj Plaza, 505, Second Floor, Airport Road, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 160055</Link></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="/images/Group-1107.png" alt="hash" width={20} height={20}/>
                                <p className="text-gray-500"> <Link href="tel:919056559922" className="hover:text-primary"> +91 90565 59922 </Link></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="/images/Group.png" alt="hash" width={20} height={20} />
                                <p className="text-gray-500"> <Link href="mailto:Info@hashsoftware.com" className="hover:text-primary"> Info@hashsoftware.com </Link></p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="bg-footbg flex justify-center text-gray-500 items-center p-4 border-t-2">
                <p className="text-sm ">© Copyright 2024 - Hash Software (Formerly as Hash Softwares)</p>
            </div>
        </>
    )
}
export default Footer;