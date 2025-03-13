import useScreenSize from '@/shared/hooks/useMediaQuery';

import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import SectionTitle from '@/shared/components/SectionTitle';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

export default function Figures() {
  const { isOnDesktop } = useScreenSize();

  return (
    <Section
      styles={'py-0 pt-[24px] pb-[48px] xl:pt-[56px] xl:pb-[61px] relative z-0'}
      id="numbers"
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

        <div className="xl:flex xl:items-center">
          <div className="mr-[156px]">
            <SectionTitle styles={'-mt-4 !text-secondaryText xl:mb-0 '}>
              Цифры
            </SectionTitle>
            <p className="mb-10 text-sm text-secondaryText tracking-minus4 opacity-50 xl:mb-0">
              Сентябрь 2022
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-8 xl:flex xl:gap-[129px]">
            <div>
              <p className="mb-1 text-sm text-secondaryText uppercase">
                {isOnDesktop ? (
                  'ТОРГОВОЙ ПРИБЫЛИ'
                ) : (
                  <>
                    ТОРГОВОЙ <br /> ПРИБЫЛИ
                  </>
                )}
              </p>
              <p className="text-4xl font-medium text-purple uppercase">
                2756%
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-secondaryText uppercase">
                {isOnDesktop ? (
                  'ФЬЮЧЕРСНЫХ И СПОТОВЫХ СДЕЛОК'
                ) : (
                  <>
                    ФЬЮЧЕРСНЫХ <br /> И СПОТОВЫХ СДЕЛОК
                  </>
                )}
              </p>
              <p className="text-4xl font-medium text-purple uppercase">67</p>
            </div>

            <div>
              <p className="mb-1 text-sm text-secondaryText uppercase">
                ПРИБЫЛЬ ПОДПИСЧИКОВ
              </p>
              <p className="text-4xl font-medium text-purple uppercase">
                375000
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
