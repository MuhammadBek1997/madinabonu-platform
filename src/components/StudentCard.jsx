
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const StudentCard = ({achievements,GroupPhotos,WorkExperience,students,AboutTeacher}) => {

    let{ courses } = useGlobalContext()

    const [cardButton, setCardButton] = useState(false)

    return (
        <div>

          

        </div>
    )
}

export default StudentCard
