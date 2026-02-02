import React from 'react'
import { Link, useParams } from 'react-router-dom'



const SingleTeachers = () => {

  
  let teacherId = useParams()
  
  console.log(teacherId.id)
  
    return (
  <div className='single-page' style={{padding:"400px"}}>
  
      Single Teachers
      <div className="full-info">
      <div className="full-info-cont1">

      </div>
      <div className="full-info-cont2">

      </div>
    </div>
      <Link to={`/teachers`}> Back </Link>
   
    </div>
  )
}

export default SingleTeachers
