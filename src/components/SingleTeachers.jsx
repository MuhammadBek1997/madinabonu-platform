import React from 'react'
import { Link, useParams } from 'react-router-dom'



const SingleTeachers = () => {
  let teacherId = useParams()
  
  console.log(teacherId.id)
  
    return (
    <div>
      Single Teachers
      <Link to={`/`}> Back </Link>
    </div>
  )
}

export default SingleTeachers
