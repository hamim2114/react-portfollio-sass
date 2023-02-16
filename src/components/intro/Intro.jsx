import './intro.scss'
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="https://purepng.com/public/uploads/large/purepng.com-childrenchildrenkidshuman-childchildhappy-kidsklds-1421526966283k9tm5.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Hamim Arfat</h1>
                    <h3>
                        Freelance{' '}
                        <Typewriter
                        typeSpeed={50}
                        deleteSpeed={4}
                        words={["Developer.", "Designer.", "Content creator."]}
                        loop={0}
                        cursorBlinking={true}
                        />
                    </h3>
                </div>
                <a href="#portfolio">
                <i class='bx bx-chevron-down'></i>
                </a>
            </div>
        </div>
    );
};

export default Intro;