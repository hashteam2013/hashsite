import Image from "next/image";
import Link from "next/link";
import Icons from "../Icons/Icons";

const ProjectMind = () =>{
    return(
        <>
             <div className="flex justify-center lg:justify-between lg:flex-nowrap flex-wrap px-2 lg:px-24 py-12 bg-footer items-center bg-cover">
                <div className="hidden lg:block">
                    <Image src="/images/cta2-img1.png" className="w-full" alt="hash" width={500} height={100} />
                </div>
                <div className="text-center flex flex-col items-center gap-4">
                    <h2 className="text-primary text-5xl font-bold">Have Project in mind</h2>
                    <p className="text-lg font-semibold">Get started for 1 Month free trial No Purchace required </p>
                    <Link href="/" className="bg-primary text-white hover:bg-navydarkbg p-6 rounded-full text-lg transform animate-pulse hover:rotate-0 -rotate-45" > <Icons name="right" /> </Link>
                </div>
                <div className="hidden lg:block">
                    <Image src="/images/cta2-img2.png" className="w-full" alt="hash" width={500} height={100} />
                </div>
            </div>
        </>
    )
};

export default ProjectMind;