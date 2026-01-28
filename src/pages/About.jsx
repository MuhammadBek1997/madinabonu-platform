import React from 'react'
import { useGlobalContext } from '../Context'

const About = () => {

  let {user} = useGlobalContext()

  return (
    <div className='about'>About {user.name}</div>
  )
}

export default About