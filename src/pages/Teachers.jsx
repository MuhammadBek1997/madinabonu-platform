import React, { useState } from 'react'
import '../styles/Teachers.css'

const Teachers = ({ courses }) => {
    const [cardToggle,setCardToggle] = useState(false)
    return (

        <div className='course-list'>
            {
                courses.map((item, index) => {
                    return (
                        <div className='course-card' key={index}>
                            <img className='pictures' src={item.img} alt={item.name} />
                            <div className="title-and-btn">
                                <div className="words">
                                    <h2>
                                        {item.subject}
                                    </h2>
                                    <h1>
                                        {item.name}
                                    </h1>
                                </div>
                                <button onClick={() => setCardToggle(!cardToggle)}>

                                </button>
                            </div>

                            {/* <div className="hover-state">
                                <h2>
                                    {item.WorkExperience}
                                </h2>
                                <button>

                                </button>
                            </div> */}
                        </div>
                    )
                })
            }
        </div>


    )
}

export default Teachers
