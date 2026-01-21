import React from 'react'
import { Link, useParams } from 'react-router-dom'



const SingleTeachers = () => {
  let teacherId = useParams()
  
  console.log(teacherId.id)
  
    return (
  <div style={{padding:"400px"}}>
      Single Teachers
      <Link to={`/teachers`}> Back </Link>
    </div>
  )
}

export default SingleTeachers
