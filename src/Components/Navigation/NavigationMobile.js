import Link from "next/link";

const NavigationMobile = () =>{
    return(
        <>
            <ul>
                <li className="py-2"> <Link href="/" className="text-white hover:text-primary py-2"> Home </Link> </li>
                <li className="py-2"> <Link href="/" className="text-white hover:text-primary py-2"> About </Link> </li>
                <li className="py-2"> <Link href="/" className="text-white hover:text-primary py-2"> Services </Link> </li>
                <li className="py-2"> <Link href="/" className="text-white hover:text-primary py-2"> Testimonials </Link> </li>
                <li className="py-2"> <Link href="/" className="text-white hover:text-primary py-2"> Contact </Link> </li>
                
            </ul>
        </>
    )
};

export default NavigationMobile;