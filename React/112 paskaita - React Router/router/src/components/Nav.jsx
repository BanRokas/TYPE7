import { Link } from "react-router-dom";
import '../styles/Nav.css';

const Nav = ({data}) => {
  return (
    <div className="Navigation">
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