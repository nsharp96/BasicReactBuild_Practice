import Header from './Header.js'
import Footer from './Footer.js'
import Navbar from './Navbar.js'

import './Layout.css';

const Layout = (props) => {
    return (
        <div className='centerpane'>
            <Header />
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout