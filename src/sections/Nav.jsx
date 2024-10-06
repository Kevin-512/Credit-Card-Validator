import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-16 py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center container mx-auto ">
        <a href="/">
          <div className="flex flex-row gap-2 items-center">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-yellow-700 bg-clip-text text-transparent">
              CardSmart
            </h2>
          </div>
        </a>

        <ul className="flex justify-center items-center gap-16 px-8 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-relaxed text-xl font-semibold text-forest-green hover:underline hover:underline-offset-2 hover:decoration-yellow-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
