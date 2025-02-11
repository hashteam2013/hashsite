import Image from "next/image";

const BannerTesti = () =>{
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-offwhite py-32 px-24">
                <h3 className="capitalize text-6xl font-black stroke-0">Recent feedback</h3>
                <h2 className="flex flex-wrap justify-center w-8/12 text-9xl items-center gap-6"> What <Image src="/images/star-flower.png" alt="hash" className="w-auto animate-spin" width={100} height={100} /> Our  Client <Image src="/images/star-flower.png" alt="hash" className="w-auto animate-spin" width={100} height={100} /> Say's </h2>
            </div>
        </>
    )
};

export default BannerTesti;