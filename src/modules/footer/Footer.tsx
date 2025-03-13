import scrollToSection from '@/shared/utilitis/scrollToSection';

import { menuItems } from '@/const/menuItems';

import Container from '@/shared/components/Container';
import Logo from '../../assets/img/logo.png';

export default function Footer() {
  return (
    <footer className="pt-10 bg-secondaryBackground">
      <Container>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-[30%_70%] gap-[74px] mb-[57px]">
            <h4 className="text-sm opacity-40">Быстрая навигация</h4>
            <nav className="max-w-[70%]">
              <ul className="flex flex-col gap-4">
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

          <div className="w-full h-[1px] mb-[5] bg-primaryBackground opacity-30"></div>

          <div className="flex flex-col">
            <img
              src={Logo}
              alt="Логотип"
              className="w-[165px] h-auto mb-[81px]"
            />
            <p className="mb-[25px] text-sm text-gray-400 ">
              © 2025 Все права защищены
            </p>

            <div className="w-full h-[5px] bg-purpleBackground"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
