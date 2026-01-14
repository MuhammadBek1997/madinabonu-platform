import React from 'react'

const CoursesCard = ({name,teacher,index }) => {

    const [cardToggle, setCardToggle] = useState(false)

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
}

export default CoursesCard
