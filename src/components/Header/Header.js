import './Header.css';
import logo from '../../img/logo.svg';
import cart from '../../img/cart.png';

function Header() {
  return (
    <div className='header'>
        <header className='page-header'>
            <div className='page-header_wrapper'>
                <div className='page-header_logo'>
                    <a href='#'>
                        <img src={logo}></img>
                    </a>
                </div>
                <div className='page-header_menu'>
                    <ul className='menu'>
                        <li className='menu-item'>Репродукции</li>
                        <li className='menu-item'>Новинки</li>
                        <li className='menu-item'>О нас</li>
                        <li className='menu-item'><a href='#'><img src={cart}></img></a></li>
                        </ul>
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;
