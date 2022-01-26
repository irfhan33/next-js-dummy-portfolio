import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
  const navs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className="nav">
      <div className="container">
        <Link href="/">
          <a className="nav__logo">Irfan</a>
        </Link>
        <ul className="nav__links">
          {navs.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.href}>
                <a
                  className={`nav__item ${
                    router.pathname === nav.href ? "active" : ""
                  }`}
                >
                  {nav.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
