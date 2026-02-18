import React from 'react'
import '../styles/StudentsModal.css'

const StudentModal = () => {

    const handleClose = () => {
        setShowStudent(false)
      }


  return (
    <div className="modalOverlay">
    <div className="modalContent">
      <button onClick={handleClose}>Orqaga</button>

      <img src={student.img} alt="" />
      <h2>{student.name}</h2>
      <p>{student.subject}</p>
    </div>
  </div>
  )
}

export default StudentModal
