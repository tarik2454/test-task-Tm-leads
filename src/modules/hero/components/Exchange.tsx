export default function Exchange() {
  return (
    <div className="flex justify-between mb-[63px] relative">
      <div className="custom-dashed-border w-[176px] px-[10px] py-[6px] text-purple">
        <div className="mb-5">
          <p className="text-xl font-medium tracking-minus4">ETH/USDT</p>
          <p className="text-[13px] leading-[1.23]">Short</p>
        </div>
        <p className="text-xl font-medium tracking-minus4">+141%</p>
      </div>

      <div className="w-[176px] px-[10px] py-[6px] bg-purpleBackground rounded-md absolute top-[30px] left-[124px] z-10">
        <div className="mb-5">
          <p className="text-xl font-medium tracking-minus4">ETH/USDT</p>
          <p className="text-[13px] leading-[1.23]">Short</p>
        </div>
        <p className="text-xl font-medium tracking-minus4">+141%</p>
      </div>
    </div>
  );
}
