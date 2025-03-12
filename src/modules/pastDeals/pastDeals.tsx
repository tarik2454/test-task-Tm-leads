import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import Slider from './components/Slider';
import SectionTitle from '@/shared/components/SectionTitle';

export default function PastDeals() {
  return (
    <Section styles="pt-[48px] mb-[75px] bg-secondaryBackground ">
      <Container>
        <SectionTitle>Прошедшие сделки</SectionTitle>
        <p className="flex items-center gap-[6px] mb-6 text-sm tracking-minus4 text-green">
          <span className="w-[7px] h-[7px] bg-green rounded-full"></span>
          Онлайн
        </p>

        <Slider />
      </Container>
    </Section>
  );
}
