import { SpriteSVG } from '@/assets/img/SpriteSVG';

export default function Card() {
  return (
    <div className="relative w-[299px] h-[208px] bg-purpleBackground p-4 pb-[13px] rounded-md">
      <div className="skewed"></div>
      <div className="absolute top-2 left-[188px]">
        <SpriteSVG name={'triangle'} />
      </div>

      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="mb-[2px] text-xl font-medium tracking-minus4">
            NEAR/USDT
          </h2>
          <p className="text-sm leading-[1.29] tracking-minus2 opacity-40">
            SPOT · 1 мин. назад
          </p>
        </div>

        <div>
          <p className="mb-[2px] text-sm leading-[1.29] tracking-minus2 uppercase opacity-70 ">
            ПРИБЫЛЬ
          </p>
          <p className="flex flex-top mb-[9px] text-title font-medium tracking-minus2 text-green">
            58.6206%<span className="mt-[1px] text-2xl">↑</span>
          </p>
          <div className="flex justify-between text-sm leading-[1.29] tracking-minus2">
            <p className="font-medium opacity-70">Цель 4</p>
            <p className="opacity-40">Дата входа 06.10.2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
