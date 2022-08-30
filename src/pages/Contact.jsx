import './Contact.css';
const Contact =()=>{
    return(
        <div className="container">
            <div className="container__map" >

            </div>
            <div className="container__form">
                <div>ONEPAGE WEBSITE</div>
                <h2>Send us a Message</h2>
                <input className='input' value='Your Name'></input>
                <input className='input' value='Your Email'></input>
                <input className='input' value='Your Subject'></input>
                <input className='input' value='Your Message'></input>
                <button>button</button>
            </div>
        </div>
    )
}

export default Contact;
