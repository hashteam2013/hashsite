import BannerService from "@/Components/Banners/BannerService";
import Button from "@/Components/Button/Buttons";
import Counter from "@/Components/Counter/Counter";
import Icons from "@/Components/Icons/Icons";
import ProjectMindAbout from "@/Components/ProjectMind/ProjectMindAbout";
import Image from "next/image";

const services = () =>{
    return(
        <>
                <BannerService/>

                <div className="px-24 py-24 bg-about2 bg-cover bg-center mx-auto relative">
                    <Image src="/images/Shap.png" alt="hash" className="w-auto absolute animate-spin top-10 left-1/2" width={50} height={50} />
                    <Image src="/images/jhbj.png" className="w-auto absolute top-32 left-0 z-0 overflow-hidden" alt="hash" width={200} height={400} />
                    <div className="flex justify-between items-center  py-6 relative z-20">
                        <div className="flex flex-col gap-4">
                        <h3 className="text-black text-4xl w-3/5 font-semibold capitalize">Our services solve any business problem</h3>
                        <p className="text-base text-greyc w-3/5">We are a professional mobile and website development firm dedicated to trustworthy results.</p>
                        </div>
                        
                        <p className="text-base text-greyc w-2/5">Hash Software is not just another web development company. We are a step ahead of your expectations. Our company comes at the top when it comes to exceptional development services and client satisfaction. Over the years, we have delivered the finest quality services in Graphic Design, Web App & Mobile-app development.

                        We are a young team of highly-experienced professionals that work tirelessly to help your company witness exhilarating outcomes.The quality is at the core of each & every single service that we offer. Climbing to the top rung wasn’t easy but our commitment towards our clients helped us to come this far.

                        We believe in the uniqueness of businesses and individuals. Therefore, we handle every project like the very first, keeping in mind all the requirements. This theory helped us in yielding new ideas and making changes until the client is satisfied. </p>
                    </div>
                    <div className="flex items-center flex-wrap md:flex-nowrap justify-center gap-16 mt-8 my-6 relative z-20">
                        <div className="flex flex-col gap-2 w-1/3 -mt-16 p-8  ">
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-2 bg-white shadow-innerpage rounded-2xl mt-32 p-8 border-primary border-b-4 transform hover:-translate-y-2 transition cursor-pointer">
                                    <Image src="/images/front-end2.png" className="" width={100} height={100} alt="hash"/>
                                    <h4 className="text-black text-lg font-semibold ">Graphic Design</h4>
                                    <p className="text-greyc">We make designs that capture everyone’s attention. With creativity as the main ingredient, our designs will captivate the audience and improve your brand identity..
                                    </p>
                                </div>
                                
                                <div className="flex flex-col gap-2 bg-white shadow-innerpage rounded-2xl mt-52 p-8 border-primary border-b-4 transform hover:translate-y-2 transition cursor-pointer">
                                    <Image src="/images/backend.png" className="" width={100} height={100} alt="hash"/>
                                    <h4 className="text-black text-lg font-semibold ">SEO/Digital Marketing</h4>
                                    <p className="text-greyc">Our team has helped hundreds of brands in establishing themselves online. From creating engaging content and online ads to social media strategy, we know the A to Z of digital marketing.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="flex flex-col gap-2 bg-white shadow-innerpage rounded-2xl mt-32 p-8 border-primary border-b-4 transform hover:-translate-y-2 transition cursor-pointer">
                                <Image src="/images/backend.png" className="" width={100} height={100} alt="hash"/>
                                <h4 className="text-black text-lg font-semibold ">Back-End Development</h4>
                                <p className="text-greyc">Backend development is the backbone of your website. Our team knows how to give a promising structure to your website that even your critics will appreciate
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 bg-white shadow-innerpage rounded-2xl mt-32 p-8 border-primary border-b-4 transform hover:translate-y-2 transition cursor-pointer">
                                <Image src="/images/mobile-app.png" className="" width={100} height={100} alt="hash"/>
                                <h4 className="text-black text-lg font-semibold ">Mobile App Development</h4>
                                <p className="text-greyc">Smartphone users have gradually increased in number. We specialize in making mobile apps that establish a trustworthy connection with the customers and help them access your services faster..
                                </p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-2 w-1/3 bg-white shadow-innerpage rounded-2xl mt-16 p-8 border-primary border-b-4 transform hover:translate-x-2 transition cursor-pointer">
                            <Image src="/images/Shap.png" alt="hash" className="w-auto absolute animate-spin -top-24 right-0" width={50} height={50} />
                            <Image src="/images/front-end.png" className="" width={100} height={100} alt="hash"/>
                            
                            <h4 className="text-black text-lg font-semibold ">Front-end Development</h4>
                            <p className="text-greyc">Frontend development plays a pivotal role in a website’s performance. To make sure your website is user friendly; our team uses advanced tools that reflect the true essence of your brand to your visitors.
                            </p>
                        </div>
                    </div>

                    
                </div>

                <div className="flex w-full px-24 mt-24 relative items-center z-20">
                    <div className="w-1/2">
                        <Image src="/images/hjbfj.png" quality={100} className="w-3/4" width={800} height={400} alt="hash" />

                    </div>
                    <div className="w-1/2 px-4">
                        <div className="flex items-start flex-col gap-10">
                            <h2 className="text-5xl capitalize font-semibold">Why should you choose our services?</h2>
                            <p className="text-base text-greyc">
                            With the help of extraordinarily talented staff and a technical approach, we have delivered top-notch services to our clients across the seas. From website design to digital marketing, we have everything you want in the best possible quality. Our services have made a positive impact on businesses and changed the lives of so many people in every domain around the world.
                            </p>
                            <Button variant="solid">Contact</Button>
                        </div>
                    </div>
                </div>

                <div className="flex bg-servebg px-24 py-32 bg-contain bg-top">
                    <div className="flex flex-wrap">
                        <div className="w-1/3">
                            <Image src="/images/about-img1.jpg" alt="hash" className="w-auto rounded-2xl" width={500} height={500} />
                        </div>
                        <div className="w-2/3">
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between gap-2">
                                        <div className="flex flex-col w-3/5  gap-4">
                                            <h3 className="text-4xl capitalize font-semibold">Bring new digital ideas to life</h3>
                                            <h4 className="text-2xl text-black">We are a global technology provider who assists businesses to accelerate their digital transformation journey while achieving efficiency, scalability, and lower cost of ownership.</h4>
                                            <p className="text-base text-greyc">Whatever your ambition may be from embracing new digital capabilities to reimagining how your business operates, we can help you set a new standard of excellence and achieve unprecedented levels of value. Our team can assist you in transforming your business through latest tech capabilities to stay ahead of the curve.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end w-2/5 gap-2">
                                            <div className="bg-primary w-4/5 h-96 flex justify-end rounded-2xl relative">
                                                <Image src="/images/about-img2.png" className="w-auto absolute bottom-16 right-10" alt="hash" width={400} height={100} />
                                                <div className="absolute bg-white bottom-0 right-0 w-40 h-12 rounded-tl-xl"></div>
                                                <div className="absolute content-[*] w-6 h-6 bottom-0 right-40 bg-white">
                                                    <div className="absolute content content-[*] w-6 h-6 bottom-0 right-0 bg-primary rounded-br-xl"></div>
                                                </div>
                                                <div className="absolute content-[*] w-6 h-6 bottom-12 right-0 bg-white">
                                                    <div className="absolute content content-[*] w-6 h-6 bottom-0 right-0 bg-primary rounded-br-xl"></div>
                                                </div>
                                                <div className="bg-primary absolute -bottom-2 -right-2 h-12 w-40 rounded-lg text-white flex items-center gap-2 justify-center hover:text-primary border-2 border-primary hover:bg-white cursor-pointer">
                                                    <h3 className="font-semibold">Get Info</h3>
                                                    <Icons name="right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="flex flex-wrap justify-between gap-2 mt-20">
                                    <div className="flex px-4">
                                        <div className="flex flex-col justify-between h-48 items-center">
                                            <h4 className="text-xl capitalize">years experience <br/>
                                            working</h4>
                                            <h2 className="text-6xl font-bold flex">{<Counter stopAt={10} />}+</h2>
                                        </div>
                                    </div>
                                    <div className="flex  px-4">
                                        <div className="flex flex-col justify-between h-48 items-center">
                                            <h4 className="text-xl capitalize">qualified staff
                                            </h4>
                                            <h2 className="text-6xl font-bold flex">{<Counter stopAt={20} />}+</h2>
                                        </div>
                                    </div>
                                    <div className="flex  px-4 ">
                                        <div className="flex flex-col justify-between h-48 items-center">
                                        <h4 className="text-xl capitalize">awards won</h4>
                                        <h2 className="text-6xl font-bold flex">{<Counter stopAt={5} />}+</h2>
                                        </div>
                                    </div>
                                    <div className="flex  px-4 ">
                                        <div className="flex flex-col justify-between h-48 items-center">
                                        <h4 className="text-xl capitalize">projects
                                            completed</h4>
                                            <h2 className="text-6xl font-bold flex">{<Counter stopAt={1000} />}+</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full px-24 mt-24 relative items-center z-20">
                    <div className="w-1/2 px-4">
                        <div className="flex items-start flex-col gap-10">
                            <h2 className="text-5xl capitalize font-semibold">How are we better than the rest?</h2>
                            <p className="text-base text-greyc">
                            We would be lying if we didn’t mention the overwhelming praise we receive from our clients from time to time. It isn’t an easy job. But we are always ready to help our clients, thanks to the hardworking team acting as the backbone of Hash Software. Without the incessant efforts of the team to bring excellence to life, it wouldn’t have been possible.
                            </p>
                            <Button variant="solid">Contact</Button>
                        </div>
                        
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <Image src="/images/ruehvr.png" quality={100} className="w-3/4" width={800} height={400} alt="hash" />
                    </div>
                </div>

            <ProjectMindAbout/>
        </>
    )
};

export default services;