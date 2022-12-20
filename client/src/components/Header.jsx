import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header">

                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <img className="logo" src={require('../assets/icons/shop.png')}/>
                </Link>

                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="shop">
                        <div className="lecimy-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" enableBackground="new 0 0 16 16">
                                <path d="M0,9l4,1.5L6,16l2.861-3.82L14,14l2-14L0,9z M7.169,11.44l-0.916,2.485l-1.086-3.118l8.402-7.631L7.169,11.44z"/>
                            </svg>
                        </div>
                        <div className="shop-text"><span>Produkty</span></div>
                    </div>
                </Link>

                <div className="navbar">
                    <Link to={'/'} style={{ textDecoration: 'none' }}><div className="navbar-item loty"><span>beta</span></div></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;