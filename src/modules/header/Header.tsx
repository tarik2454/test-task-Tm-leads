import { useEffect, useState } from 'react';

import useScreenSize from '@/shared/hooks/useMediaQuery';
import scrollToSection from '@/shared/utilitis/scrollToSection';

import { menuItems } from '@/const/menuItems';

import { SpriteSVG } from '@/assets/img/SpriteSVG';
import Container from '@/shared/components/Container';
import logo from '@/assets/img/logoHeader.png';
import MobileMenu from './components/MobileMenu';
import Button from '@/shared/components/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { isOnDesktop } = useScreenSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header className="bg-secondaryBackground xl:py-[2px]">
      <Container>
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="Logo"
            width={(isOnDesktop && 132) || 107}
            height={(isOnDesktop && 64) || 52}
          />

          {(isOnDesktop && (
            <>
              <nav>
                <ul className="flex gap-[32px] font-medium text-sm leading-[1.21] opacity-80">
                  {menuItems.map(item => (
                    <li key={item.id}>
                      <a
                        href={`#${item.link}`}
                        className="relative inline-flex items-center group"
                        onClick={e => {
                          e.preventDefault();
                          scrollToSection(item.link);
                        }}
                      >
                        <span className="relative after:block after:w-0 after:h-[2px] after:bg-current after:transition-all group-hover:after:w-full">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex gap-3">
                <Button styles="py-[11px] px-[24px] text-cyan bg-[rgba(87,225,255,0.2)] border border-cyan">
                  ВОЙТИ
                </Button>
                <Button styles="w-full py-[11px] px-[24px]">РЕГИСТРАЦИЯ</Button>
              </div>
            </>
          )) || (
            <button onClick={toggleMenu}>
              <SpriteSVG name={'burgerButton'} width={'32'} height={'32'} />
            </button>
          )}
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
}
