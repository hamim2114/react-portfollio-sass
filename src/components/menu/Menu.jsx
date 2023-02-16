import { useEffect } from 'react';
import './menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
    useEffect(()=> {
        setTimeout(()=> {
            setMenuOpen(false)
        },1000)
},[])
    return (
        <div className={`menu animate__animated animate__slideInRight ${menuOpen && 'active'}`}>
            <ul onClick={()=> setMenuOpen(false)}>
                <li><a href="#intro">Intro</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>    
            </ul>
        </div>
    );
};

export default Menu;