import { SpriteSVG } from '@/assets/img/SpriteSVG';
import Button from '@/shared/components/Button';

interface PricingCardProps {
  title: string;
  price: number;
  discount: number;
  duration: string;
  features: string[];
  isHighlighted?: boolean;
}

export default function TariffsCard({
  title,
  price,
  discount,
  duration,
  features,
  isHighlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`p-4 rounded-lg  ${
        isHighlighted
          ? 'bg-purpleBackground'
          : 'bg-secondaryBackground border-purple border'
      }`}
    >
      <h3 className="mb-6 text-xl font-medium tracking-minus4">{title}</h3>

      <ul className="space-y-2 mb-6 text-sm opacity-80">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 pb-2 border-b-[1px] border-white border-dashed border-opacity-20"
          >
            <SpriteSVG name={'yes'} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center w-full mb-6">
        <div className="text-4xl font-medium leading-[1.14] tracking-minus4 relative">
          ${price}
          <span className="text-lg leading-[1.11] text-green absolute left-[84px]">
            -{discount}%
          </span>
        </div>
        <p>{duration}</p>
      </div>

      <Button styles="w-full py-2">
        ПОПРОБОВАТЬ
        <div className="text-[12px] font-normal leading-[1.33] normal-case opacity-[0.56]">
          5 дней бесплатно
        </div>
      </Button>
    </div>
  );
}
