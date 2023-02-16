import { useState } from 'react';
import { slideData } from '../../data/data';
import './works.scss';

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide( currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < slideData.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className='works' id='works'>
            <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {slideData.map((d) => (
                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={d.icon} alt=''/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={d.img} alt=''/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <span onClick={() => handleClick('left')} className='arrow left'>
                <i class='bx bx-chevron-left'></i>
            </span>
            <span onClick={() => handleClick('')} className='arrow right'>
                <i class='bx bx-chevron-right'></i>
            </span>
        </div>
    );
};

export default Works;
