import Section from '@/shared/components/Section';
import TariffsCard from './components/TariffsCard';
import Container from '@/shared/components/Container';
import SectionTitle from '@/shared/components/SectionTitle';
import Button from '@/shared/components/Button';

export default function Tariffs() {
  const plans = [
    {
      title: 'STANDART',
      price: 234,
      discount: 35,
      duration: '12 месяцев',
      features: [
        'Ручной трейдинг',
        'Автоматическое или полуавтоматическое копирование сделок',
        'Личный кабинет со статистикой',
        'Среднесрочные сделки с уровнями набора портфеля',
      ],
      isHighlighted: false,
    },
    {
      title: 'VIP',
      price: 585,
      discount: 35,
      duration: '12 месяцев',
      features: [
        'Ручной трейдинг',
        'Автоматическое или полуавтоматическое копирование сделок',
        'Личный кабинет со статистикой',
        'Краткосрочные, среднесрочные и инвест сделки',
        'Доступ в VIP-чат с командой',
        'Наш авторский курс по трейдингу',
      ],
      isHighlighted: true,
    },
  ];

  return (
    <Section
      styles={'pt-[181px] pb-[44px] bg-secondaryBackground xl:py-[96px]'}
      id="tariffs"
    >
      <Container>
        <div className="xl:max-w-[846px] mx-auto">
          <SectionTitle styles={'mb-6'}>Тарифы</SectionTitle>

          <div className="flex justify-end w-full mb-6 py-[14px] pr-[47px] bg-purpleBackground rounded-md relative xl:max-w-[413px] xl:mb-[44px]">
            <Button styles="py-[10px] px-[61px] absolute top-1 left-1 tracking-minus4 xl:px-[80px]">
              СПОТ
            </Button>
            <div className="text-lg font-medium leading-[1.1] tracking-minus4 uppercase text-cyan">
              фьючерс
            </div>
          </div>

          <ul className="flex gap-5 flex-col xl:flex xl:flex-row xl:gap-5 xl:items-end">
            {plans.map((plan, index) => (
              <TariffsCard key={index} {...plan} />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
