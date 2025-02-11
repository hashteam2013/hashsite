import Image from "next/image";
import Banners from "@/Components/Banners/Banners";
import BrandCarousel from "@/Components/Carousel/BrandCarousel";
import Link from "next/link";
import Button from "@/Components/Button/Buttons";

const home = () =>{
    return(
        <>

        {/* <Banners/>

        <BrandCarousel/>

        <div className="py-20 bg-rollang">
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
            <Image src="/images/business-media5.png" className="w-auto absolute top-10 left-0" width={100} height={100} />
            <Image src="/images/business-media6.png" className="w-auto absolute bottom-16 right-0" width={100} height={100} />
            <div className="flex flex-col max-w-screen-1xl px-16 mx-auto">
                <div className="flex gap-8 justify-center items-center">
                    <h3 className="py-2 px-6 border border-gray-200 rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Our Service Expertise</h3>
                    <h2 className="text-6xl font-semibold">We help you to build a <br/> digital business</h2>
                </div>
                <div className="flex flex-col mt-24">
                    <div className="flex justify-between gap-4 items-center border border-gray-200 border-l-0 border-r-0 py-8">
                        <h5 className="text-base w-72">01</h5>
                        <h2 className="text-9xl font-bold flex-grow text-greyc">Design</h2>
                        <div className="w-52 flex justify-end">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 11.25C26.3261 11.25 27.5978 10.7232 28.5355 9.78553C29.4732 8.84785 30 7.57608 30 6.25V5C30 3.67392 29.4732 2.40215 28.5355 1.46447C27.5978 0.526784 26.3261 0 25 0H23.75C22.4239 0 21.1521 0.526784 20.2145 1.46447C19.2768 2.40215 18.75 3.67392 18.75 5V8.75H11.25V5C11.25 3.67392 10.7232 2.40215 9.78553 1.46447C8.84785 0.526784 7.57608 0 6.25 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V6.25C0 7.57608 0.526784 8.84785 1.46447 9.78553C2.40215 10.7232 3.67392 11.25 5 11.25H8.75V18.75H5C3.67392 18.75 2.40215 19.2768 1.46447 20.2145C0.526784 21.1521 0 22.4239 0 23.75V25C0 26.3261 0.526784 27.5979 1.46447 28.5355C2.40215 29.4732 3.67392 30 5 30H6.25C7.57608 30 8.84785 29.4732 9.78553 28.5355C10.7232 27.5979 11.25 26.3261 11.25 25V21.25H18.75V25C18.75 26.3261 19.2768 27.5979 20.2145 28.5355C21.1521 29.4732 22.4239 30 23.75 30H25C26.3261 30 27.5978 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25V23.75C30 22.4239 29.4732 21.1521 28.5355 20.2145C27.5978 19.2768 26.3261 18.75 25 18.75H21.25V11.25H25ZM21.25 5C21.25 4.33696 21.5134 3.70107 21.9822 3.23223C22.4511 2.76339 23.087 2.5 23.75 2.5H25C25.663 2.5 26.2989 2.76339 26.7678 3.23223C27.2366 3.70107 27.5 4.33696 27.5 5V6.25C27.5 6.91304 27.2366 7.54893 26.7678 8.01777C26.2989 8.48661 25.663 8.75 25 8.75H21.25V5ZM5 8.75C4.33696 8.75 3.70107 8.48661 3.23223 8.01777C2.76339 7.54893 2.5 6.91304 2.5 6.25V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H6.25C6.91304 2.5 7.54892 2.76339 8.01777 3.23223C8.48661 3.70107 8.75 4.33696 8.75 5V8.75H5ZM8.75 25C8.75 25.663 8.48661 26.2989 8.01777 26.7678C7.54892 27.2366 6.91304 27.5 6.25 27.5H5C4.33696 27.5 3.70107 27.2366 3.23223 26.7678C2.76339 26.2989 2.5 25.663 2.5 25V23.75C2.5 23.087 2.76339 22.4511 3.23223 21.9822C3.70107 21.5134 4.33696 21.25 5 21.25H8.75V25ZM18.75 18.75H11.25V11.25H18.75V18.75ZM21.25 21.25H25C25.663 21.25 26.2989 21.5134 26.7678 21.9822C27.2366 22.4511 27.5 23.087 27.5 23.75V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5H23.75C23.087 27.5 22.4511 27.2366 21.9822 26.7678C21.5134 26.2989 21.25 25.663 21.25 25V21.25Z" fill="#808080"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center border-b border-gray-200 py-8">
                        <h5 className="text-base w-72">02</h5>
                        <h2 className="text-9xl font-bold flex-grow text-greyc">Development</h2>
                        <div className="w-52 flex justify-end">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 13.3334L5 19.4872L11.6667 26.6667M28.3333 13.3334L35 19.4872L28.3333 26.6667M23.3333 6.66675L16.6667 33.3334" stroke="#808080" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center border-b border-gray-200 py-8">
                        <h5 className="text-base w-72">03</h5>
                        <h2 className="text-9xl font-bold flex-grow text-greyc">Marketing</h2>
                        <div className="w-52 flex justify-end">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 24.5H10.75V33.25M24.5 33.25V24.5H33.25M33.25 10.75H24.5V2M10.75 2V10.75H2" stroke="#808080" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center border-b border-gray-200 py-8">
                        <h5 className="text-base w-72">04</h5>
                        <h2 className="text-9xl font-bold flex-grow text-greyc">Growth</h2>
                        <div className="w-52 flex justify-end">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_492)">
                            <path d="M39.0575 2.39251C39.0013 1.60126 38.3638 0.975011 37.5713 0.938761H37.5675C29.7913 0.612511 22.8713 3.91126 16.6963 10.9375H4.99878C4.27003 10.9375 3.65878 11.4363 3.48503 12.1113L3.48253 12.1225L0.982529 22.1225C0.952529 22.2363 0.936279 22.3663 0.936279 22.5013C0.936279 23.3638 1.63628 24.0638 2.49878 24.0638H8.10878C7.85378 24.565 7.59628 25.0488 7.34378 25.5675C7.24378 25.7675 7.18628 26.0025 7.18628 26.2513C7.18628 26.6825 7.36128 27.0738 7.64378 27.3563L12.6438 32.3563C12.9263 32.6388 13.3175 32.8125 13.7475 32.8125C14.005 32.8125 14.2475 32.75 14.4625 32.64L14.4538 32.6438C14.9513 32.3913 15.4425 32.1325 15.9363 31.8763V37.695C15.9375 38.5575 16.6363 39.2563 17.4988 39.2575C17.5 39.2575 17.5013 39.2575 17.5038 39.2575C17.6363 39.2575 17.765 39.24 17.8888 39.2088L17.8788 39.2113L27.8788 36.7113C28.5638 36.5363 29.0625 35.9238 29.0625 35.1963V23.51C35.455 18.1675 39.69 11.5138 39.0575 2.39251ZM4.50128 20.9375L6.22003 14.0625H14.1725C12.715 16.0288 11.2613 18.275 9.94628 20.6113L9.77753 20.9375H4.50128ZM25.9375 33.975L19.0625 35.6938V30.2C21.7663 28.705 24.0125 27.2863 26.1738 25.7575L25.9375 25.9163V33.975ZM14.0513 29.3413L10.645 25.9375C17.8863 11.4575 26.1975 4.27626 35.995 4.04501C36.0713 15.4438 27.3038 22.505 14.05 29.34L14.0513 29.3413ZM28.75 7.18751C26.5063 7.18751 24.6875 9.00626 24.6875 11.25C24.6875 13.4938 26.5063 15.3125 28.75 15.3125C30.9938 15.3125 32.8125 13.4938 32.8125 11.25C32.81 9.00751 30.9925 7.19001 28.75 7.18751ZM28.75 12.1875C28.2325 12.1875 27.8125 11.7675 27.8125 11.25C27.8125 10.7325 28.2325 10.3125 28.75 10.3125C29.2675 10.3125 29.6875 10.7325 29.6875 11.25C29.6875 11.7675 29.2675 12.1875 28.75 12.1875Z" fill="#808080"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_492">
                            <rect width="40" height="40" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

       <div className="flex flex-col gap-4 bg-footerb rounded-xl pt-20 pb-10 my-24 max-w-screen-1xl mx-auto">
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
            <Image src="/images/business-media5.png" className="w-auto absolute top-16 right-0 transform -rotate-180" width={100} height={100} />
            <div className="flex flex-col max-w-screen-1xl mx-auto gap-6">
                <div className="flex gap-8 justify-center items-center text-black">
                    <h3 className="py-2 px-6 border border-black rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Why choose us</h3>
                    <h2 className="text-6xl font-semibold">Awesome Responsive
                     <br/>  in All Device</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="lg:w-3/4 w-full">
                        <div className="p-4">
                            <Image src="/images/response.png" className="w-full" width={1000} height={100} quality={100} />
                        </div>
                    </div>
                    <div className="lg:w-1/4 w-full">
                        <div className="flex flex-wrap">
                            <div className="sm:w-1/2 w-full">
                                <div className="flex flex-col gap-4 py-4 px-8">
                                    <Image src="/images/response2.png" width={80} height={80} className="w-auto" />
                                    <div className="flex text-center flex-col gap-2 items-center">
                                        <h4 className="font-semibold">1920 x 1080px</h4>
                                        <p className="text-base">Full Screen <br/>
                                        Layout</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full">
                                <div className="flex flex-col gap-4 py-4 px-8">
                                    <Image src="/images/response3.png" width={100} height={100} className="w-auto" />
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
                                    <Image src="/images/response4.png" width={100} height={100} className="w-auto" />
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
                                    <Image src="/images/response5.png" width={100} height={100} className="w-auto" />
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
            <Image src="/images/client-before.png" className="w-auto absolute bottom-10 right-0" width={200} height={100} />
            <div className="py-20 relative max-w-screen-1xl mx-auto">
            
            <div className="flex flex-col gap-6">
                <div className="flex gap-8 justify-center items-center text-black">
                    <h3 className="py-2 px-6 border border-gray-200 rounded-lg relative"> <span className="before:content-[*] absolute top-4 left-2 w-2 h-2 rounded-full bg-primary"></span> Our Approaches</h3>
                    <h2 className="text-6xl font-semibold">Different Approaches 
                     <br/>  We Offer to Our Clients</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-1/3">
                        <div className="flex text-white relative p-6">
                            <div className="relative w-full">
                                <Image src="/images/client1.png" className="w-full" width={400} height={100} quality={100} />
                            </div>
                            <div className="absolute bottom-8 w-full py-6 px-4">
                                <h3 className="text-4xl">Project based hiring</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex text-white relative p-6">
                            <div className="relative w-full">
                                <Image src="/images/client2.png" className="w-full" width={400} height={100} quality={100} />
                            </div>
                            <div className="absolute bottom-8 w-full py-6 px-4">
                                <h3 className="text-4xl">Hire a full team for project 
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex text-white relative p-6">
                            <div className="relative w-full">
                                <Image src="/images/client3.png" className="w-full" width={400} height={100} quality={100} />
                            </div>
                            <div className="absolute bottom-8 w-full py-6 px-4">
                                <h3 className="text-4xl">Hire resources </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> */}
        

        <div className="bg-brand pt-60 pb-16 -mt-28">
                <div className="flex flex-wrap bg-brand max-w-screen-1xl mx-auto px-8 lg:px-0">
                    <div className="lg:w-1/2 w-full flex flex-col flex-wrap gap-y-12">
                        <h2 className="text-primary font-bold text-3xl lg:text-6xl leading-12">Transform Your Brand with Cutting-Edge Design, Development, and Digital Innovation</h2>
                        <div className="flex flex-wrap gap-x-6">
                            <span className="bg-white p-4 rounded-full text-black flex gap-2"> <Image src="/images/mail-05.png" className="w-auto" width={50} height={50} /> <Link href="mailto:info@hashsoftware.com"> info@hashsoftware.com </Link> </span>
                            <span className="bg-white p-4 rounded-full text-black flex gap-2"> <Image src="/images/phone-call-01.png" className="w-auto" width={50} height={50} /> <Link href="tel:91 90565-59922"> +91 90565-59922 </Link> </span>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Image src="/images/badges-02.png" className="w-auto" width={100} height={100} />
                            <Image src="/images/badges-03.png" className="w-auto" width={100} height={100} />
                            <Image src="/images/badges-04.png" className="w-auto" width={100} height={100} />
                            <Image src="/images/badges-05.png" className="w-auto" width={100} height={100} />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-end">
                        <Image src="/images/brand-media.png" className="w-auto" width={400} height={100} />
                    </div>
                </div>
            </div>
            
            <div className="bg-lightblue">
                <div className="flex flex-wrap max-w-screen-1xl mx-auto pt-10 lg:pt-32 pb-24 items-center px-8 lg:px-0">
                    <div className="lg:w-1/2 w-full">
                        <Image src="/images/innovation.png" width={400} height={100} className="w-auto" />
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col gap-4 text-center lg:text-left">
                        <h2 className="lg:text-5xxxl text-4xl font-black capitalize text-brand leading-11">Empowering Innovation: Complete Tech Solutions</h2>
                        <p className="text-xl text-brand">Hash Software provides a comprehensive suite of mobile and web-based solutions, meticulously designed to empower businesses and drive digital transformation. From intuitive mobile apps to dynamic web platforms, we deliver cutting-edge technologies tailored to meet your unique needs, ensuring seamless functionality, enhanced user experiences, and measurable results. Let Hash Software be your trusted partner in turning innovative ideas into impactful solutions.</p>
                        <div className="flex lg:justify-start justify-center">
                            <Button variant="solidblue">Get Started</Button>
                        </div>
                        
                    </div>
                </div>
                <div class="overflow-hidden whitespace-nowrap relative">
                    <div className="w-full h-20 left-0 relative top-6 py-6">
                        <div className="absolute w-full h-full top-0 left-0 bg-white transform rotate-1 overflow-hidden flex items-center">
                            <div class="animate-marqueeleft text-lg font-bold text-black items-center flex gap-x-8 ">
                                <div class="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} /> <span className="text-4xl font-bold"> Access Expert Web Development On-Demand </span> </div>
                                <div class="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} /> <span className="text-4xl font-bold"> Access Expert Web Development On-Demand </span> </div>
                                <div class="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} /> <span className="text-4xl font-bold"> Access Expert Web Development On-Demand </span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-4">
                <div class="overflow-hidden whitespace-nowrap relative">
                    <div className="w-full h-20 left-0 relative top-0 py-6 flex items-center">
                        <div className="bg-lightblue transform -rotate-1 relative z-50 h-20 overflow-hidden flex items-center">
                            <div class="animate-marquee text-lg font-bold text-white items-center flex gap-x-8 ">
                                <div class="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} /> <span className="text-4xl font-bold"> Access Expert Web Development On-Demand </span> </div>
                                <div class="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} /> <span className="text-4xl font-bold"> Access Expert Web Development On-Demand </span> </div>
                                <div class="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} /> <span className="text-4xl font-bold"> Access Expert Web Development On-Demand </span> </div>
                            </div>
                        </div>
                    </div>       
                </div> 
            </div>

            <div className="flex flex-col gap-4 items-center max-w-screen-1xl mx-auto px-8 lg:px-0 pt-24 pb-24">
                <div className="flex flex-col gap-4 items-center justify-center w-full lg:w-3/5">
                    <h2 className="text-lightblue text-6xl font-black">How We Can Help</h2>
                    <p className="text-base text-center">Our team is committed to crafting and enhancing brands through innovative web and mobile app development. We work closely with our clients to create tailored strategies for building their websites and mobile applications, ensuring we deliver exceptional results that align with their goals and vision.</p>
                </div>
                <div className="flex md:flex-nowrap flex-wrap gap-4 items-center justify-between px-8">
                    <div className="bg-blue text-white p-8 rounded-2xl flex flex-col gap-4">
                        <Image src="/images/graphic.png" className="" quality={100} width={60} height={60} alt="hash"/>
                        <h3 className="text-3xl font-bold capitalize">Creative Graphic <br/> Design Solutions</h3>
                        <p>Hash Software’s Creative Graphic Design Solutions craft impactful designs, unique branding, and custom materials to make your brand stand out.</p>
                        <div className="flex justify-end">
                            <Button variant={"solidlight"}>Learn More </Button>
                        </div>
                    </div>
                    <div className="bg-red text-white p-8 rounded-2xl flex flex-col gap-4">
                        <Image src="/images/stack.png" className="" quality={100} width={60} height={60} alt="hash"/>
                        <h3 className="text-3xl font-bold capitalize">Full-Stack <br/>
                        Development Solutions</h3>
                        <p>Full-Stack Development Solutions at Hash Software deliver seamless, scalable web and mobile applications with end-to-end expertise in front-end and back-end development.</p>
                        <div className="flex justify-end">
                            <Button variant={"solidlight"}>Learn More</Button>
                        </div>
                    </div>
                    <div className="bg-pink text-white p-8 rounded-2xl flex flex-col gap-4">
                        <Image src="/images/mobile.png" className="" quality={100} width={60} height={60} alt="hash"/>
                        <h3 className="text-3xl font-bold capitalize">Innovative Mobile <br/>
                        App Development</h3>
                        <p>Our Innovative Mobile App Development services create intuitive, high-performing apps tailored to your business, delivering seamless user experiences and driving growth in a competitive market.</p>
                        <div className="flex justify-end">
                            <Button variant={"solidlight"}>Learn More</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-start lg:justify-between px-8">
                    <div className="lg:w-1/2 w-full bg-yellow text-white p-8 rounded-2xl flex flex-col gap-4">
                        <Image src="/images/product.png" className="" quality={100} width={60} height={60} alt="hash"/>
                        <h3 className="text-3xl font-bold capitalize">Comprehensive <br/>
                        Product Development</h3>
                        <p>Comprehensive Product Development services guide you through every stage, from concept to launch. We create innovative, user-centered products with a focus on functionality, scalability, and market impact, ensuring your product meets both user needs and business objectives.</p>
                        <div className="flex justify-end">
                            <Button variant={"solidlight"}>Learn More</Button>
                        </div>
                    </div> 
                    <div className="lg:w-1/2 w-full bg-green text-white p-8 rounded-2xl flex flex-col gap-4">
                        <Image src="/images/seo-digital.png" className="" quality={100} width={60} height={60} alt="hash"/>
                        <h3 className="text-3xl font-bold capitalize">SEO & Digital <br/>
                        Marketing Excellence</h3>
                        <p>SEO & Digital Marketing Excellence focuses on enhancing your online presence and driving measurable results. We combine effective SEO strategies with targeted digital marketing campaigns to increase visibility, engage your audience, and boost conversions.</p>
                        <div className="flex justify-end">
                            <Button variant={"solidlight"}>Learn More</Button>
                        </div>
                    </div>    
                </div>   
            </div>

            <div className="flex flex-col gap-6 max-w-screen-1xl mx-auto pt-24 pb-24">
                <div className="w-3/4 mx-auto text-center">
                    <h2 className="text-6xl text-black font-bold mb-2">Featured Success Stories</h2>
                    <p className="text-3xl capitalize text-brand font-semibold">SaaS Application</p>
                </div>
                <div className="flex gap-4 lg:flex-nowrap w-full">
                    <div className="lg:w-1/2 w-full">
                        <div className="flex flex-col gap-4">
                            <div className="bg-yellowlight flex flex-col gap-4 p-8 rounded-2xl">
                                <div className="flex flex-wrap w-full md:flex-nowrap gap-x-4 items-stretch">
                                    <div className="w-3/4 flex gap-4 justify-between">
                                        <div className="p-4 bg-white w-1/2 rounded-lg">
                                            <Image src="/images/lead.png" className="w-auto" alt="hash" width={100} height={100}/> 
                                        </div>
                                        <div className="p-4 bg-white w-1/2 rounded-lg">
                                                <Image src="/images/out-doc.png" className="w-auto" alt="hash" width={100} height={100}/> 
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white w-3/12 rounded-lg">
                                            <Image src="/images/progress-card.png" className="w-auto" alt="hash" width={100} height={100}/> 
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-black underline">WillowSpace is an all-in-one client management platform for business owners who care about providing outstanding client experiences.</h3>
                            </div>
                            <div className="bg-purpledark flex flex-col gap-4 p-8 rounded-2xl">
                                <div className="flex flex-wrap w-full md:flex-nowrap gap-x-4 items-stretch">
                                    <div className="p-4 w-1/3 rounded-lg">
                                        <Image src="/images/prple-card.png" className="w-full" alt="hash" width={300} height={100}/> 
                                    </div>
                                    <div className="p-4 w-1/3 rounded-lg">
                                        <Image src="/images/prple-card.png" className="w-full" alt="hash" width={300} height={100}/> 
                                    </div>
                                    <div className="p-4 w-1/3 rounded-lg">
                                        <Image src="/images/prple-card.png" className="w-full" alt="hash" width={300} height={100}/> 
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-white underline">Reveal Hub is your trusted destination for insightful tarot card readings. Discover guidance, clarity, and inspiration as you explore life’s journey through cards.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 ">
                        <div className="flex flex-col gap-4">
                            <div className="bg-reddark p-6 pr-0 rounded-2xl">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <Image src="/images/feature-1.png" className="w-auto" quality={100} width={400} height={100} />
                                            <div className="flex flex-col gap-4">
                                                <div className="flex w-full gap-4 h-full">
                                                <Image src="/images/feature-2.png" className="w-auto w-1/3" quality={100} width={100} height={100} />
                                                <Image src="/images/feature-3.png" className="w-auto w-1/3" quality={100} width={100} height={100} />
                                                <Image src="/images/feature-4.png" className="w-auto w-1/3" quality={100} width={100} height={100} />
                                                </div>
                                                 <div className="flex items-center gap-2 pr-10">
                                                    <Image src="/images/user.png" className="w-auto" width={50} height={50} quality={100} alt="hash"/>
                                                    <div className="flex flex-col gap-4">
                                                        <h5 className="text-2xl text-white">Rahul Shah</h5>
                                                        <span className="text-base text-black font-semibold p-4 rounded-lg bg-white">Hey there! 😊 I’m always up for a good conversation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white underline">Reveal Hub is your trusted destination for insightful tarot card readings. Discover guidance, clarity, and inspiration as you explore life’s journey through cards.</h3>
                                    </div>
                                </div>
                            </div>  
                            <div className="bg-greenlight p-6 rounded-2xl">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="flex w-full h-full">
                                                <Image src="/images/poke-card.png" className="w-auto" quality={100} width={100} height={100} />
                                                <Image src="/images/poke-card2.png" className="w-auto -ml-3" quality={100} width={100} height={100} />
                                                <Image src="/images/poke-card3.png" className="w-auto -ml-3" quality={100} width={100} height={100} />
                                                <Image src="/images/poke-card.png" className="w-auto -ml-3" quality={100} width={100} height={100} />
                                                <Image src="/images/poke-card2.png" className="w-auto -ml-3" quality={100} width={100} height={100} />
                                                <Image src="/images/poke-card3.png" className="w-auto -ml-3" quality={100} width={100} height={100} />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-black underline">Pokemagic is your go-to marketplace for buying and selling Pokémon cards. Explore a wide range of rare, collectible, and collection or find your next treasure.</h3>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default home;