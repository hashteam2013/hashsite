
import BannerTesti from "@/Components/Banners/BannerTesti";
import ProjectMindAbout from "@/Components/ProjectMind/ProjectMindAbout";
import Image from "next/image";
import React from "react";


const Testimonials = ()=>{
    return (
        <>
            <BannerTesti/>

            <div className="flex flex-wrap gap-16 justify-center items-center w-3/4 mx-auto items-stretch py-32 px-10">
                <div className="flex flex-col w-5/12 gap-6 items-center border-b-2 border-primary rounded-lg shadow-xl p-6">
                    <h4 className="text-xl font-semibold"> Real Estate AVM Tool </h4>
                    <Image src="/images/cece.png" quality={100} alt="hash" className="w-auto rounded-full" width={100} height={100} />
                    <p className="text-greyc text-center"> The team at Hash Software did an incredible job with this project. They were flexible and receptive with all feedback. Never felt like I was being taken advantage of or up-charged. I give them a lot of credit for extensive testing on the site as well- you can tell they have an attention to detail and care about their client’s results. I’ve worked with a large number of outsourced web companies with mixed results- I would not hesitate to recommend Sourabh and his team. Will be working with them soon on our next projects. Thanks! </p>
                    
                    <div className="flex items-center gap-4">
                        <Image src="/images/WordPress_blue_logo.png" alt="hash" className="w-auto" width={20} height={20} />
                        <div className="flex flex-col gap-0">
                            <h4 className="text-primary font-semibold">Technologies</h4>
                            <p className="text-xs font-semibold">Wordpress</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-5/12 gap-6 items-center border-b-2 border-primary rounded-lg shadow-xl p-6">
                    <h4 className="text-xl text-center font-semibold"> Upgrade of HTML pages to W3C standard and plugins
                    </h4>
                    <Image src="/images/rbrgc.png" quality={100} alt="hash" className="w-auto rounded-full" width={100} height={100} />
                    <p className="text-greyc text-center"> Hash Software are really professional and I really recommend their professionalism towards there job. They are very good at translating the requirements in to user deliverable. They take a very structured approach to their coding and happy to take an exploratory approach to problem solving. <br/> I would seriously recommend them! </p>
                    
                    <div className="flex items-center gap-4">
                        <Image src="/images/HTML5_logo_and_wordmark.png" alt="hash" className="w-auto" width={20} height={20} />
                        <div className="flex flex-col gap-0">
                            <h4 className="text-primary font-semibold">Technologies</h4>
                            <p className="text-xs font-semibold">HTML, Bootstrap, CSS</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-5/12 gap-6 items-center border-b-2 border-primary rounded-lg shadow-xl p-6">
                    <h4 className="text-xl font-semibold"> WordPress Gym Membership Plugin
                    </h4>
                    <Image src="/images/rbrgc.png" quality={100} alt="hash" className="w-auto rounded-full" width={100} height={100} />
                    <p className="text-greyc text-center"> Hash Software team helped me develop a full custom WordPress plugin from concept and mockups to a fully realized software tool for my end client.

The end client was very impressed with the plugin and had great things to say. It has been a pleasure working with the team at Hash. They worked out all the little issues I might find during the dev process and where very helpful in explaining different options of functionality.

I look forward to more projects in the future with them. </p>
                    
                    <div className="flex items-center gap-4">
                        <Image src="/images/WordPress_blue_logo.png" alt="hash" className="w-auto" width={20} height={20} />
                        <div className="flex flex-col gap-0">
                            <h4 className="text-primary font-semibold">Technologies</h4>
                            <p className="text-xs font-semibold">Wordpress</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-5/12 gap-6 items-center border-b-2 border-primary rounded-lg shadow-xl p-6">
                    <h4 className="text-xl font-semibold"> Seeking highly skilled team to fix Back-end errors from existing website
                    </h4>
                    <Image src="/images/cece.png" quality={100} alt="hash" className="w-auto rounded-full" width={100} height={100} />
                    <p className="text-greyc text-center"> I am extremely pleased with Hash Software. The team has been responsive from start to finish and even when unforeseen issues took place with existing website, they adapted, adjusted and still help me get through the issues, fixing everything I needed accomplished. I will have more work to do and without a doubt know that Hash Software team will take care of us at that time as well! Highly recommend this proficient team!” </p>
                    
                    <div className="flex items-center gap-4">
                        <Image src="/images/php.png" className="w-auto" alt="hash" width={20} height={20} />
                        <div className="flex flex-col gap-0">
                            <h4 className="text-primary font-semibold">Technologies</h4>
                            <p className="text-xs font-semibold">Core PHP</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-5/12 gap-6 items-center border-b-2 border-primary rounded-lg shadow-xl p-6">
                    <h4 className="text-xl font-semibold"> Website Design & Development
                    </h4>
                    <Image src="/images/rbrgc.png" quality={100}  alt="hash" className="w-auto rounded-full" width={100} height={100} />
                    <p className="text-greyc text-center"> Hash Software has delivered another great solution for us, they have communicated regularly about updates and progress of the project and have completed the project on time and on schedule. We will definitely use the team again for our other projects. </p>
                    
                    <div className="flex items-center gap-4">
                        <Image src="/images/aspnet.png" className="w-auto" alt="hash" width={20} height={20} />
                        <div className="flex flex-col gap-0">
                            <h4 className="text-primary font-semibold">Technologies</h4>
                            <p className="text-xs font-semibold">ASP.Net</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-5/12 gap-6 items-center border-b-2 border-primary rounded-lg shadow-xl p-6">
                    <h4 className="text-xl font-semibold"> Real Estate AVM Tool </h4>
                    <Image src="/images/rbrgc.png" quality={100} alt="hash" className="w-auto rounded-full" width={100} height={100} />
                    <p className="text-greyc text-center"> The team at Hash Software did an incredible job with this project. They were flexible and receptive with all feedback. Never felt like I was being taken advantage of or up-charged. I give them a lot of credit for extensive testing on the site as well- you can tell they have an attention to detail and care about their client’s results. I’ve worked with a large number of outsourced web companies with mixed results- I would not hesitate to recommend Sourabh and his team. Will be working with them soon on our next projects. Thanks! </p>
                    
                    <div className="flex items-center gap-4">
                        <Image src="/images/WordPress_blue_logo.png" alt="hash" className="w-auto" width={20} height={20} />
                        <div className="flex flex-col gap-0">
                            <h4 className="text-primary font-semibold">Technologies</h4>
                            <p className="text-xs font-semibold">Wordpress</p>
                        </div>
                    </div>
                </div>
            </div>

            <ProjectMindAbout/>
        </>
        
    )
};


export default Testimonials;