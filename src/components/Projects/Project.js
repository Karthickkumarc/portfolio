import React from 'react'
import "./Project.css"
import fooddelivery_pic from "../assets/food_delivery.webp"
import ecommerce from "../assets/ecommerce-website.svg"
import todo_list from "../assets/todopic.png"
import weatherapp from "../assets/weather.png"
import curd from "../assets/crud.png"


function Project() {

  return (
    <div className='Projects' id="project">
       <h1 className='projects_title'>Projects</h1>
       <div className="project-container" >
           <div className="projects" data-aos="zoom-in-up"data-aos-duration="2000">
              <img src={fooddelivery_pic} alt="food-delivery" />
             <a href="https://tomatokk.netlify.app/"><h3>food delivery </h3></a> 
           </div>
           <div className="projects" data-aos="zoom-in-up" data-aos-duration="2000">
              <img src={ecommerce} alt="food-delivery" />
             <a href="https://effulgent-capybara-81be0e.netlify.app"><h3>ecommerce website </h3></a> 
           </div>
           <div className="projects" data-aos="zoom-in-up" data-aos-duration="2000">
              <img src={todo_list} alt="food-delivery" />
             <a href="https://todolistappsk.netlify.app"><h3>to do list website </h3></a> 
           </div>
           <div className="projects" data-aos="zoom-in-up"data-aos-duration="2000">
              <img src={weatherapp} alt="food-delivery" />
             <a href="https://weatherkkapp.netlify.app/"><h3>Weather app </h3></a> 
           </div>
           <div className="projects" data-aos="zoom-in-up"data-aos-duration="2000">
              <img src={curd} alt="food-delivery" />
             <a href="https://github.com/Karthickkumarc/CrudApplicationreact"><h3>springboot crud </h3></a> 
           </div>
           
       </div>

    </div>
  )
}

export default Project
