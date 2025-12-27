import '../styles/Home.css'


const Home = () => {

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
    </section>
  )
}

export default Home