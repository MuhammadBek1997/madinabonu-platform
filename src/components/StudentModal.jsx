import React from 'react'
import '../styles/StudentsModal.css'

const StudentModal = ({setShowStudent,img,namestud,subjects,projects,students}) => {

    const handleClose = () => {
        setShowStudent(false)
      }


  return (
    <div className="modalOverlay">
    <div className="modalContent">
      <button onClick={handleClose}>Orqaga</button>

      <img src={img} alt="" />
      <h2>{namestud}</h2>
      <p>{subjects}</p>
      <p>
        {projects}
      </p>
    </div>
  </div>
  )
}

export default StudentModal
