import Container from '@/shared/components/Container';
import Section from '@/shared/components/Section';
import SectionTitle from '@/shared/components/SectionTitle';

export default function Figures() {
  return (
    <Section styles={'py-[48px]'}>
      <Container>
        <SectionTitle styles={'!text-secondaryText'}>Цифры</SectionTitle>
        <p className="mb-10 text-sm text-secondaryText tracking-minus4 opacity-50">
          Сентябрь 2022
        </p>

        <div className="grid grid-cols-2 gap-y-8">
          <div>
            <p className="mb-1 text-sm text-secondaryText uppercase">
              ТОРГОВОЙ <br /> ПРИБЫЛИ
            </p>
            <p className="text-4xl font-medium text-purple uppercase">2756%</p>
          </div>

          <div>
            <p className="mb-1 text-sm text-secondaryText uppercase">
              ФЬЮЧЕРСНЫХ <br /> И СПОТОВЫХ СДЕЛОК
            </p>
            <p className="text-4xl font-medium text-purple uppercase">67</p>
          </div>

          <div>
            <p className="mb-1 text-sm text-secondaryText uppercase">
              ПРИБЫЛЬ ПОДПИСЧИКОВ
            </p>
            <p className="text-4xl font-medium text-purple uppercase">375000</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
