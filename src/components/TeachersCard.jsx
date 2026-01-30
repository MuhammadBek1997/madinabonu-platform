import  { useState } from 'react'
// import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'


const TeachersCard = ({ name, subject, img, courses,achievements, GroupPhotos, WorkExperience, students, AboutTeacher,id }) => {

    // let{ setsToggle,sToggle } = useGlobalContext()

    // const [cardToggle, setCardToggle] = useState(false)

    return (
        <div>
            
            <div className="card">
                    <div className='picture-cont'>
                    <img className='pictures' src={img} alt={name} /> 
                    </div>
                   <div className="teacher-info">
                  
                  <Link to={`/teachersSingle/${id}`}><button className='dataToggle'>Batafsil</button> </Link>
                    </div>
            </div>
         </div>

    )
}

export default TeachersCard


 