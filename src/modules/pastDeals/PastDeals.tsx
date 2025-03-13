import Section from '@/shared/components/Section';
import Slider from './components/Slider';
import SectionTitle from '@/shared/components/SectionTitle';

export default function PastDeals() {
  return (
    <Section
      styles="pt-[48px] pb-[75px] bg-secondaryBackground xl:pt-[96px] xl:pb-[148px]"
      id="deals"
    >
      <div className="container mx-auto h-full pl-4 xl:pl-20">
        <SectionTitle>Прошедшие сделки</SectionTitle>
        <p className="flex items-center gap-[6px] mb-6 text-sm tracking-minus4 text-green xl:mb-[72px]">
          <span className="w-[7px] h-[7px] bg-green rounded-full"></span>
          Онлайн
        </p>

        <Slider />
      </div>
    </Section>
  );
}
