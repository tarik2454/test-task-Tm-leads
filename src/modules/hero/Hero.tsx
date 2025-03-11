import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import Exchange from './components/Exchange';
import Input from '@/shared/components/Input';
import Button from '@/shared/components/Button';

export default function Hero() {
  return (
    <Section styles="pt-10 pb-[37px] bg-secondaryBackground">
      <Container>
        <Exchange />

        <h1 className="mb-3 font-bold text-4xl uppercase tracking-minus4">
          моментально Копируй сделки профи трейдеров
        </h1>
        <h2 className="mb-6 text-blue-100">
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </h2>

        <div className="relative">
          <Input style={'mb-3'} placeholder={'Ваш e–mail'} />
          <Button styles={'py-[11px] absolute top-1 right-1'} type={'submit'}>
            начать
          </Button>
        </div>

        <p className="text-sm opacity-30">5 дней бесплатного пользования</p>
      </Container>
    </Section>
  );
}
