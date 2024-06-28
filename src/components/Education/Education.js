import React from 'react'
import "./Education.css";
function Education() {
  return (
    <div className='education' id="education">
      <h1 className='education-header'>Education</h1>
      <hr />
      <div className='education-content'  data-aos="fade-up"   data-aos-duration="1500">
        
          <div className="education-college">
            <p>2019-2023</p>
            <p> Engineering</p>
          
            <i className="fa-solid fa-circle" ></i>
            <hr  className='hr1' />
            <h1 className='education-management'>K.L.N college of Engineering</h1>
            <p className=''>Sivagangai,TamilNadu</p>
            <p>  Bachelor of Enginnering(Electrical and Electronics Engineering) with aggregate of 88.0%(CGPA)</p>
          </div><div className="education-college">
            <p>2017 - 2019</p>
            <p> Xll Std</p>
          
            <i className="fa-solid fa-circle" ></i>
            <hr  className='hr1' />
            <h1 className='education-management'> BALAMANDIRAM HR.SEC.SCHOOL</h1>
            <p className=''> Madurai ,TamilNadu</p>
            <p> Completed H.S.C with an Aggregate of 61.4%</p>
          </div>
          <div className="education-college">
            <p>2016 - 2017</p>
            <p>X Std</p>
            <i className="fa-solid fa-circle" ></i>
            <hr  className='hr1' />
            <h1 className='education-management'>BALAMANDIRAM HR.SEC.SCHOOL</h1>
            <p className=''> Madurai ,TamilNadu</p>
            <p> Completed S.S.L.C with an aggregate of 89.4%.</p>
          </div>
        
      </div>
      
    </div>
  )
}

export default Education
