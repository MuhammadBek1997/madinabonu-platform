
import { ChevronDown, ChevronUp, MoreVertical } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const StudentCard = ({ id, achievements, GroupPhotos, WorkExperience, students, AboutTeacher, imgstud, namestud,teacher, setStudent, setShowStudent, projects, subjects, name }) => {

    let { courses } = useGlobalContext()

    const [cardButton, setCardButton, setIsOpen, isOpen,] = useState(false)

    const handleShowStudent = () => {
        setStudent({
            id: id,
            namestud: namestud,
            subjects: subjects,
            projects: projects,
            teacher:teacher
        })
        setShowStudent(true)
    }

    return (
        <tr className='laptop'>

            <td>  <img src={imgstud} alt="" className='avatars' /> </td>
            <td className='student-name'>
                <div class="student-info">
                   {namestud}  <button className='vertical1' onClick={() => handleShowStudent()}> <MoreVertical /> </button>
                </div>
            </td>
            <td>  <div className="name-more"> {subjects} <button className='vertical2' onClick={() => handleShowStudent()}> <MoreVertical /> </button>  </div>    </td>
            <td className='teacherName'>{teacher}   </td>
            <td className='button-td'>
                <button className='student-single' onClick={() => handleShowStudent()}>
                    Batafsil
                </button>
            </td>




        </tr>


    )
}

export default StudentCard
