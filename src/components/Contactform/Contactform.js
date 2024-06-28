
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';


// import emailjs from '@emailjs/browser';
import "./Contactform.css"
function Contactform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_no3ww09', 'template_qum5a70', e.target, 'OqxY9gwiZULp6S6v9')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };
  return (
    <div className='contactform' id="contact">
       <h1 className='contactform-header'>contact me</h1>
       <hr />
       <div className="contact-container" data-aos="fade-up"   data-aos-duration="1500">
       <div className="contact-left">
       <form action="" onSubmit={handleSubmit}>
        <div className='contact-name'>
         <input type="text" placeholder="Name*" onChange={handleChange} name='name' value={formData.name} required/>
         <input type="email" placeholder='Email*'onChange={handleChange} name='email'  value={formData.email} required/>
        
        </div>
        <div className="contact-message">
     
        <br />
       <textarea name='message' id="message"  onChange={handleChange} value={formData.message} rows={"8"} placeholder='Message*' required></textarea>
        </div>
        <button className='contact-button' value="Send" type='submit'> Submit</button>
       </form>
       </div>
       <div className="contact-right">
        <div className="contact-right-name-details">
          <h1>Karthick kumar </h1>
          {/* <p>Fullstack webdeveloper</p> */}
          </div>
          <div className="contact-right-phone-details">
            <h3>Phone:</h3>
            <p>+91 8925199544</p>
          </div>
          <div className="contact-right-email-details">
            <h3>Email:</h3>
            <p className='email-para'>karthickkumarchellapandi@gmail.com</p>
            </div>
            {/* <div className="contact-right-github-details">
            <h3>github</h3> */}
            {/* <Link to="https://github.com/Karthickkumarc">github link</Link> */}
            {/* </div>
            <div className="contact-right-linkedin-details">
                <h3>LinkedIn</h3> */}
                {/* <Link to="https://www.linkedin.com/in/karthick-kumar-420a42193">Linked link</Link> */}
                {/* </div> */}
       </div>
       </div>
    </div>
  )
}

export default Contactform
