"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HomepageBanner from "@/Components/Banners/HomepageBanner";
import BrandCarousel from "@/Components/Carousel/BrandCarousel";
import Icons from "@/Components/Icons/Icons";
import TestiCarousel from "@/Components/Carousel/TestiCarousel";
import Accordion from "@/Components/Accordion/Accordion";
import HeroBackground from "@Assets/background/hero-background.png"
import ButtonImage0 from "@Assets/images/animated-button/Buttons.png"
import ButtonImage1 from "@Assets/images/animated-button/Buttons-1.png"
import ButtonImage2 from "@Assets/images/animated-button/Buttons-2.png"
import ButtonImage3 from "@Assets/images/animated-button/Buttons-3.png"
import ButtonImage4 from "@Assets/images/animated-button/Buttons-4.png"
import ButtonImage5 from "@Assets/images/animated-button/Buttons-5.png"
import ButtonImage6 from "@Assets/images/animated-button/Buttons-6.png"
import ButtonImage7 from "@Assets/images/animated-button/Buttons-7.png"
import ButtonImage8 from "@Assets/images/animated-button/Buttons-8.png"
import ButtonImage9 from "@Assets/images/animated-button/Buttons-9.png"
import ButtonImage10 from "@Assets/images/animated-button/Buttons-10.png"
import ButtonImage11 from "@Assets/images/animated-button/Buttons-11.png"
import ButtonImage12 from "@Assets/images/animated-button/Buttons-12.png"
import ButtonImage13 from "@Assets/images/animated-button/Buttons-13.png"
import ButtonImage14 from "@Assets/images/animated-button/Buttons-14.png"
import ButtonImage15 from "@Assets/images/animated-button/Buttons-15.png"
import ButtonImage16 from "@Assets/images/animated-button/Buttons-16.png"
import ButtonImage17 from "@Assets/images/animated-button/Buttons-17.png"
import ButtonImage18 from "@Assets/images/animated-button/Buttons-18.png"
import ButtonImage19 from "@Assets/images/animated-button/Buttons-19.png"
import ButtonImage20 from "@Assets/images/animated-button/Buttons-20.png"

