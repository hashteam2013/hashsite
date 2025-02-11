import Link from "next/link";

const NavigationSupport = () =>{
    return(
        <>
            <div className="">
                <ul className="text-white font-normal flex flex-col gap-3">
                    <li> <Link href="/" className="hover:text-primary"> Getting Started </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> FAQs </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> Contact Us </Link> </li>
                </ul>
            </div>
        </>
    )
};

export default NavigationSupport;