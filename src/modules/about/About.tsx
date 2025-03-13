import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import SectionTitle from '@/shared/components/SectionTitle';
import SendEmail from './components/SendEmail';

export default function About() {
  return (
    <Section
      styles={'pt-[48px] !pb-[132px] relative xl:pt-[116px] xl:!pb-[92px]'}
      id="about"
    >
      <Container>
        <SectionTitle styles={'mb-5 !text-secondaryText xl:mb-10'}>
          О компании
        </SectionTitle>

        <div className="xl:grid xl:grid-cols-[30%_700%]">
          <p className="text-black-100 opacity-80">
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance. Он
            представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>

          <SendEmail />
        </div>
      </Container>
    </Section>
  );
}
