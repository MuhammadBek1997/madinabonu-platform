import React from 'react'
import '../styles/Courses.css'



const Courses = () => {
   
  let homecourse = [
    {
      img: './images/matem.png',
      desc: 'Math group'
    },
    {
      img: './images/matem.png',
      desc: 'Math group'
    },
    {
      img: './images/matem.png',
      desc: 'Math group'
    },
    {
      img: './images/matem.png',
      desc: 'Math group'
    },
    {
      img: './images/matem.png',
      desc: 'Math group'
    },
    {
      img: './images/matem.png',
      desc: 'Math group'
    },
    {
      img: './images/ing.png',
      desc: 'English group'
    },
    {
      img: './images/ing.png',
      desc: 'English group'
    },
    {
      img: './images/ing.png',
      desc: 'English group'
    },
    {
      img: './images/ing.png',
      desc: 'English group'
    },
    {
      img: './images/ing.png',
      desc: 'English group'
    },
    {
      img: './images/ing.png',
      desc: 'English group'
    },
 
  ]
return (
    <div className='courses-page'>
       <main>
        <div className='kurs'>
          <h1>
            Kurslar
          </h1>
        </div>

        <div id='item-list'>
          {
            homecourse.map((item, index) => {
              return (
                <div className='card' key={index}>
                  <div className='card-cont'>
                    <img src={item.img} alt="" />
                    <h2>
                      {item.desc}
                    </h2>
                  </div>
                </div>
              )
            })
          }


        </div>
      </main>
    </div>
  )
}

export default Courses