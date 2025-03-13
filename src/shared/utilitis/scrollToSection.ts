const scrollToSection = (id: string, closeMenu?: () => void) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    if (closeMenu) closeMenu();
  }
};

export default scrollToSection;
