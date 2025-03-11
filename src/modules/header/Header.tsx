import { useEffect, useState } from 'react';

import { SpriteSVG } from '@/assets/img/SpriteSVG';
import Container from '@/shared/components/Container';
import logo from '@/assets/img/logo.png';
import MobileMenu from './components/MobileMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="bg-secondaryBackground">
      <Container>
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" width={107} height={52} />

          <button onClick={toggleMenu}>
            <SpriteSVG name={'burgerButton'} width={'32'} height={'32'} />
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
}
