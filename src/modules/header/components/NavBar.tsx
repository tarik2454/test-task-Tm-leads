import { menuItems } from '@/const/menuItems';

export default function NavBar({ closeMenu }: { closeMenu: () => void }) {
  return (
    <nav className="flex flex-col gap-[32px] font-medium text-2xl opacity-80">
      {menuItems.map(item => (
        <a
          key={item.id}
          href={item.link}
          className="relative inline-flex items-center group"
          onClick={closeMenu}
        >
          <span className="relative after:block after:w-0 after:h-[2px] after:bg-current after:transition-all group-hover:after:w-full">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
