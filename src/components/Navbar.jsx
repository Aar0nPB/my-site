import { Link } from "react-scroll";
import reactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md px-6 py-3 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={reactLogo}
            alt="React Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-[var(--color-secondary)] text-xl font-bold tracking-wide">
            Aaron Pang
          </span>
        </div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="tags"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              Tags
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="inspiration"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              Inspiration
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
