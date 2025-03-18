import Section from '@/shared/components/Section';
import TariffsCard from './components/TariffsCard';
import Container from '@/shared/components/Container';
import SectionTitle from '@/shared/components/SectionTitle';
import Button from '@/shared/components/Button';

import plans from './data/plans';

export default function Tariffs() {
  return (
    <Section
      styles={'pt-[181px] pb-[44px] bg-secondaryBackground xl:py-[96px]'}
      id="tariffs"
    >
      <Container>
        <div className="xl:max-w-[846px] mx-auto">
          <SectionTitle styles={'mb-6'}>Тарифы</SectionTitle>

          <div className="flex justify-end w-full mb-6 py-3 pr-[47px] bg-purpleBackground rounded-md relative max-w-[362px] xl:mb-[44px]">
            <Button styles="py-[10px] px-[61px] absolute top-[2px] left-[2px] tracking-minus4 md:py-[8px] md:px-[70px] md:top-1 md:left-1">
              СПОТ
            </Button>
            <div className="text-lg font-medium leading-[1.1] tracking-minus4 uppercase text-cyan">
              фьючерс
            </div>
          </div>

          <ul className="flex gap-5 flex-col md:flex-row ">
            {plans.map((plan, index) => (
              <TariffsCard key={index} {...plan} />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
