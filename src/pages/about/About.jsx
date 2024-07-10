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
import DefaultCard from '../../components/defaultCard/DefaultCard'
import { ABOUT_EDUCATION_DOCS_ROUTE, ABOUT_EDUCATION_EMOLOYEES_ROUTE, ABOUT_EDUCATION_MAIN_ROUTE } from '../../utils/consts'

function About() {




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
                        <DefaultCard path={ABOUT_EDUCATION_MAIN_ROUTE} title="Основные сведения" />
                        <DefaultCard path={ABOUT_EDUCATION_EMOLOYEES_ROUTE} title="Структура и органы управления" />
                        <DefaultCard path={ABOUT_EDUCATION_DOCS_ROUTE} title="Документы" />
                        <DefaultCard title="Образование" />
                        {/* <DefaultCard title="Руководство. Педагогический (научно-педагогический) состав" /> */}
                        {/* <DefaultCard title="МТО и оснащенность учебного процесса" /> */}
                        {/* <DefaultCard title="Платные образовательные услуги" /> */}
                        {/* <DefaultCard title="Финансово-хозяйственная деятельность" /> */}
                        {/* <DefaultCard title="Вакантные места для приема (перевода) обучающихся" /> */}
                        {/* <DefaultCard title="Доступная среда" /> */}
                        <DefaultCard title="Международное сотрудничество" />
                    </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className='about'>
    //         <div className="container">
    //             <div className="about__wrapper">
    //                 <h1 className="title">Об ОЭКУниверситете</h1>
    //                 <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //             </div>


    //         </div>
    //     </div>
    // )
}

export default About