import useScreenSize from '@/shared/hooks/useMediaQuery';

import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import Exchange from './components/Exchange';
import Input from '@/shared/components/Input';
import Button from '@/shared/components/Button';
import price from '@/assets/img/price.png';

export default function Hero() {
  const { isOnDesktop } = useScreenSize();

  return (
    <Section
      styles="pt-10 pb-[61px] bg-secondaryBackground
    xl:pt-[160px] xl:pb-[194px]"
    >
      <Container>
        <div className="xl:flex xl:flex-row-reverse xl:justify-end xl:items-start xl:gap-[104px]">
          {(isOnDesktop && <img src={price} alt="Price" />) || <Exchange />}

          <div className="xl:w-[50%]">
            <h1
              className="mb-3 font-bold text-4xl uppercase tracking-minus4
            xl:text-[60px]"
            >
              моментально Копируй сделки профи трейдеров
            </h1>
            <h2 className="mb-6 text-blue-100 xl:max-w-[565px]">
              Начни копировать сделки с успешной командой профессиональных
              трейдеров в автоматическом режиме.
            </h2>

            <div className="relative">
              <Input
                style={'mb-3 xl:max-w-[500px]'}
                placeholder={'Ваш e–mail'}
              />
              <Button
                styles={
                  'py-[11px] absolute top-1 right-1 xl:py-4 xl:px-6 top-[5px] xl:right-[144px]'
                }
                type={'submit'}
              >
                начать
              </Button>
            </div>

            <p className="text-sm opacity-30">5 дней бесплатного пользования</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
