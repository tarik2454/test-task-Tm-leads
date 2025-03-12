import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import SectionTitle from '@/shared/components/SectionTitle';
import SendEmail from './components/SendEmail';

export default function About() {
  return (
    <Section styles={'pt-[48px] !pb-[132px] relative'}>
      <Container>
        <SectionTitle styles={'mb-5 !text-secondaryText'}>
          Прошедшие сделки
        </SectionTitle>
        <p className="text-black-100 opacity-80">
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance. Он
          представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>

        <SendEmail />
      </Container>
    </Section>
  );
}
