import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';

export default function Hero() {
  return (
    <Section styles="pt-10 pb-[37px] bg-secondaryBackground">
      <Container>
        <h1 className="mb-3 font-bold text-4xl uppercase tracking-[-0.04em]">
          моментально Копируй сделки профи трейдеров
        </h1>
        <h2 className="mb-6 text-blue">
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </h2>
        <p className="text-sm opacity-30">5 дней бесплатного пользования</p>
      </Container>
    </Section>
  );
}