export default function Homepage() {
    // console.log("ButtonImage",ButtonImage);
    useEffect(() => {
            const canvas = document.getElementById("myCanvas");
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            
            if (!ctx) {
              console.error("Canvas context not found");
              return;
            }
            // console.log("ButtonImage",ButtonImage);
            const img = new window.Image();
            const img1 = new window.Image();
            const img2 = new window.Image();
            const img3 = new window.Image();
            const img4 = new window.Image();
            const img5 = new window.Image();
            const img6 = new window.Image();
            const img7 = new window.Image();
            const img8 = new window.Image();
            const img9 = new window.Image();
            const img11 = new window.Image();
            const img10 = new window.Image();
            const img12 = new window.Image();
            const img13 = new window.Image();
            const img14 = new window.Image();
            const img15 = new window.Image();
            const img16 = new window.Image();
            const img17 = new window.Image();
            const img18 = new window.Image();
            const img19 = new window.Image();
            const img20 = new window.Image();
            img.src = ButtonImage0.src;
            img1.src = ButtonImage1.src;
            img2.src = ButtonImage2.src;
            img3.src = ButtonImage3.src;
            img4.src = ButtonImage4.src;
            img5.src = ButtonImage5.src;
            img6.src = ButtonImage6.src;
            img7.src = ButtonImage7.src;
            img8.src = ButtonImage8.src;
            img9.src = ButtonImage9.src;
            img10.src = ButtonImage10.src;
            img11.src = ButtonImage11.src;
            img12.src = ButtonImage12.src;
            img13.src = ButtonImage13.src;
            img14.src = ButtonImage14.src;
            img15.src = ButtonImage15.src;
            img16.src = ButtonImage16.src;
            img17.src = ButtonImage17.src;
            img18.src = ButtonImage18.src;
            img19.src = ButtonImage19.src;
            img20.src = ButtonImage20.src;
            
            img.onload = () => {
              let x = 0;
              const speed = 0; // Speed of movement
              const interval = setInterval(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 1320, 180, ButtonImage0.width / 2, ButtonImage0.height / 2);
                ctx.drawImage(img1, 151, 97, ButtonImage1.width / 2, ButtonImage1.height / 2);
                ctx.drawImage(img2, 1040, 46, ButtonImage2.width / 2, ButtonImage2.height / 2);
                ctx.drawImage(img3, 1464, 73, ButtonImage3.width / 2, ButtonImage3.height / 2);
                ctx.drawImage(img4, 684, 49, ButtonImage4.width / 2, ButtonImage4.height / 2);
                ctx.drawImage(img5, 167, 346, ButtonImage5.width / 2, ButtonImage5.height / 2);
                ctx.drawImage(img6, 450, 316, ButtonImage6.width / 2, ButtonImage6.height / 2);
                ctx.drawImage(img7, 777, 252, ButtonImage7.width / 2, ButtonImage7.height / 2);
                ctx.drawImage(img8, 1085, 253, ButtonImage8.width / 2, ButtonImage8.height / 2);
                ctx.drawImage(img9, 1556, 305, ButtonImage9.width / 2, ButtonImage9.height / 2);
                

                x += speed;
                if (x > canvas.width) {
                  x = -img.width; // Reset when out of bounds
                }
              }, 1000 / 40); // 40 FPS

            };
            return () => clearInterval(interval); // Cleanup on unmount

    }, []); // Empty dependency array to run only once
    return (
        <>
            <HomepageBanner backgroundImage={HeroBackground} heading="Creative & Digital Agency"/>
            <BrandCarousel/>
            <div className="bg-linear from-cyan-500 to-blue-500 bg-black" >
                <canvas width="1920px" height="1080px" id="myCanvas" />  
            </div>


            <div className="bg-linear-to-r from-cyan-500 to-blue-500">
                <div className="max-w-screen-1xl mx-auto">
                    <div className="flex relative flex-col justify-center items-center">
                        <div className="w-1/2 relative">
                            <Image src="/images/languages3.png" className="w-full animate-spin3 relative z-20" width={800} height={500} alt="hash"/>
                            <Image src="/images/languages22.png" className="w-full absolute top-0 z-0" width={800} height={500} alt="hash"/>
                        </div>
                        <div className="flex absolute z-50">
                            <h2 className="text-7xxl text-white text-center font-bold">23+ YEARS  OF <br/> EXPERIENCE</h2>
                            <div className="">
                                <Image src="/images/lang14.png" className="w-auto absolute -bottom-24 -right-10" width={200} height={100} alt="hash" quality={100} />
                                <Image src="/images/lang15.png" className="w-auto absolute -bottom-24 -left-10" width={200} height={100} alt="hash" quality={100} />
                                <Image src="/images/lang19.png" className="w-auto absolute -top-24 -left-10" width={200} height={100} alt="hash" quality={100} />
                                <Image src="/images/lang16.png" className="w-auto absolute -top-24 -right-10" width={200} height={100} alt="hash" quality={100} />
                                <Image src="/images/lang17.png" className="w-auto absolute top-24 -left-32" width={200} height={100} alt="hash" quality={100} />
                                <Image src="/images/lang18.png" className="w-auto absolute top-24 -right-32" width={200} height={100} alt="hash" quality={100} />
                                <Image src="/images/lang20.png" className="w-auto absolute -bottom-60 right-40" width={200} height={100} alt="hash" quality={100} />
                                <Image src="/images/lang19.png" className="w-auto absolute -top-60 left-40" width={200} height={100} alt="hash" quality={100} />
                            </div>
                        </div>
                        <Image src="/images/lang7.png" className="w-auto absolute -top-6 left-96" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang.png" className="w-auto absolute top-20 left-32" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang2.png" className="w-auto absolute top-72 left-6" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang23.png" className="w-auto absolute bottom-72 left-6" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang24.png" className="w-auto absolute bottom-20 left-32" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang25.png" className="w-auto absolute -bottom-6 left-96" width={200} height={100} alt="hash" quality={100} />

                        <Image src="/images/lang8.png" className="w-auto absolute -top-6 right-96" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang9.png" className="w-auto absolute top-20 right-32" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang10.png" className="w-auto absolute top-72 right-6" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang111.png" className="w-auto absolute bottom-72 right-6" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang12.png" className="w-auto absolute bottom-20 right-32" width={200} height={100} alt="hash" quality={100} />
                        <Image src="/images/lang13.png" className="w-auto absolute -bottom-6 right-96" width={200} height={100} alt="hash" quality={100} />
                    </div>
                </div>  
            </div>

            <div className="bg-white py-32 relative">
                <Image src="/images/business-media5.png" className="w-auto absolute top-10 left-0" width={100} height={100} alt="test"/>
                <Image src="/images/business-media6.png" className="w-auto absolute bottom-16 right-0" width={100} height={100}  alt="test"/>
                <div className="flex flex-col max-w-screen-1xl px-16 mx-auto">
                    <div className="flex gap-8 justify-center items-center">
                        <h3 className="py-2 px-6 border border-gray-200 rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Our Service Expertise</h3>
                        <h2 className="text-6xl font-semibold">We help you to build a <br/> digital business</h2>
                    </div>
                    <div className="flex flex-col mt-24 mx-auto">
                        <div className="flex w-full mx-auto">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>

            {/* <Accordion/> */}

            <div className="flex flex-col gap-4 bg-footerb rounded-xl pt-20 pb-10 mb-24 max-w-screen-1xl mx-auto">
                <div className="flex gap-8 justify-center items-center text-white">
                    <h3 className="py-2 px-6 border border-gray-200 rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Why choose us</h3>
                    <h2 className="text-6xl font-semibold">Results that we <br/>  sucessfully deliver</h2>
                </div>
                <div className="flex px-10 mt-8">
                    <div className="w-9/12">
                        <div className="h-full grid grid-rows-2 grid-flow-col gap-4 pr-6">
                            <div className="max-h-96">
                                <Image src="/images/result-media3.png" className="w-full h-full object-cover rounded-xl" width={400} height={100} alt="hash" />
                            </div>
                            <div className="flex items-stretch max-h-96 w-full">
                                <div className="flex flex-col justify-between p-8 bg-white rounded-xl items-stretch w-full">
                                    <div className="flex text-black items-center gap-2">
                                        <div className="bg-primary rounded-full w-2 h-2"></div>
                                        <span className="font-semibold capitalize">satisfied customers</span>
                                    </div>
                                    <div className="flex text-black flex-col gap-2">
                                        <span className="text-7xl">95%</span>
                                        <p>A 95% satisfaction rate across all our consulting services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-stretch max-h-96 w-full">
                                <div className="flex flex-col justify-between p-8 bg-white rounded-xl items-stretch w-full">
                                    <div className="flex text-black items-center gap-2">
                                        <div className="bg-primary rounded-full w-2 h-2"></div>
                                        <span className="font-semibold capitalize">satisfied customers</span>
                                    </div>
                                    <div className="flex text-black flex-col gap-2">
                                        <span className="text-7xl">250+</span>
                                        <p>Over 200 successful projects delivered to our clients worldwide.</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-stretch max-h-96">
                                <div className="flex flex-col justify-between p-8 bg-white rounded-xl items-stretch w-full">
                                    <div className="flex text-black items-center gap-2">
                                        <div className="bg-primary rounded-full w-2 h-2"></div>
                                        <span className="font-semibold capitalize">satisfied customers</span>
                                    </div>
                                    <div className="flex text-black flex-col gap-2">
                                        <span className="text-7xl">600+</span>
                                        <p>We work round the clock and have collaborated over 600 clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>
                    <div className="w-3/12 flex items-stretch">
                        <div className="relative h-full">
                            <Image src="/images/result-media.png" className="h-full w-full" width={400} height={500} quality={100} alt="hash" />
                            <Image src="/images/result-media2.png" className="w-auto absolute top-4 right-10 animate-spin2" width={100} height={500} quality={100} alt="hash" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-purplel py-20 relative">
                <Image src="/images/business-media5.png" className="w-auto absolute top-16 right-0 transform -rotate-180" width={100} height={100} alt="test"/>
                <div className="flex flex-col max-w-screen-1xl mx-auto gap-6">
                    <div className="flex gap-8 justify-center items-center text-black">
                        <h3 className="py-2 px-6 border border-black rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Why choose us</h3>
                        <h2 className="text-6xl font-semibold">Awesome Responsive
                        <br/>  in All Device</h2>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="lg:w-3/4 w-full">
                            <div className="p-4">
                                <Image src="/images/response.png" className="w-full" width={1000} height={100} quality={100} alt="test"/>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full">
                            <div className="flex flex-wrap">
                                <div className="sm:w-1/2 w-full">
                                    <div className="flex flex-col gap-4 py-4 px-8">
                                        <Image src="/images/response2.png" width={80} height={80} className="w-auto" alt="test"/>
                                        <div className="flex text-center flex-col gap-2 items-center">
                                            <h4 className="font-semibold">1920 x 1080px</h4>
                                            <p className="text-base">Full Screen <br/>
                                            Layout</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-1/2 w-full">
                                    <div className="flex flex-col gap-4 py-4 px-8">
                                        <Image src="/images/response3.png" width={100} height={100} className="w-auto" alt="test"/>
                                        <div className="flex text-center flex-col gap-2 items-center">
                                            <h4 className="font-semibold">1364 x 768px</h4>
                                            <p className="text-base">Notebook Screen
                                            <br/>
                                            Layout</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-1/2 w-full">
                                    <div className="flex flex-col gap-4 py-4 px-8">
                                        <Image src="/images/response4.png" width={100} height={100} className="w-auto" alt="test"/>
                                        <div className="flex text-center flex-col gap-2 items-center">
                                            <h4 className="font-semibold">1024 x 768px</h4>
                                            <p className="text-base">Tablet Screen
                                            <br/>
                                            Layout</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-1/2 w-full">
                                    <div className="flex flex-col gap-4 py-4 px-8">
                                        <Image src="/images/response5.png" width={100} height={100} className="w-auto" alt="test"/>
                                        <div className="flex text-center flex-col gap-2 items-center">
                                            <h4 className="font-semibold">375 x 667px</h4>
                                            <p className="text-base">Mobile Screen <br/>
                                            Layout</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <Image src="/images/client-before.png" className="w-auto absolute bottom-10 right-0" width={200} height={100} alt="test"/>
                <div className="py-20 relative max-w-screen-1xl mx-auto">
                
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-8 justify-center items-center text-black">
                            <h3 className="py-2 px-6 border border-gray-200 rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Our Approaches</h3>
                            <h2 className="text-6xl font-semibold">Different Approaches 
                            <br/>  We Offer to Our Clients</h2>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-1/3">
                                <div className="flex text-white relative p-6 ">
                                    <div className="relative w-full rounded-xl">
                                        <div className="before:content-[*] before w-full h-full bg-clientapp cursor-pointer hover:bg-clientapp2 bottom-0 absolute rounded-xl hover:bg-primary hover:opacity-30"></div>
                                        <Image src="/images/client4.png" className="w-full rounded-xl" width={400} height={100} quality={100} alt="test"/>
                                    </div>
                                    <div className="absolute bottom-8 py-6 px-4">
                                        <h3 className="text-3xl font-semibold">Project based hiring</h3>
                                    </div>
                                    <div className="bg-white rounded-lg p-2">
                                        <div className="flex bg-primary text-white p-2 items-center h-16 absolute bottom-4 right-4 rounded-lg">
                                           <Link href="#"> <Icons name="right"/>  </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="flex text-white relative p-6">
                                    <div className="relative w-full">
                                        <div className="before:content-[*] before w-full h-full bg-clientapp cursor-pointer hover:bg-clientapp2 bottom-0 absolute rounded-xl hover:bg-primary hover:opacity-30"></div>
                                        <Image src="/images/client5.png" className="w-full rounded-xl" width={400} height={100} quality={100} alt="test"/>
                                    </div>
                                    <div className="absolute bottom-8 py-6 px-4">
                                        <h3 className="text-3xl font-semibold">Hire a full team for project 
                                        </h3>
                                    </div>
                                    <div className="bg-white rounded-lg p-2">
                                        <div className="flex bg-primary text-white p-2 items-center h-16 absolute bottom-4 right-4 rounded-lg">
                                        <Link href="#"> <Icons name="right"/>  </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="flex text-white relative p-6">
                                    <div className="relative w-full ">
                                        <div className="before:content-[*] before w-full h-full bg-clientapp cursor-pointer hover:bg-clientapp2 bottom-0 absolute rounded-xl hover:bg-primary hover:opacity-30"></div>
                                        <Image src="/images/client6.png" className="w-full rounded-xl" width={400} height={100} quality={100} alt="test"/>
                                    </div>
                                    <div className="absolute bottom-8 py-6 px-4">
                                        <h3 className="text-3xl font-semibold">Hire resources </h3>
                                    </div>
                                    <div className="bg-white rounded-lg p-2">
                                        <div className="flex bg-primary text-white p-2 items-center h-16 absolute bottom-4 right-4 rounded-lg">
                                        <Link href="#"> <Icons name="right"/>  </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>

            <div className="py-20 bg-greenl">
                <div className="flex flex-col ">
                    <div className="flex gap-8 max-w-screen-1xl mx-auto justify-center items-center text-black">
                        <h3 className="py-2 px-6 border border-gray-200 rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Testimonials</h3>
                        <h2 className="text-6xl font-semibold">Building Trust Through 
                        <br/>  Words</h2>
                    </div>
                    <div className="overflow-x-hidden">
                        <div className="lg:pl-24 md:pl-16 px-6 mt-16 md:-mr-16 mr-0 lg:-mr-24 cursor-move">
                            <TestiCarousel/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-purpleoff relative py-28">
                <div className="max-w-screen-1xl mx-auto">
                    <div className="flex justify-center items-center relative px-32 z-0">
                        <div className="flex w-40 h-40 justify-center items-center absolute z-20 text-white bg-blackl border border-white rounded-full">
                            <Icons name="play2" /> 
                        </div>
                        
                            <Image src="/images/clients.png" className="w-full" width={1000} height={500} quality={100} alt="test"/>
                            <div className="flex flex-col absolute -top-10 left-40 h-72 w-72 justify-between text-white bg-darkn p-6 rounded-3xl">
                                <div className="flex">
                                    <Image src="/images/testi-thumb.png" className="w-auto relative z-20" width={50} height={50} alt="test"/>
                                    <div className="flex bg-primary rounded-full transform -rotate-45 w-16 relative z-0 -ml-4 h-16 justify-center items-center text-white">
                                        <Icons name="right"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-4xl">7K+ Clients</h3>
                                    <p>Approaches are prominently featured on many architect websites.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <Image src="/images/shapes.png" className="w-auto absolute top-10 left-0" width={100} height={100} alt="test"/>
                <Image src="/images/clients2.png" className="w-auto absolute bottom-10 right-0" width={100} height={100} alt="test"/>
            </div>
        </>
    );
}
