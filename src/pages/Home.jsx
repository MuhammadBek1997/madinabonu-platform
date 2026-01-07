import '../styles/Home.css'


const Home = () => {

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
      img: './images/ing.png',
      desc: 'English group'
    }
  ]
  return (
    <section>
      <div className='hero'>
        <div className="for-words-btns">
          <h1>
            Madinabonu - online kurslari
          </h1>
          <p>
            Madinabonu — bu sizga fanlarni o‘rganishda yordam beradigan platforma.
            Pullik darslardagi ma’lumotlarni bepul o‘rganing. Barchasi bir joyda!
          </p>
          <div className="courses-btn">
            <div className="btn">Kurslar</div>
            <div className="btn">Loyihalar</div>
          </div>
        </div>
        <div className="nav-logo">
          <img src="/images/logotip.png" alt="logo" className='img-hero' />
        </div>
      </div>




{/* kurslar haqida */}
      <main>
        <div className='kurs'>
          <h1>
            Kurslar
          </h1>
          <img src="images/icons8-chevron-right-30.png" alt="chevron-right" />
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
       {/* ustozlar haqida */}
      <main>
       
        <div className='kurs'>
          <h1>
            Teacher
          </h1>
          <img src="images/icons8-chevron-right-30.png" alt="chevron-right" />
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
      
{/* oquvchilar  haqida */}
      <main>
        <div className='kurs'>
          <h1>
            Top Students
          </h1>
          <img src="images/icons8-chevron-right-30.png" alt="chevron-right" />
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
    </section>
  )
}

export default Home