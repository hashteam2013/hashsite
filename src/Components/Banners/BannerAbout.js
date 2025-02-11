import Link from "next/link";

const BannerAbout = () =>{
    return(
        <>
            <div className="flex flex-col bg-about py-8 px-24 justify-center relative h-80 bg-center items-center bg-cover ">
                <div className="absolute content-[*] top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
                <h2 className="text-white text-5xl font-bold relative z-20">About Us</h2>
                <p className="text-white relative z-20"> <Link href="/" className="hover:text-primary"> home </Link> <span className="text-5xl text-primary px-2">.</span> about</p>
            </div>
        </>
    )
};

export default BannerAbout;