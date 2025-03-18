import { SpriteSVG } from '@/assets/img/SpriteSVG';
import { twMerge } from 'tailwind-merge';

import Container from '@/shared/components/Container';
import Button from '@/shared/components/Button';
import NavBar from './NavBar';

export default function MobileMenu({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) {
  return (
    <div
      className={twMerge(
        `pt-[84px] pb-4 fixed top-0 right-0 transition-all bg-purpleBackground ${
          isOpen ? 'w-full h-full z-50' : 'translate-x-full w-full h-full z-50'
        }`
      )}
    >
      <Container>
        <div className="h-full relative">
          <button
            className="absolute top-[-74px] right-[-6px] md:right-[-8px] z-10"
            onClick={closeMenu}
          >
            <SpriteSVG name={'closeButton'} />
          </button>

          <div className="flex flex-col flex-1 justify-between h-full">
            <NavBar closeMenu={closeMenu} />

            <div className="grid grid-cols-2 gap-4">
              <Button styles="w-full">РЕГИСТРАЦИЯ</Button>
              <Button styles="w-full text-cyan bg-[rgba(87,225,255,0.2)] border border-cyan">
                ВОЙТИ
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
