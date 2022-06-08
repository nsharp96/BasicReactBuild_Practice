import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Link to="/" >
                <img src="https://img.icons8.com/material-outlined/48/undefined/old-vmware-logo.png" alt="Icon"/>
            </Link>
            <Link to=''>
                <h1>React First Build</h1>         
            </Link>
            <div className="login">
                <p>Welcome Natalie!</p>
            </div>
        </header>

    );
}

export default Header;