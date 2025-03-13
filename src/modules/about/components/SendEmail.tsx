import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';

export default function SendEmail() {
  return (
    <form
      className="w-[356px] p-4 bg-purpleBackground rounded-md absolute -bottom-[123px] left-1/2 translate-x-[-50%]
    xl:min-w-[631px] xl:py-[32px] xl:px-[64px] xl:right-[79px] xl:bottom-[90px] xl:left-auto xl:translate-x-0"
    >
      <p className="mb-5 text-xl text-center tracking-minus4 xl:mb-[32px] xl:text-title xl:font-medium">
        Попробуйте сейчас и получите <br /> 5 дней бесплатного пользования
      </p>

      <div className="relative">
        <Input
          style={'mb-2 bg-[#000000] opacity-30'}
          placeholder={'Ваш e-mail'}
        />
        <Button
          styles={
            'w-full xl:w-auto xl:px-6 xl:absolute xl:top-[5px] xl:right-1'
          }
          type={'submit'}
        >
          Попробовать
        </Button>
      </div>
    </form>
  );
}
