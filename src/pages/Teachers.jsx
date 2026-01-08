import React from 'react'
import '../styles/Teachers.css'

const Teachers = ({ courses }) => {
    return (

        <section className='course-list'>
            {
                courses.map((item, index) => {
                    return (
                        <div className='course-card' key={index}>
                            <div className="title-and-img">
                                <img className='pictures' src={item.img} alt={item.name} />
                                <h2>
                                    {item.subject}
                                </h2>
                                <h1>
                                    {item.name}
                                </h1>
                            </div>
                            <div className="hover-state">

                            </div>
                        </div>
                    )
                })
            }
        </section>


    )
}

export default Teachers
