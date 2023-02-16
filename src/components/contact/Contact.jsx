import './contact.scss'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="container">
                <div className="left">
                    <img src="assets/shake.svg" alt="" />
                </div>
                <div className="right">
                    <h2>Contact</h2>
                    <form>
                        <input type="text" placeholder='Email' />
                        <textarea placeholder='Message'></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;