"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectMindAbout from "@/Components/ProjectMind/ProjectMindAbout";
import Modal from "@/Components/Modal/Modal";

const About = () => {
    const [open, setIsOpen] = React.useState(false);

    const onClose=()=>{
        setIsOpen(false);
    }

    return(
        <>
            <div className="flex flex-col bg-about py-8 px-24 justify-center relative h-80 bg-center items-center bg-cover ">
                <div className="absolute content-[*] top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
                <h2 className="text-white text-5xl font-bold relative z-20">About Us</h2>
                <p className="text-white relative z-20"> <Link href="/" className="hover:text-primary"> home </Link> <span className="text-5xl text-primary px-2">.</span> about</p>
            </div>
            <div className="px-8 lg:px-24 py-10 lg:py-24 bg-about2 bg-cover bg-center mx-auto relative">
                <Image src="/images/Shap.png" alt="hash" className="w-auto absolute animate-spin top-0 lg:top-10 left-1/2" width={50} height={50} />
                <Image src="/images/jhbj.png" className="w-auto absolute top-32 left-0 z-0 overflow-hidden" alt="hash" width={200} height={400} />
                <div className="flex flex-wrap justify-between items-center py-0 lg:py-6 relative z-20">
                    <div className="flex flex-col lg:w-3/5 gap-4">
                        <h3 className="text-black text-4xl w-full  font-semibold capitalize">Our services solve any business problem</h3>
                        <p className="text-base text-greyc w-full">We are a professional mobile and website development firm dedicated to trustworthy results.</p>
                    </div>
                    
                    <p className="text-base text-greyc w-full lg:w-2/5 lg:mt-0 mt-6">Hash Softwares is the brainchild of Mr. Sourabh Sachdeva, the founder of the company. Our brand is the perfect amalgamation of ample experience with the same newness with which we started our company. Ever since the inception of Hash Softwares in 2012, our team has worked 24×7 to meet the entire web development needs of our clients. Fast forward to eight years; our team has become the top choice when it comes to all kinds of services ranging from Front-end Development, Digital Marketing, Back-end Development, Mobile App Development, and Graphic Design. </p>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap  justify-center gap-16 mt-20 my-6 relative z-20">
                    <div className="flex flex-col gap-2 w-full lg:w-1/4 bg-white shadow-innerpage rounded-2xl -mt-16 p-8 border-primary border-b-4 transform hover:-translate-y-2 transition cursor-pointer">
                        <Image src="/images/svgexport-2.png" className="" width={50} height={50} alt="hash"/>
                        <h4 className="text-black text-lg font-semibold ">Unlimited Revisions</h4>
                        <p className="text-greyc">We make designs that capture everyone’s attention. With creativity as the main ingredient, our designs will captivate the audience and improve your brand identity..
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full lg:w-1/4 bg-white shadow-innerpage rounded-2xl mt-4 p-8 border-primary border-b-4 transform hover:-translate-y-2 transition cursor-pointer">
                        <Image src="/images/svgexport-1.png" className="" width={50} height={50} alt="hash"/>
                        <h4 className="text-black text-lg font-semibold ">Dedicated Team</h4>
                        <p className="text-greyc">Backend development is the backbone of your website. Our team knows how to give a promising structure to your website that even your critics will appreciate
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full lg:w-1/4 bg-white shadow-innerpage rounded-2xl mt-0 lg:mt-16 p-8 border-primary border-b-4 transform hover:-translate-y-2 transition cursor-pointer">
                        <Image src="/images/svgexport-3.png" className="" width={50} height={50} alt="hash"/>
                        <h4 className="text-black text-lg font-semibold ">Fast Turnaround</h4>
                        <p className="text-greyc">Frontend development plays a pivotal role in a website’s performance. To make sure your website is user friendly; our team uses advanced tools that reflect the true essence of your brand to your visitors.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full lg:w-1/4 bg-white shadow-innerpage rounded-2xl mt-6 lg:mt-32 p-8 border-primary border-b-4 transform hover:-translate-y-2 transition cursor-pointer">
                        <Image src="/images/svgexport-4.png" className="" width={50} height={50} alt="hash"/>
                        <h4 className="text-black text-lg font-semibold ">Simple Communication</h4>
                        <p className="text-greyc">Frontend development plays a pivotal role in a website’s performance. To make sure your website is user friendly; our team uses advanced tools that reflect the true essence of your brand to your visitors.
                        </p>
                    </div>
                </div>
                <div className="flex w-full mt-24 flex-wrap relative items-center z-20">
                    <div className="lg:w-1/2 w-full ">
                        <Image src="/images/hjbfj.png" quality={100} className="w-3/4 mx-auto" width={800} height={400} alt="hash" />
                    </div>
                    <div className="lg:w-1/2 w-full px-4">
                        <div className="flex flex-col items-center gap-10">
                            <h2 className="text-5xl capitalize font-semibold">Why you need Hash Softwares</h2>
                            <p className="text-base text-greyc lg:text-left text-center">
                            Over the years, we have partnered with 200+ companies and delivered 600+ five star projects successfully. 
                            As a company, our first priority is the needs of our clients. This is why we have excelled in satisfying them thoroughly. With our help, hundreds of people have succeeded in various domains of their business and life. <br/> <br/>
                                We have a dedicated team of Web Developers, Designers, and Marketers that deliberately identify your needs and give the best results to them. Our affordable services are extremely popular in different nations including the US, Canada, Australia, the UK, and other countries.
                        With hard work and 100% dedication, we are adamant to deliver the best of the best services to each one of our clients. 
                        With enough experience, we have a package of everything that your brand needs to get recognized. If you or your company is looking for Web development services, we are always happy to help.
                            </p>
                            {/* <Button className="bg-transparent w-32 flex items-center font-semibold border-b-2 border-black rounded-none">Learn More  </Button> */}
                        </div>
                        
                    </div>
                </div>
            </div>

            <ProjectMindAbout/>

            {/* <Button variant="solid" onClick={()=>setIsOpen(true)}>Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button >Default</Button>*/}

            <Modal
            open={open}
            onClose={onClose} />  
        </>
    )
};
export default About;