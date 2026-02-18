import { useState } from 'react'
import '../styles/Students.css'
import StudentCard from '../components/StudentCard'
import { useGlobalContext } from '../Context'
import { MoreHorizontal } from 'lucide-react'
import StudentModal from '../components/StudentModal'

const TopStudents = () => {

  let { courses, setsToggle, sToggle,students } = useGlobalContext()

  const [showStudent,setShowStudent] = useState(false)
  const [student,setStudent] = useState({})

  return (
    <div className='students'>
      <div className="students-cont">
      <table className="students-table">
        <thead>
          <tr>
            <th><div className="inner-th-first">Avatar</div></th>
            <th> <div className="inner-th">Ism</div></th>
            <th> <div id='last-for-mobile' className="inner-th">Familia</div></th>
            <th> <div id='inner-th' className="inner-th">O'qituvchi</div></th>
            <th id='last-child'> <div className="inner-th-last">Batafsil</div></th>
        
          </tr>
        </thead>

        <tbody>
          {
            students.map((item, index) => {
              return <StudentCard key={index} {...item}  setShowStudent={setShowStudent}
              setStudent={setStudent}  />
            })
          }
          {/* <div class="pagination">
            <div>Previous</div>
            <div>Page 1 of 12</div>
            <div>Next</div>
          </div> */}

        </tbody>
      </table>

      {showStudent ? <StudentModal {...students}/>:null}
      </div>
    </div>

  )
}

export default TopStudents
