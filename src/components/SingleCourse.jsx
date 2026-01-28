import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const SingleCourse = () => {

    let {courses} = useGlobalContext()

    let courseId = useParams()

    const currentCourse = courses.find((item)=>item.id == courseId.id)

  return (
    <div>
        <Link to={'/'}>
            Back
        </Link>
        <h1>
            {currentCourse.name}
        </h1>
        <h1>
            {currentCourse.teacher}
        </h1>
    </div>
  )
}

export default SingleCourse