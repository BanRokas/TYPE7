import { Link } from "react-router-dom";

const Nav = ({data}) => {
  return (
    <div>
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