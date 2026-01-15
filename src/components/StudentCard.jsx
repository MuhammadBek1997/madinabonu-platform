
import React from 'react'

const StudentCard = () => {
    const [cardButton, setCardButton] = useState(false)

    return (
        <div>
  <div className={'students-card'} style={{zIndex:cardButton?"10" : ""}}>
            <div className={`students-card-cont ${cardButton ? "card-open" : ""}`} >
             
            <button className='cardBtn' onClick={() => setCardButton(!cardButton)}>
                        {!cardToggle ? <ChevronDown /> : <ChevronUp />}
                    </button>

            </div>
        </div>
        </div>
    )
}

export default StudentCard
