import React from 'react'

import './about.scss'
import DocCard from '../../components/docCard/DocCard'
import TutorCard from '../../components/tutorCard/TutorCard'

function About() {
    const arr = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ]

  return (
    <div className='about'>
        <div className="container">
            <div className="about__wrapper">
                <h1 className="title">Об ОЭКУниверситете</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="about__wrapper">
                <h2 className="subtitle">Сведения</h2>
                <div className="about__docs">
                    {arr.map(item => {
                        return (
                            <DocCard/>
                        )
                    })}
                </div>
            </div>
            <div className="about__wrapper">
                <h2 className="subtitle">Руководство</h2>
                <div className="about__tutors">
                    <TutorCard/>
                    <TutorCard/>
                </div>
            </div>
            <div className="about__wrapper">
                <h2 className="subtitle">Специалисты</h2>
                <div className="about__tutors">
                    <TutorCard/>
                    <TutorCard/>
                    <TutorCard/>
                    <TutorCard/>
                    <TutorCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About