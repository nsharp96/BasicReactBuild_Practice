import './Navbar.css'

const Navbar = () => {
    return (
        <nav>

            <div className='navItem'>
                <a href='/'>Home</a>
            </div>

            <div className='navItem'>
                <a href='/signin'>Sign In</a>
            </div>

            <div className='navItem'>
                <a href='/contact'>Contact us</a>
            </div>
        </nav>
    );
}

export default Navbar;