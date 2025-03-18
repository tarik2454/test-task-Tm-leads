import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import SectionTitle from '@/shared/components/SectionTitle';

import { useState } from 'react';

import faqData from './data/faqData';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

export default function FrequentQuestions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section styles="pt-[56px] mb-[54px]">
      <Container>
        <div className="xl:max-w-[846px] xl:mx-auto">
          <SectionTitle styles={'mb-10 text-title !text-secondaryText'}>
            Часто задаваемые вопросы
          </SectionTitle>

          <div className="w-full max-w-lg mx-auto space-y-2 xl:max-w-[846px]">
            {faqData.map((item, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center -mb-[1px] p-4 pb-3 text-xl font-medium text-left tracking-minus4 xl:text-2xl transition-colors duration-250 ease-in ${
                    activeIndex === index
                      ? ' bg-purpleBackground'
                      : 'text-black-100 bg-gray'
                  }`}
                >
                  {item.title}
                  {activeIndex === index ? (
                    <SpriteSVG name={'chevronUp'} />
                  ) : (
                    <SpriteSVG name={'chevronDown'} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-250 ease-in ${
                    activeIndex === index
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-10'
                  }`}
                >
                  <div className="p-4 pt-0 bg-purpleBackground text-white text-opacity-80">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
