import Testimonials from "@/app/testimonials/page";


const BannerInner = () =>{
    return(
        <>
            <div className="flex bg-about">
                <h3 className="text-white text-lg">About Us</h3>
                <p className="text-white text-lg">home/<span>about</span> </p>
            </div>

            <div className="text-greyc">
                <p>Hash Softwares is the brainchild of Mr. Sourabh Sachdeva, the founder of the company. Our brand is the perfect amalgamation of ample experience with the same newness with which we started our company. Ever since the inception of Hash Softwares in 2012, our team has worked 24×7 to meet the entire web development needs of our clients. Fast forward to eight years; our team has become the top choice when it comes to all kinds of services ranging from Front-end Development, Digital Marketing, Back-end Development, Mobile App Development, and Graphic Design. 
                Over the years, we have partnered with 200+ companies and delivered 600+ five star projects successfully. 
                As a company, our first priority is the needs of our clients. This is why we have excelled in satisfying them thoroughly. With our help, hundreds of people have succeeded in various domains of their business and life. Our company is W3C validated, and we offer-</p>
                <p>We have a dedicated team of Web Developers, Designers, and Marketers that deliberately identify your needs and give the best results to them. Our affordable services are extremely popular in different nations including the US, Canada, Australia, the UK, and other countries.
                With hard work and 100% dedication, we are adamant to deliver the best of the best services to each one of our clients. 
                With enough experience, we have a package of everything that your brand needs to get recognized. If you or your company is looking for Web development services, we are always happy to help.</p>
            </div>

            <Testimonials />
        </>
    )
};
export default BannerInner;