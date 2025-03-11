import { menuItems } from '@/const/menuItems';

export default function NavBar() {
  return (
    <nav className="flex flex-col gap-4 mt-6 text-lg font-semibold">
      {menuItems.map(item => (
        <a key={item.id} href={item.link} className="hover:underline">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
