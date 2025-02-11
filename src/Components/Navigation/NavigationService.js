import Link from "next/link";

const NavigationService = () =>{
    return(
        <>
            <div className="">
                <ul className="text-white font-normal flex flex-col gap-3">
                    <li> <Link href="/" className="hover:text-primary"> Creative Graphic Design Solutions </Link> </li>
                    <li> <Link href="/about" className="hover:text-primary"> Full-Stack Development Solutions </Link> </li>
                    <li> <Link href="/services" className="hover:text-primary"> Innovative Mobile App Development </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> Comprehensive Product Development </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> SEO & Digital Marketing Excellence </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> Automation Solutions </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> Development with AI/AI Services </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> API Integrations </Link> </li>
                    <li> <Link href="/" className="hover:text-primary"> Admin & Customer Support </Link> </li>
                </ul>
            </div>
        </>
    )
};

export default NavigationService;