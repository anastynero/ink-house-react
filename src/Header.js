import './App.css';

function Header() {
  return (
    <div className='header'>
        <header className='page-header'>
            <div className='page-header_wrapper'>
                <div className='page-header_logo'>
                    <a href='#'>
                        <img src=''></img>
                    </a>
                </div>
                <div className='page-header_menu'>
                    <ul className='menu'>
                        <li className='menu-item'>Репродукции</li>
                        <li className='menu-item'>Новинки</li>
                        <li className='menu-item'>О нас</li>
                        <li className='menu-item'></li>
                        </ul>
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;
