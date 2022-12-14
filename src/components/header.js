import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="homeHeader">
    <div className="headerTitle">
      <h1> Math Magician  </h1>
    </div>
    <div className="headerMenu">
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/calculate">Calculator</Link></li>
        <li><Link className="link" to="/quote">Quote</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
