import scrollToSection from '@/shared/utilitis/scrollToSection';

import { menuItems } from '@/shared/data/menuItems';

import Container from '@/shared/components/Container';
import Logo from '../../assets/img/logo.png';

export default function Footer() {
  return (
    <footer className="pt-10 bg-secondaryBackground relative xl:min-h-[348px] xl:pt-[44px] xl:pb-[45px] ">
      <Container>
        <div className="flex flex-col justify-between xl:flex-row ">
          <div
            className="grid grid-cols-[30%_70%] gap-[74px] mb-[57px]
          xl:flex xl:flex-col xl:justify-between xl:mb-0"
          >
            <h4 className="text-sm opacity-40">Быстрая навигация</h4>
            <nav className="max-w-[70%] xl:max-w-full">
              <ul className="flex flex-col gap-4 xl:flex-row">
                {menuItems.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.link}`}
                      className="font-medium opacity-67"
                      onClick={e => {
                        e.preventDefault();
                        scrollToSection(item.link);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="w-full h-[1px] mb-[5] bg-primaryBackground opacity-30 xl:rotate-90 xl:min-w-[348px] xl:w-1 xl:mt-[126px]"></div>

          <div className="flex flex-col xl:justify-between xl:h-full">
            <img
              src={Logo}
              alt="Логотип"
              className="w-[165px] h-auto mb-[81px]"
            />
            <p className="mb-[25px] text-sm text-gray-400 flex">
              © 2025 Все права защищены
            </p>

            <div className="w-full h-[5px] bg-purpleBackground absolute left-0 bottom-0"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
