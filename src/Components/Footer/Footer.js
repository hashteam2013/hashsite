import Image from "next/image";
import Link from "next/link";

const Footer = () =>{
    return(
        <>
            <div className="bg-gradient-to-b from-white to-footbg py-10 lg:px-16 px-2">
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                        <div className="footer-logo flex flex-col gap-4 pr-8">
                            <Image alt="image" src="/images/hashsoftware-1.svg" width={200} height={100}/> 
                            <p className="text-gray-500">Hash Softwares is the brainchild of Mr. Sourabh Sachdeva, the founder of the company. Our brand is the perfect amalgamation of ample experience with the same newness with which we started our company.</p>
                            <ul className="flex gap-3">
                                <li>
                                <Link href="/" target="_blank"> <Image src="/images/facebook.png" width={30} height={30} alt="insta" /> </Link>
                                </li>
                                <li>
                                    <Image src="/images/insta.png" width={30} height={30} alt="insta" />
                                </li>
                                <li>
                                    <Image src="/images/linkedin.png" width={30} height={30} alt="linkedin" />
                                </li>
                                <li>
                                    <Image src="/images/skype.png" width={30} height={30} alt="skype" />
                                </li>
                                <li>
                                    <Image src="/images/svgexport-1.svg" width={30} height={30} alt="insta" />
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="footer-list">
                            <h2 className="text-black text-xl font-bold mb-4">Quick Links</h2>
                            <ul className="text-gray-500 font-normal flex flex-col gap-3">
                                <li className="hover:text-black cursor-pointer">Home</li>
                                <li className="hover:text-black cursor-pointer">About</li>
                                <li className="hover:text-black cursor-pointer">Services</li>
                                <li className="hover:text-black cursor-pointer">Portfolio</li>
                                <li className="hover:text-black cursor-pointer">Blog</li>
                                <li className="hover:text-black cursor-pointer">Resources</li>
                            </ul>
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
                                <Image src="/images/Mask-group.png" className="pt-1" alt="" width={20} height={20} />
                                <p className="text-gray-500"> <Link href="/" className="hover:text-primary"> TDi, Taj Plaza, 505, Second Floor, Airport Road, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 160055</Link></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="/images/Group-1107.png" alt="" width={20} height={20} />
                                <p className="text-gray-500"> <Link href="tel:919056559922" className="hover:text-primary"> +91 90565 59922 </Link></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="/images/Group.png" alt="" width={20} height={20} />
                                <p className="text-gray-500"> <Link href="mailto:Info@hashsoftware.com" className="hover:text-primary"> Info@hashsoftware.com </Link></p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="bg-footbg flex justify-center text-gray-500 items-center py-4 border-t-2">
                <p className="text-sm ">© Copyright 2024 - Hash Software (Formerly as Hash Softwares)</p>
            </div>
        </>
    )
}
export default Footer;