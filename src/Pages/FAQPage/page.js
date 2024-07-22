"use client"
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQPage  = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ =  (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const faqs = [
    {
      question: "What is the cost of a mobile application?",
      answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
    },
    {
      question: "Do you provide a guarantee for the mobile application?",
      answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
    },
    {
      question: "How long will development take?",
      answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
    },
    {
      question: "I will not tell my idea, do you guarantee confidentiality?",
      answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
    },
  ];

  return (
    <div id="faq" className="min-w-[97vw] p-8 mt-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 border-b p-4">FAQ</h2>
       <Accordion type="single" className='md:flex flex-wrap' collapsible>
       {faqs.map((faq, i) => (
          <AccordionItem value={`item-${i}`} key={i} className="mb-4  overflow-hidden transition-all duration-300 md:w-[50%] border-t border-b py-5">
            <AccordionTrigger className="flex justify-between w-full p-4" onClick={() => toggleFAQ(i)}>
              <span className="md:text-lg text-[14px] font-medium">{faq.question}</span>
              <span className="h-[30px] shadow-md rounded-[50%] p-2 flex items-center justify-center">
                {openFAQ === i ? 'X' : '+'}
              </span>
            </AccordionTrigger>
            <AccordionContent className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="p-4 bg-white rounded-lg md:text-[15px] text-[12px] shadow">
                {faq.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion> 
    
    </div>
  
  );
};

export default FAQPage;
