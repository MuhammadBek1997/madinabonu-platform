import React, { useState } from 'react'
import '../styles/Teachers.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Teachers = ({ courses }) => {
    const [cardToggle, setCardToggle] = useState(null)
    return (

        <section className='course-list'>
            {
                courses.map((item, index) => {
                    return (
                        <div className='course-card' >
                            <div className={`course-card-cont ${cardToggle ? "card-open" : ""}`} key={index}>
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
                                    <button className='cardBtn' onClick={() => setCardToggle(!cardToggle)}>

                                        {!cardToggle ? <ChevronRight /> : <ChevronLeft />}
                                    </button>
                                </div>
                               
                            </div>
                        </div>
                    )
                })
            }
        </section>


    )
}

export default Teachers
