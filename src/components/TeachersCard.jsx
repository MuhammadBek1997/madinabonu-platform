import { useState } from 'react'
// import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import { CheckCircle } from 'lucide-react'


const TeachersCard = ({ name, subject, img, courses, achievements, GroupPhotos, WorkExperience, students, AboutTeacher, id }) => {

    // let{ setsToggle,sToggle } = useGlobalContext()

    // const [cardToggle, setCardToggle] = useState(false)

    return (
        <div className='container-cards'>

            <div className="card">
                <div className='picture-cont'>
                    <img className='pictures' src={img} alt={name} />
                </div>
                <div className="short-info">
                    <div className="infos"><span className='inf'>Fan nomi:</span>{subject}</div>
                    <div className="infos"><span className='inf'> Familiya-ismi:</span>{name}</div>
                    <div className="infos"><span className='inf'>Fan doirasida tajribasi:</span>{WorkExperience}</div>
                    <div className="lesson-days">
                        <div className="filial">
                            <h4>Guliston</h4>
                            <div className="days"><CheckCircle style={{color:"var(--toggle-color)"}} />Dushanba</div>
                            <div className="days"><CheckCircle style={{color:"var(--toggle-color)"}}/>Chorshanba</div>
                            <div className="days"><CheckCircle style={{color:"var(--toggle-color)"}} />Juma</div>
                        </div>
                        <div className="filial">
                           <h4>Yangiyer</h4>
                            <div className="days"><CheckCircle style={{color:"var(--toggle-color)"}}/>Seshanba</div>
                            <div className="days"><CheckCircle style={{color:"var(--toggle-color)"}}/>Payshanba</div>
                            <div className="days"><CheckCircle style={{color:"var(--toggle-color)"}} />Shanba</div>
                        </div>
                    </div>
                        <div className="extra" >
                            <CheckCircle style={{color:"green"}}/>Yakshanba
                        </div>
                    <Link to={`/teachersSingle/${id}`}><button className='dataToggle'>Batafsil</button> </Link>
                </div>
            </div>
            <div className="card-mobile" style={{
                backgroundImage:`url(${img})`
            }}>
                    <Link to={`/teachersSingle/${id}`}><button className='dataToggle'>Batafsil</button> </Link>
                
            </div>
        </div>

    )
}

export default TeachersCard


