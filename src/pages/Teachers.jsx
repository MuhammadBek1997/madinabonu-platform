import React from 'react'

const Teachers = ({courses}) => {
  return (
    
       <div className='course-list'>
            {
                courses.map((item,index)=>{
                    return(
                        <div className='course-card' key={index}>
                          <img src={item.img} alt={item.name}  />
                            <h2>
                                {item.subject}
                            </h2>
                            <h1>
                                {item.name}
                            </h1>
                        </div>
                    )
                })
            }
        </div>
      
   
  )
}

export default Teachers
