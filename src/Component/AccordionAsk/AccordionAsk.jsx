import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";


const AccordionAsk =({faqs}) =>{

    return ( <section className=" flex mt-28 flex-col items-center  max-w-7xl md:flex-row  mx-auto py-12">
                <div className="md:w-1/2 px-4 ">
                    <h2 className="text-[30px] text-center  font-lora text-orange-500 mb-6">Preguntas frecuentes</h2>
                    <div>
                        {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 px-4 mt-8 md:mt-0">
                    <img src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/MG_8648-scaled.jpg" alt="Hotel Building" className="w-[800px] object-cover h-[700px] rounded-md shadow-md" />
                </div>
            </section>)
}

export default AccordionAsk