import { Link } from "react-router-dom";
import '../styles/Nav.css';

const Nav = ({ data, place }) => {
  return (
    <div className={
      place == "top" ? "NavigationTop" :
      place == "side" ? "NavigationSide" : "NavigationDefault"
    }>
      {
        data.map((link, i) =>
          <Link
            key={i}
            to={link.link}
          >
            {link.title}
          </Link>
        )
      }
    </div>
  );
}

export default Nav;