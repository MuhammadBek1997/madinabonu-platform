
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const StudentCard = () => {
    const [cardButton, setCardButton] = useState(false)

    return (
        <div>
            <div className={'students-card'} style={{ zIndex: cardButton ? "10" : "" }}>
                <div className={`students-card-cont ${cardButton ? "card-open" : ""}`} >
                    <div className="card">
                        <div className='face front'>
                            <h2>
                                Front
                            </h2>
                        </div>
                        <div className='face back'>
                            <h2>
                                Back
                            </h2>
                        </div>
                    </div>
                    {/* <button className='cardBtn' onClick={() => setCardButton(!cardButton)}>
                        {!cardButton ? <ChevronDown /> : <ChevronUp />}
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default StudentCard
