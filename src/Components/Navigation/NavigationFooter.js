import Link from "next/link";

const NavigationFooter = () =>{
    return(
        <>
            <div className="">
                <ul className="text-white font-normal flex flex-col gap-3">
                    <li> <Link href="/" className="hover:text-primary"> Home </Link> </li>
                    <li> <Link href="/about" className="hover:text-primary"> About </Link> </li>
                    <li> <Link href="/services" className="hover:text-primary"> Services </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> Blog </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> Resources </Link> </li>
                </ul>
            </div>
        </>
    )
};

export default NavigationFooter;