import React from 'react'
import "./Certificate.css";
import react_certficate from "../assets/Screenshot 2024-06-18 213726.png"
import css_certificate from "../assets/Screenshot 2024-06-18 213706.png";
import java_Hackerank_certificate from "../assets/Screenshot 2024-06-18 213743.png";
import java_besant_certificate from "../assets/Screenshot 2024-06-18 213838.png"

function Certificate() {
  return (
    <div className='certificate' id="certificate">
        <h2 className='certificate-header'> certificates</h2>
        <div className='certificate-pic'>
      <img src={java_Hackerank_certificate} alt="hackaerrank-certificate"  data-aos="fade-up"
     data-aos-duration="3000"/>
      <img src={react_certficate} alt="react_certificate"data-aos="fade-up"
     data-aos-duration="3000" />
      <img src={css_certificate} alt="css_certificate" data-aos="fade-up"
     data-aos-duration="3000"/>
      <img src={java_besant_certificate} alt="besant_technology" data-aos="fade-up"
     data-aos-duration="3000"/>
    </div>
    </div>
  )
}

export default Certificate
