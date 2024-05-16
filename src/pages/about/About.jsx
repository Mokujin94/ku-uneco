import React from 'react'

import './about.scss'
import DocCard from '../../components/docCard/DocCard'
import TutorCard from '../../components/tutorCard/TutorCard'

import Богаткина from "../../icons/Богаткина.png"
import Селин from "../../icons/Селин.png";
import Яналова from "../../icons/Яналова.png";
import Тищенко from "../../icons/Тищенко.png";
import Хромова from "../../icons/Хромова.png";
import Климова from "../../icons/Климова.png";
import Савочкина from "../../icons/Савочкина.png";
import Сайфулина from "../../icons/Сайфулина.png";
import Сенькина from "../../icons/Сенькина.png";
import Ставицкая from "../../icons/Ставицкая.png";
import Лютова from "../../icons/Лютова.png";
import Грук from "../../icons/Грук.png";
import Бикмуллина from "../../icons/Бикмуллина.png";
import Кашина from "../../icons/Кашина.png";
import Клочков from "../../icons/Клочков.png";

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

    const management = [
        {avatar: Богаткина, name: "Мария", secondName: "Михайловна Богаткина", position: "Начальник учебного центра", mail: "BogatkinaMM@uneco.ru", number: "926 659-52-16"},
        {avatar: Селин, name: "Александр", secondName: "Юрьевич Селин", position: "Заместитель начальника учебного центра", mail: "SelinAY@uneco.ru", number: "(495) 657-91-01 доб. 6172"},
    ]

    const employes = [
        {avatar: Яналова, name: "Надежда", secondName: "Валерьевна Яналова", position: "Начальник группы", mail: "YanalovaNV@uneco.ru", number: "985-103-15-72"},
        {avatar: Тищенко, name: "Александр", secondName: "Алексеевич Тищенко", position: "Специалист", mail: "TischenkoAA@uneco.ru", number: "(495) 657-91-01"},
        {avatar: Хромова, name: "Анастасия", secondName: "Ивановна Хромова", position: "Начальник группы", mail: "KhromovaAI@uneco.ru", number: "916-400-36-92"},
        {avatar: Климова, name: "Анна", secondName: "Григорьевна Климова", position: "Главный специалист", mail: "KlimovaAG@uneco.ru", number: "(495) 657-91-01 доб.6170"},
        {avatar: Савочкина, name: "Анна", secondName: "Васильевна Савочкина", position: "Старший преподаватель", mail: "SavochkinaAV@uneco.ru", number: "(495) 657-91-01"},
        {avatar: Сайфулина, name: "Наталья", secondName: "Юрьевна Сайфулина", position: "Главный специалист", mail: "SayfulinaNY@uneco.ru", number: "(495) 657-91-01"},
        {avatar: Сенькина, name: "Наталия", secondName: "Николаевна Сенькина", position: "Начальник группы", mail: "SenkinaNN@uneco.ru", number: "985-421-28-14"},
        {avatar: Лютова, name: "Мишель", secondName: "Егоровна Лютова", position: "Ведущий специалист", mail: "Lyutovame@uneco.ru", number: "(495) 657-91-01 доб. 5983"},
        {avatar: Грук, name: "Наталья", secondName: "Викторовна Грук", position: "Главный специалист", mail: "GrukNV@uneco.ru", number: "(495) 657-91-01 доб. 5985"},
        // {avatar: Бикмуллина, name: "Регина", secondName: "Идрисовна Бикмуллина", position: "Начальник отдела", mail: "BikmullinaRI@uneco.ru", number: "916-130-54-82, 963-687-55-88"},
        {avatar: Кашина, name: "Марина", secondName: "Викторовна Кашина", position: "Главный специалист", mail: "KashinaMV@uneco.ru", number: "(920) 863 81 34"},
        {avatar: Клочков, name: "Глеб", secondName: "Олегович Клочков", position: "Ведущий специалист", mail: "KlochkovGO@uneco.ru", number: "(495) 660-59-29 доб. 5934"},
        {avatar: Ставицкая, name: "Дарья", secondName: "Михайловна Ставицкая", position: "Главный специалист", mail: "Нет данных", number: "(495) 587-87-36 доб. 6182"},
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
                    {
                        management.map((item, i) => {
                            return <TutorCard avatar={item.avatar} mail={item.mail} name={item.name} number={item.number} position={item.position} secondName={item.secondName} key={i}/>
                        })
                    }
                </div>
            </div>
            <div className="about__wrapper">
                <h2 className="subtitle">Специалисты</h2>
                <div className="about__tutors">
                    {
                        employes.map((item, i) => {
                            return <TutorCard avatar={item.avatar} mail={item.mail} name={item.name} number={item.number} position={item.position} secondName={item.secondName} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About