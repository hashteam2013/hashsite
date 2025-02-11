
import GoogleMapComp from "@/Components/GoogleMapComp/GoogleMapComp";
import Icons from "@/Components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";


const contact = () =>{
    return(
        <>
           <div className="flex flex-col bg-about py-8 px-24 justify-center relative h-80 bg-center items-center bg-cover ">
                <div className="absolute content-[*] top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
                <h2 className="text-white text-5xl font-bold relative z-20">Contact Us</h2>
                <p className="text-white relative z-20"> <Link href="/" className="hover:text-primary"> home </Link> <span className="text-5xl text-primary px-2">.</span> contact</p>
            </div>
            <div className="flex flex-col gap-10 px-24 py-32 bg-purpleoff">
                <div className="text-center">
                    <h2 className="text-7xl font-bold capitalize">We're ready to help you!</h2>
                </div>
                <div className="flex justify-center w-full">
                    <form>
                        <div className="flex flex-wrap justify-between gap-x-4 gap-y-6">
                            <div className="w-5/12">
                                <input type="text" className="form-control p-4 w-full border-2 border-gray-200 rounded-lg" placeholder="First Name" />
                            </div>
                            <div className="w-5/12">
                                <input type="text" className="form-control p-4 w-full border-2 border-gray-200 rounded-lg" placeholder="Last Name" />
                            </div>
                            <div className="w-full">
                                <input type="email" className="form-control p-4 w-full border-2 border-gray-200 rounded-lg" placeholder="Email" />
                            </div>
                            <div className="w-full">
                            <textarea
                                id="description"
                                
                                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg"
                                placeholder="Write Message..."
                                rows="5">

                                </textarea>
                            </div>
                            <div className="flex w-full justify-center">
                                <button type="submit" className="w-auto bg-primary text-white py-4 px-8 rounded-full border-2 border-primary hover:bg-transparent hover:text-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="flex flex-wrap pl-24 items-center">
                <div className="w-1/3 pr-10 relative z-20 ">
                    <img src="/images/img-s-62.webp" className="w-auto absolute -top-16 left-0 animate-bounce " width={20} height={20} />
                    <div className="bg-primary p-4 rounded-lg h-72 shadow-2xl">
                        <div className="flex flex-col justify-center gap-6 h-full">
                            <div className="flex gap-4 items-center text-white">
                                <div className="bg-white p-2 rounded-full">
                                <Image src="/images/Group-1107.png" className="w-auto" width={50} height={50} />
                                </div>
                                <p className="text-base">+91 90565 59922</p>
                            </div>
                            <div className="flex gap-4 items-center text-white">
                                <div className="bg-white p-2 rounded-full">
                                    <Image src="/images/Group.png" className="w-auto" width={50} height={50} />
                                </div>
                                <p className="text-base ">Info@hashsoftware.com</p>
                            </div>
                            <div className="flex gap-4 items-center text-white">
                                <div className="bg-white p-2 rounded-full">
                                <Image src="/images/Mask-group.png" className="w-16" width={50} height={50} />
                                </div>
                                <p className="text-base">TDi, Taj Plaza, 505, Second Floor, Airport Road, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <GoogleMapComp/>
                </div>
            </div>
        </>
    )
};
export default contact;