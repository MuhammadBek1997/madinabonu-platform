
import { ChevronDown, ChevronUp, MoreVertical } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const StudentCard = ({ id, achievements, GroupPhotos, WorkExperience, students, AboutTeacher, img, namestud, setStudent, setShowStudent,projects,subjects }) => {

    let { courses } = useGlobalContext()

    const [cardButton, setCardButton, setIsOpen, isOpen,] = useState(false)

    const handleShowStudent = () => {
        setStudent({
            id: id,
            namestud: namestud,
            subjects: subjects,
            projects: projects
        })
        setShowStudent(true)
    }

    return (
        <tr className='laptop'>

            <td>  <img src={img} alt="" className='avatars' /> </td>
            <td className='student-name'>
                <div class="student-info">
                    Sophia Wilson <div className="vertical1"> <MoreVertical /> </div>
                </div>
            </td>
            <td>  <div className="name-more"> 522bcs009  <div className="vertical2"> <MoreVertical /> </div> </div>    </td>
            <td className='teacherName'>{name}   </td>

            <button className='student-single'>
                Batafsil
            </button>


            {/* <td> <Link to={`/studentsSingle/${id}`}><button className='student-single'>Batafsil</button> </Link></td> */}
            {/* <td> <button className='student-single'>Batafsil</button></td> */}



        </tr>


    )
}

export default StudentCard
