import { useState } from 'react';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import Button from '@/shared/components/Button';

interface PricingCardProps {
  title: string;
  basePrice: number;
  discount: number;
  durationOptions: { label: string; months: number; multiplier: number }[];
  features: string[];
  isHighlighted?: boolean;
}

export default function TariffsCard({
  title,
  basePrice,
  discount,
  durationOptions,
  features,
  isHighlighted = false,
}: PricingCardProps) {
  const defaultDuration =
    durationOptions.find(opt => opt.months === 12) || durationOptions[0];
  const [selectedDuration, setSelectedDuration] = useState(defaultDuration);
  const [isOpen, setIsOpen] = useState(false);

  const finalPrice = Math.round(basePrice * selectedDuration.multiplier);

  return (
    <li
      className={`p-4 rounded-lg xl:min-h-[556px] ${
        isHighlighted
          ? 'bg-purpleBackground'
          : 'bg-secondaryBackground border-purple border'
      }`}
    >
      <div className="xl:flex xl:flex-col xl:justify-between xl:h-full">
        <div>
          <h3 className="mb-6 text-xl font-medium tracking-minus4">{title}</h3>

          <ul className="space-y-2 mb-6 text-sm opacity-80 xl:text-base">
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
        </div>

        <div>
          <div className="flex justify-between items-center w-full mb-6">
            <div className="text-4xl font-medium leading-[1.14] tracking-minus4 relative">
              ${finalPrice}
              <span className="text-lg leading-[1.11] text-green absolute left-[84px]">
                -{discount}%
              </span>
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-2 py-[6px] pl-2 pr-[5px] text-primaryText bg-primaryBackground bg-opacity-20 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedDuration.label}
                <span className="text-gray-600">
                  <div className={`${isOpen ? 'rotate-180' : ''}`}>
                    <SpriteSVG name="pointer" />
                  </div>
                </span>
              </button>

              {isOpen && (
                <ul className="absolute right-0 bottom-full mb-1 w-40 bg-primaryBackground bg-opacity-40 rounded-md z-10">
                  {durationOptions.map(option => (
                    <li
                      key={option.months}
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedDuration(option);
                        setIsOpen(false);
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <Button styles="w-full py-2 ">
            ПОПРОБОВАТЬ
            <div className="text-[12px] font-normal leading-[1.33] normal-case opacity-[0.56]">
              5 дней бесплатно
            </div>
          </Button>
        </div>
      </div>
    </li>
  );
}
