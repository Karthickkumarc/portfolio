import React from 'react'
import "./Skill.css"
function Skill() {
    return (
        <div className='skill' id="skill">
            <h1 className='skill-header'>Skills</h1>
            <hr />
            <div className="skill-container" data-aos="fade-right"  data-aos-duration="1500">
                <div className="skill-left">
                    <div className="skill-java">
                        <h3 className='skill-language'>Java</h3>
                        <div className="skillbar">
                            <div className="java skill-fill">
                                <span className="skill-percent">70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill-java">
                        <h3 className='skill-language'>SpringBoot</h3>
                        <div className="skillbar">
                            <div className="springboot skill-fill">
                                <span className="skill-percent">50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill-java">
                        <h3 className='skill-language'>HTML 5</h3>
                        <div className="skillbar">
                            <div className="html skill-fill">
                                <span className="skill-percent">80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill-java">
                        <h3 className='skill-language'>css</h3>
                        <div className="skillbar">
                            <div className="css skill-fill">
                                <span className="skill-percent">70%</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="skill-right">
                    <div className="skill-java">
                        <h3 className='skill-language'>bootstrap</h3>
                        <div className="skillbar">
                            <div className="bootstrap skill-fill">
                                <span className="skill-percent">80%</span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="skill-java">
                        <h3 className='skill-language'>JavaScript</h3>
                        <div className="skillbar">
                            <div className="javascript skill-fill">
                                <span className="skill-percent">80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill-java">
                        <h3 className='skill-language'>React Js</h3>
                        <div className="skillbar">
                            <div className="reactjs skill-fill">
                                <span className="skill-percent">75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill-java">
                        <h3 className='skill-language'>GitHub</h3>
                        <div className="skillbar">
                            <div className="github skill-fill">
                                <span className="skill-percent">50%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skill
