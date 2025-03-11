import NavBar from './NavBar';

export default function MobileMenu({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) {
  return (
    <>
      {isOpen && (
        <>
          <button onClick={closeMenu} className="self-end">
            +
          </button>
          <div></div>
          <NavBar />
          <div className="mt-auto flex gap-2">
            <button className="bg-blue-300 text-black w-full">
              РЕГИСТРАЦИЯ
            </button>
            <button className="border-blue-300 text-blue-300 w-full">
              ВОЙТИ
            </button>
          </div>
        </>
      )}
    </>
  );
}
