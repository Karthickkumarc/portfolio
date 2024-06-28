import React from 'react'
import"./Internship.css"
function Intership() {
  return (
    <div className='internship' id="intership">
       <hr />
     <h1 className='internship-header'>  Internship</h1>
     <div className="intership-container"  data-aos="fade-up"   data-aos-duration="1500">
        <div className="intership-left">
            <p className='intership-date'>15/8/2023-1/10/2023</p>
            <p className='intership-role'>FRONT-END DEVELOPER</p>
        </div>
        <div className="circle-line">
        <i className="fa-solid fa-circle"  id="circle" ></i>
        <hr  className='hr2' />
        </div>
        <div className="intership-right">
        
        <h4 className='intership-companyname'>BELEAF TECHNOLOGY</h4>
        <p className='internship-location'>Madurai ,TamilNadu</p>
        <p className='internship-learning'>Developed a Responsive and interactive login page with validation using HTML, CSS, Bootstrap and JavaScript. Implemented the Required Lightweight data validation, manipulation, sorting work as required.</p>
        </div>
     </div>
     <hr />
    </div>
  )
}

export default Intership
