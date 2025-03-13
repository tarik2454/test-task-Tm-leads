import useScreenSize from '@/shared/hooks/useMediaQuery';

import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import SectionTitle from '@/shared/components/SectionTitle';
import SendEmail from './components/SendEmail';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

export default function About() {
  const { isOnDesktop } = useScreenSize();

  return (
    <Section
      styles={'pt-[24px] !pb-[133px] relative z-0 xl:pt-[56px] xl:!pb-[92px]'}
      id="about"
    >
      <Container>
        {(isOnDesktop && (
          <div className="absolute left-0 -top-[59px]">
            <SpriteSVG name="whiteLine" />
          </div>
        )) || (
          <div className="absolute left-0 -top-[24px] -z-10">
            <SpriteSVG name="witeLineMobile" />
          </div>
        )}
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
