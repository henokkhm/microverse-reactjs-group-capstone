import Navbar from './Navbar';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Space Travelers' Hub logo" />
        <h1>Space Travelers&#39; Hub</h1>
      </div>
      <Navbar />
    </header>
  );
}
export default Header;
