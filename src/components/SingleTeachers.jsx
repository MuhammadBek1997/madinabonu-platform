import React from 'react'
import { Link, useParams } from 'react-router-dom'



const SingleTeachers = ({ img }) => {


  let teacherId = useParams()

  console.log(teacherId.id)

  return (
    
    <div className='single-page' >

      <div className="full-info">
        <div className="full-info-cont1">
          <div className="basic-information">
            O'qituvchi haqida
          </div>
          <div className="inner-cont-1">
          <div className="for-picture">

          </div>
          <div className="for-short-inf">

          </div>
          </div>
        
        </div>
        <div className="full-info-cont2">
          <div className="inner-cont1">

          </div>
          <div className="inner-cont2">

          </div>
          <div className="inner-cont3">
      <Link to={`/teachers`}> Back </Link>

          </div>

        </div>
      </div>

    </div>

  )
}

export default SingleTeachers
