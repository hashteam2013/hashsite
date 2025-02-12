import Button from "@/Components/Button/Buttons";
import ProjectMindCase from "@/Components/ProjectMind/ProjectMindCase";
import Image from "next/image";
import Link from "next/link";

const casestudy = () =>{
    return(
        <>
            {/* <div className="flex flex-col bg-about px-8 xl:px-24 2xl:px-40 py-32 justify-center relative h-80 bg-center items-center bg-cover ">
                <div className="absolute content-[*] top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
                <h2 className="text-white text-5xl font-bold relative z-20">Case Study</h2>
                <p className="text-white relative z-20"> <Link href="/" className="hover:text-primary"> home </Link> <span className="text-5xl text-primary px-2">.</span> casestudy</p>
            </div> */}
            
            <div className="flex flex-col bg-case bg-cover bg-no-repeat px-8 xl:px-24 2xl:px-40 py-10">
                <div className="flex flex-col gap-4 items-start justify-center">
                    <div className="relative">
                        <h4 className="text-2xl font-semibold pl-14">Our Digital Case Study</h4>
                        <Image src="/images/heading_shapes.png" className="absolute top-4 left-0 w-auto" width={40} height={150} alt="test"/>
                        <h2 className="text-9xl leading-13 font-bold">Helping the Brands  to <br/>
                        Grow <span className="italic text-green-500"> Business </span></h2>
                        <div className="absolute bottom-0 -right-16 animate-spin2">
                            <Image src="/images/Frame.png" className="w-auto" width={100} height={100} alt="test"/>
                        </div>
                    </div>
                    <Image src="/images/banner_img_1.png" className="w-full" width={800} height={400} alt="test"/>
                </div>
            </div>
            <div className="flex flex-wrap items-center bg-about3 bg-top bg-cover justify-center gap-14 px-8 xl:px-24 2xl:px-40 py-32">
                <div className="flex flex-col 2xl:w-1/4 w-80 relative border-2 border-slate-100 drop-shadow-xl p-2 rounded-lg cursor-pointer hover:mt-8 hover:">
                    <div className="group">
                        <div className="hover:-mt-8 group-hover:-mt-8 transition-all duration-300">
                            <Image src="/images/Group-1125.png"
                                alt="test"
                                className="w-full rounded-lg object-cover object-bottom w-full hover:-mt-6 transition-all duration-300"
                                quality={100}
                                width={400}
                                height={400} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4 justify-center p-2 border-0 h-28">
                        <h3 className="text-xl">Tumse – Online Dating Platform</h3>
                        <Button variant="ghost2"> View Case Study</Button>
                    </div>
                </div>
                <div className="flex flex-col 2xl:w-1/4 w-80 relative border-2 border-slate-100 drop-shadow-xl p-2 rounded-lg cursor-pointer hover:mt-8">
                    <div className="group">
                        <div className="hover:-mt-8 group-hover:-mt-8 transition-all duration-300">
                            <Image src="/images/Group-1116.png"
                                className="w-full rounded-lg object-cover object-bottom w-full hover:-mt-6 transition-all duration-300"
                                alt="test"
                                quality={100}
                                width={400}
                                height={400} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4 justify-center p-2 border-0 h-28">
                        <h3 className="text-xl">Tumse – Online Dating Platform</h3>
                        <Button variant="ghost2"> View Case Study</Button>
                    </div>
                </div>
                <div className="flex flex-col 2xl:w-1/4 w-80 relative border-2 border-slate-100 drop-shadow-xl p-2 rounded-lg cursor-pointer hover:mt-8">
                    <div className="group">
                        <div className="hover:-mt-8 group-hover:-mt-8 transition-all duration-300">
                            <Image src="/images/Group-1119.png"
                                className="w-full rounded-lg object-cover object-bottom w-full hover:-mt-6 transition-all duration-300"
                                alt="test"
                                quality={100}
                                width={400}
                                height={400} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4 justify-center p-2 border-0 h-28">
                        <h3 className="text-xl">Tumse – Online Dating Platform</h3>
                        <Button variant="ghost2"> View Case Study</Button>
                    </div>
                </div>
                <div className="flex flex-col 2xl:w-1/4 w-80 relative border-2 border-slate-100 drop-shadow-xl p-2 rounded-lg cursor-pointer hover:mt-8">
                    <div className="group">
                        <div className="hover:-mt-8 group-hover:-mt-8 transition-all duration-300">
                            <Image src="/images/Group-1120.png"
                                className="w-full rounded-lg object-cover object-bottom w-full hover:-mt-6 transition-all duration-300"
                                alt="test"
                                quality={100}
                                width={400}
                                height={400} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4 justify-center p-2 border-0 h-28">
                        <h3 className="text-xl">Tumse – Online Dating Platform</h3>
                        <Button variant="ghost2"> View Case Study</Button>
                    </div>
                </div>
                <div className="flex flex-col 2xl:w-1/4 w-80 relative border-2 border-slate-100 drop-shadow-xl p-2 rounded-lg cursor-pointer hover:mt-8">
                    <div className="group">
                        <div className="hover:-mt-8 group-hover:-mt-8 transition-all duration-300">
                            <Image src="/images/Group-1121.png"
                                className="w-full rounded-lg object-cover object-bottom w-full hover:-mt-6 transition-all duration-300"
                                alt="test"
                                quality={100}
                                width={400}
                                height={400} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4 justify-center p-2 border-0 h-28">
                        <h3 className="text-xl">Tumse – Online Dating Platform</h3>
                        <Button variant="ghost2"> View Case Study</Button>
                    </div>
                </div>
                <div className="flex flex-col 2xl:w-1/4 w-80 relative border-2 border-slate-100 drop-shadow-xl p-2 rounded-lg cursor-pointer hover:mt-8">
                    <div className="group">
                        <div className="hover:-mt-8 group-hover:-mt-8 transition-all duration-300">
                            <Image src="/images/Group-1118-2.png" alt="hash"
                                className="w-full rounded-lg object-cover object-bottom w-full hover:-mt-6 transition-all duration-300"
                                quality={100}
                                width={400}
                                height={400} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4 justify-center p-2 border-0 h-28">
                        <h3 className="text-xl">Tumse – Online Dating Platform</h3>
                        <Button variant="ghost2"> View Case Study</Button>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden whitespace-nowrap relative">
                <div className="w-full h-20 left-0 relative top-6 py-6">
                    <div className="absolute w-full h-32 top-12 left-0 bg-secondary transform rotate-1 overflow-hidden"></div>
                </div>
                <div className="bg-primary transform -rotate-2 relative z-50 py-4">
                    <div className="animate-marquee text-lg font-bold text-white items-center flex gap-x-24 ">
                        <div className="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} alt="test"/> <span className="text-4xl font-bold"> Web Development </span> </div>
                        <div className="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} alt="test"/> <span className="text-4xl font-bold"> Web Development </span> </div>
                        <div className="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} alt="test"/> <span className="text-4xl font-bold"> Web Development </span> </div>
                        <div className="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} alt="test"/> <span className="text-4xl font-bold"> Web Development </span> </div>
                        <div className="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} alt="test"/> <span className="text-4xl font-bold"> Web Development </span> </div>
                        <div className="mx-4 relative flex gap-x-4 items-center"> <Image src="/images/icon-s-32.webp" className="w-auto bg-white p-2 rounded-full" width={20} height={20} alt="test"/> <span className="text-4xl font-bold"> Web Development </span> </div>
                    </div>
                </div>
            </div>

            <ProjectMindCase/>

        </>
    )
};
export default casestudy;