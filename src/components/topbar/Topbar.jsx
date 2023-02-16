import { useEffect } from 'react';
import './topbar.scss'

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={`topbar animate__animated animate__slideInDown ${menuOpen && 'active'} `}>
            <div className="wraper ">
                <div className="left">
                    <a href="#intro">Logo.</a>
                    <div className="itemContainer">
                        <i class='bx bx-user icon' ></i>
                        <span>+66 6765 6732 76</span>
                    </div>
                    <div className="itemContainer">
                        <i class='bx bx-envelope icon'></i>
                        <span>usermail@mail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="humberMenu" onClick={() => setMenuOpen(prev => !prev)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;