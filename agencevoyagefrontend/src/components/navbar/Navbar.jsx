import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  let brand = "Simplon Voyages";
  return (
    <>
      <div
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <a className="navbar-brand ms-3" href="/">
          {brand}
        </a>
        <nav>
          <ul className="navigation navbar-nav d-flex flex-row me-3">
            <li>
              <Link className="nav-link" href="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/voyages">
                Voyages
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
