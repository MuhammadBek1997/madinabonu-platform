import { useState } from 'react'
import '../styles/Students.css'
import StudentCard from '../components/StudentCard'
import { useGlobalContext } from '../Context'

const TopStudents = () => {

  let { courses, setsToggle, sToggle } = useGlobalContext()

  return (
    <div className='students'>
      <div className="students-cont">
      <table className="students-table">
        <thead className='head-part'>
          <tr>
            <th>Avatar</th>
            <th>Familiya</th>
            <th>Ism</th>
            <th>O'qituvchi</th>
            <th>Batafsil</th>
          </tr>
        </thead>

        <tbody>
          {
            courses.map((item, index) => {
              return <StudentCard key={index} {...item} />
            })
          }
          <div class="pagination">
            <div>Previous</div>
            <div>Page 1 of 12</div>
            <div>Next</div>
          </div>

        </tbody>
      </table>
      </div>
    </div>

  )
}

export default TopStudents
