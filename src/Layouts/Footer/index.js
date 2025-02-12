import Image from "next/image";
import NavigationFooter from "@Compoenents/Navigation/NavigationFooter";
import NavigationService from "@Compoenents/Navigation/NavigationService";
import NavigationSupport from "@Compoenents/Navigation/NavigationSupport";
import Link from "next/link";
import { Navigation } from "swiper/modules";

const Footer = () =>{
    return(
        <>
            <div className="bg-footerb bg-cover bg-no-repeat bg-top pt-20">
                <div className="flex flex-col items-center justify-center gap-6 max-w-screen-1xl mx-auto">
                    <div className="flex w-full flex-col justify-center">
                        <h2 className="text-white text-8xl font-semibold text-center">LET’S MAKE <br/> SOMETHING GREAT</h2>
                        <div className="flex justify-center gap-x-8 items-center mt-6">
                            <div className="flex items-center border rounded-full border-gray-300 py-2 px-4 gap-2 text-white hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                                <Image src="/images/fb2.png" className="w-auto" width={20} height={20} alt="hash" quality={100} />
                                <span>Facebook</span>
                            </div>
                            <div className="flex items-center border rounded-full border-gray-300 py-2 px-4 gap-2 text-white hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                                <Image src="/images/insta2.png" className="w-auto" width={20} height={20} alt="hash" quality={100} />
                                <span>Instagram</span>
                            </div>
                            <div className="flex items-center border rounded-full border-gray-300 py-2 px-4 gap-2 text-white hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                                <Image src="/images/linkedin2.png" className="w-auto" width={20} height={20} alt="hash" quality={100} />
                                <span>Linkedin</span>
                            </div>
                            <div className="flex items-center border rounded-full border-gray-300 py-2 px-4 gap-2 text-white hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                                <Image src="/images/skype2.png" className="w-auto" width={20} height={10} alt="hash" quality={100} />
                                <span>Skype</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full mt-20">
                            <div className="flex w-full md:w-1/2 lg:w-1/5 gap-4 flex-col px-4">
                                <Image src="/images/logo.png" className="w-3/5" width={100} height={100} quality={100} alt="hash" />
                            </div>
                            <div className="flex w-full md:w-1/2 lg:w-1/5 gap-4 flex-col px-4">
                                <h3 className="text-2xl font-semibold text-white">Company</h3>
                                <NavigationFooter/>
                            </div>
                            <div className="flex w-full md:w-1/2 lg:w-1/5 gap-4 flex-col px-4">
                                <h3 className="text-2xl font-semibold text-white">Services</h3>
                                <NavigationService/>
                            </div>
                            <div className="flex w-full md:w-1/2 lg:w-1/5 gap-4 flex-col px-4">
                                <h3 className="text-2xl font-semibold text-white">Support</h3>
                                <NavigationSupport/>
                            </div>
                            <div className="flex w-full md:w-1/2 lg:w-1/5 gap-4 flex-col px-4">
                                <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>
                                <ul>
                                    <li className="mb-4"> <Link href="#" className="text-white hover:text-primary "> TDi, Taj Plaza, 505, Second Floor, Airport Road, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 160055 </Link> </li>
                                    <li className="mb-4"> <Link href="tel:919056559922" className="text-white hover:text-primary mb-4"> +91 90565 59922 </Link> </li>
                                    <li className="mb-4"> <Link href="mailto:Info@hashsoftware.com" className="text-white hover:text-primary"> Info@hashsoftware.com </Link> </li>
                                </ul>
                            </div>
                            <div className="h-px opacity-30 bg-white w-full mt-12"></div>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap justify-between py-6">
                           <p className="text-white font-normal text-base">© 2024 <strong> Hash Software.</strong> All Right Reserved</p>
                           <ul className="flex text-white justify-end gap-12 items-center">
                            <li> <Link href="/home" className="hover:text-primary"> Home </Link></li>
                            <li><Link href="/about" className="hover:text-primary"> About </Link></li>
                            <li><Link href="/testimonials" className="hover:text-primary"> Testimonials </Link></li>
                            <li><Link href="/services" className="hover:text-primary"> Services </Link></li>
                            <li><Link href="/case-study" className="hover:text-primary"> Case Study </Link></li>
                            <li><Link href="/blog" className="hover:text-primary"> Blog </Link></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
};
export default Footer;