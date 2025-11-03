import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="tags" smooth={true} duration={500}>
            Tags
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="inspiration" smooth={true} duration={500}>
            Inspiration
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
