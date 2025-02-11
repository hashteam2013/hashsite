import Image from "next/image";
import Link from "next/link";

const NavigationSocial = () =>{
    return(
        <>
            <ul className="flex gap-3">
                <li>
                <Link href="/" target="_blank"> <Image src="/images/facebook.png" width={30} height={30} alt="insta" /> </Link>
                </li>
                <li>
                <Link href="/" target="_blank"> <Image src="/images/insta.png" width={30} height={30} alt="insta" /> </Link>
                </li>
                <li>
                <Link href="/" target="_blank"> <Image src="/images/linkedin.png" width={30} height={30} alt="linkedin" /> </Link>
                </li>
                <li>
                    <Link href="/" target="_blank">        <Image src="/images/skype.png" width={30} height={30} alt="skype" /></Link>
                </li>
                <li>
                    <Link href="/" target="_blank">    <Image src="/images/svgexport-1.svg" width={30} height={30} alt="insta"/> </Link> 
                </li>
            </ul>
        </>
    )
};

export default NavigationSocial;