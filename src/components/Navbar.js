import "../Styles/Navbar.css";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Nature's Wrath</h1>
      <div className="links">
        <a href="/NW1/#Home">Home</a>
        <a href="/NW1/#Types">Types of Disasters</a>            
        <a href="/NW1/#Major">Major Disasters</a>
        <a href="/NW1/#InfoDisc">Information Disclaimer</a>
          
      </div>
    </nav>

  );
}
 
export default Navbar;