'use client'

import { useRef, useState } from "react";
import Icons from "../Icons/Icons";


const Accordion = () => {

    const faqs = [
        {
          id: 1,
          question: 'Design',
          answer: 'As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.',
          icon : "faq-icon-one"
        },
        {
          id: 2,
          question: 'Development',
          answer: 'As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.',
            icon : "faq-icon-code"
        },
        {
          id: 3,
          question: 'Marketing',
          answer: 'As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.',
            icon : "faq-icon-screen"
        },
        {
          id: 4,
          question: 'Growth',
          answer: 'As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.',
            icon : "faq-icon-rocket"
        }
      ];

    const contentEl = useRef(null);
    const [active, setActive] = useState(faqs[0]?.id || null);
    console.log(active,"active menu");
    

    const handleToggle = (index) => {
        setActive(prevActive => prevActive === index ? null : index);
    }

    return (
        <section className="">
        <div className="flex w-full mx-auto">
                <div className="accordion-group flex flex-col gap-0">
                    {faqs.map((faq, index) => (
                        <div className="accordion" key={index}>
                            <div className="accordion-header text-black text-4xl font-bold">
                                <button 
                                    className={`accordion-toggle flex justify-between p-3 ${active === faq.id ? 'active' : ''}`} 
                                    onClick={() => handleToggle(faq?.id)}
                                >
                                    <div className="flex justify-between text-greyc hover:text-primary w-full items-center border border-gray-200 border-l-0 border-r-0 py-8">
                                        <div className="">
                                            <h5 className="text-xl w-72">{faq?.id}</h5>
                                        </div>
                                        <div className="accordion-tile flex-grow">
                                            <h4 className="text-9xl font-bold flex-grow  text-left">{faq.question}</h4>
                                        </div>
                                        <div className="icon min-w-med flex justify-end">
                                            <Icons name={faq?.icon}/> 
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div
                                ref={contentEl}
                                className={`rc-collapse ${active === faq.id ? 'show' : ''}`}
                                style={{
                                    height: active === faq.id ? contentEl.current?.scrollHeight : "0px"
                                }}
                            >
                                <div className="rc-accordion-body py-2">
                                    <div className="accordion-content">
                                        <div className="flex py-10">
                                            <div className="w-72"></div>
                                            <div className="flex flex-col flex-grow">
                                                <p className="mb-0 text-greyc text-2xl w-3/4 font-normal">{faq.answer}</p>
                                                <div className="flex justify-between items-center mt-6">
                                                    <nav>
                                                        <ul>
                                                            <li className="text-greyc py-2 text-xl font-semimedium">Branding identity</li>
                                                            <li className="text-greyc py-2 text-xl font-semimedium">Strategy and planning</li>
                                                            <li className="text-greyc py-2 text-xl font-semimedium">rebrand</li>
                                                            <li className="text-greyc py-2 text-xl font-semimedium">pitchdesk</li>
                                                        </ul>
                                                    </nav>
                                                    <nav>
                                                        <ul>
                                                            <li className="text-greyc py-2 text-xl font-semimedium">UI/UX Design</li>
                                                            <li className="text-greyc py-2 text-xl font-semimedium">Wireframe & prototype</li>
                                                            <li className="text-greyc py-2 text-xl font-semimedium">motion</li>
                                                           
                                                        </ul>
                                                    </nav>
                                                </div>

                                            </div>
                                            <div className="min-w-med"></div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            
        </div>
    </section>
    );
};

export default Accordion;