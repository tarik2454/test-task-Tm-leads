import scrollToSection from '@/shared/utilitis/scrollToSection';

import { menuItems } from '@/shared/data/menuItems';

import Container from '@/shared/components/Container';
import logo_m from '../../assets/img/logo_m.png';

export default function Footer() {
  return (
    <footer className="pt-10 pb-[25px] bg-secondaryBackground relative xl:pt-[28px] xl:pb-[45px] ">
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

          <div className="w-full h-[1px] mb-[5] bg-primaryBackground opacity-30 xl:rotate-90 xl:min-w-[274px] xl:w-1 xl:mt-[108px]"></div>

          <div className="flex flex-col xl:justify-between xl:h-full">
            <img
              src={logo_m}
              alt="Logo"
              className="w-[165px] h-auto mb-[81px]"
            />
            <p className="text-sm text-gray-400 flex xl:mb-0">
              © 2025 Все права защищены
            </p>

            <div className="w-full h-[5px] bg-purpleBackground absolute left-0 bottom-0"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
