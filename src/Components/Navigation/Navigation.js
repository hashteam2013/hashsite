"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Button from "../Button/Buttons";
import Icons from "../Icons/Icons";
import NavigationFooter from "./NavigationFooter";
import NavigationMobile from "./NavigationMobile";

const Navigation = () =>{
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);

    console.log("width - ",width)

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      // Add event listener on component mount
      window.addEventListener("resize", handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return (
        <>
            <div className="flex justify-end md:justify-center items-center w-full">
                {width>768?<ul className="flex gap-x-7 font-medium bg-white px-10 text-black rounded-lg items-center h-97">
                    <li> <Link href="/home" className="hover:text-primary">Home</Link> </li>
                    <li className="relative">
                        <div className="before:content-[*] absolute top-2 -left-4 bg-primary w-2 h-2 rounded-full"></div>
                        <Link href="/about" className="hover:text-primary">About</Link></li>
                    <li className="relative">
                        <div className="before:content-[*] absolute top-2 -left-4 bg-primary w-2 h-2 rounded-full"></div>
                        <Link href="/testimonials" className="hover:text-primary">Testimonials </Link></li>
                    <li className="relative">
                        <div className="before:content-[*] absolute top-2 -left-4 bg-primary w-2 h-2 rounded-full"></div>
                        <Link href="/services" className="hover:text-primary">Services</Link></li>
                    <li className="relative"> 
                        <div className="before:content-[*] absolute top-2 -left-4 bg-primary w-2 h-2 rounded-full"></div>
                        <Link href="/casestudy" className="hover:text-primary">Case Study</Link></li>
                    <li className="relative"> 
                        <div className="before:content-[*] absolute top-2 -left-4 bg-primary w-2 h-2 rounded-full"></div>
                        <Link href="/blog" className="hover:text-primary">Blog</Link></li>
                </ul>:<div>
                    <Button onClick={()=>setOpen(true)} className="w-full bg-red"> <Icons name="hamburger"/> </Button>

                   { open&&<div className="fixed w-full top-0 right-0 z-50 animate-bounce2">
                    <div className="absolute top-4 right-4 rounded-full">
                        <Button variant="ham" onClick={()=>setOpen(false)} className="absolute top-4 p-4 right-4 p-4 rounded-full"> 
                            <Icons name="cross" />    
                        </Button>
                    </div>
                        <div className="bg-navydarkbg px-8 py-4">
                            <NavigationMobile/>
                        </div>
                        
                        </div>}
                    </div>}
            </div>
        </>
    )
}
export default Navigation;