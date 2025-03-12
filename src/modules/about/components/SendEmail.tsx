import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';

export default function SendEmail() {
  return (
    <form className="w-[356px] p-4 bg-purpleBackground rounded-md absolute -bottom-[123px] left-1/2 translate-x-[-50%]">
      <p className="mb-5 text-xl text-center tracking-minus4">
        Попробуйте сейчас и получите <br /> 5 дней бесплатного пользования
      </p>
      <Input
        style={'mb-2 bg-[#000000] opacity-30'}
        placeholder={'Ваш e-mail'}
      />
      <Button styles={'w-full'} type={'submit'}>
        Попробовать
      </Button>
    </form>
  );
}
