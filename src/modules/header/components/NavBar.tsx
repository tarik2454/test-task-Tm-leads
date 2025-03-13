import scrollToSection from '@/shared/utilitis/scrollToSection';

import { menuItems } from '@/const/menuItems';

export default function NavBar({ closeMenu }: { closeMenu: () => void }) {
  return (
    <nav>
      <ul className="flex flex-col gap-[32px] font-medium text-2xl opacity-80">
        {menuItems.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.link}`}
              className="relative inline-flex items-center group"
              onClick={e => {
                e.preventDefault();
                closeMenu();
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
  );
}
