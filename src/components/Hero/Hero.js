import React from 'react'
import "./Hero.css"
import { ReactTyped } from "react-typed";
import resume from "../assets/KarthickC.pdf";

function Hero() {
  const handleCall = (event) => {
    event.preventDefault();
    window.location.href = `tel:${+918925199544}`;
  };
 
  return (
<section className="hero" data-aos="fade-up"   data-aos-duration="1000">
       
      <h1>Hi <span>,</span>  i Am</h1>
      <h1>Karthick kumar c</h1>
      <ReactTyped className='react-typed'
                        strings={[
                            "Web Developer",
                            " Java fullstack developer",

                        ]}
                        typeSpeed={40}
                        backSpeed={50}

                    />
                   <br />
                   <div className="hero-social-media-icon">
                  

                   <a href="https://github.com/Karthickkumarc"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/karthickkumar1845"> <i class="fa-brands fa-linkedin"></i></a> 
                    <a href="mailto:karthickkumarchellapandi@gmail.com"><i class="fa-solid fa-envelope"></i></a>           

                    <a href={`tel:${+918925199544}`} onClick={handleCall}><i class="fa-solid fa-phone"></i></a>


                   </div>
                    <button className='hero-resume'>  <a href={resume} download={"Resume"}>Download Resume</a></button>
               
     
    </section>

   
  )
}

export default Hero
