import React from 'react'
import "./About.css"
import profile_pic from "../assets/profile-pic.jpg"
function About() {
  return (
    <div className='about' id="about">
      <h1 className='about-header'>About me</h1>

      <div className='about-content'  data-aos="fade-up"   data-aos-duration="1500">
        <div className='about-left'>
          <h3 className='about-left-header'>I am a Professional FullStack Developer</h3>
          <p className='about-left-content'>
            Motivated and detail-oriented recent graduate specializing in Java Full Stack Development. Skilled in building Scalable and high-performance web applications with a solid understanding of both front-end and back-end development.
          </p>
          <div className='about-contact'>
            <div className="phone-number">
              <h1>phone</h1>
              <p>8925199544</p>
            </div>
            <div className="gmail">
              <h1>gmail</h1>
              <p>karthickkumarchellapandi@gmail.com</p>
            </div>
        </div>
        </div>
        <div className='about-right'>
          <img src={profile_pic} className='about-left-img' alt="" />
        </div>
      </div>

    </div>
  )
}

export default About
