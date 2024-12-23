import Link from "next/link";

const Navigation = () =>{
    return (
        <>
            <div className="flex items-center">
                <ul className="flex gap-4 font-semibold font-sans">
                    <li> <Link href="/" className="hover:text-primary">Home</Link></li>
                    <li> <Link href="/" className="hover:text-primary">About</Link></li>
                    <li> <Link href="/" className="hover:text-primary">Testimonials </Link></li>
                    <li> <Link href="/" className="hover:text-primary">Case Study </Link></li>
                    <li> <Link href="/" className="hover:text-primary">Services</Link></li>
                </ul>
            </div>
        </>
    )
}
export default Navigation;