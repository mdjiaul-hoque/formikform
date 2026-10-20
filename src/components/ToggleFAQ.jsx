import React, { useState } from 'react'
import { faqsData } from './Data'
import Faqs from './Faqs';

export default function ToggleFAQ() {
    const [faqs, setFaqs] = useState(faqsData);
  return (
      <div>
          {
              faqs.map((faq) => (<Faqs key={faqs.id} {...faq} />))
          }
    </div>
  )
}
