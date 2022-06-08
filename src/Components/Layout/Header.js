import './Header.css';

const Header = () => {
    return (
        <header>
            <a>
                <img src="https://img.icons8.com/material-outlined/48/undefined/old-vmware-logo.png" alt="Icon"/>
            </a>
            <a>
                <h1>React First Build</h1>         
            </a>
            <div className="login">
                <p>Welcome Graeme!</p>
            </div>
        </header>

    );
}

export default Header;