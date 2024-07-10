import React from 'react';

import MainSlider from '../../components/mainSlider/MainSlider';
import './mainPage.scss';
import CourseCard from '../../components/courseCard/CourseCard';
import LinkButton from '../../components/linkButton/LinkButton';
import { ABOUT_ROUTE } from '../../utils/consts';
import Form from '../../components/form/Form';
import NewsCard from '../../components/newsCard/NewsCard';
import стропальщики from '../../icons/icons/стропальщики.svg';

function Main() {
    return (
        <div className="mainPage">
            <MainSlider />
            <div className="container container__min">
                <div className="mainPage__info">
                    <p className="mainPage__descr">
                        Корпоративный Университет "Объединенной энергетической компании" - это современный образовательный центр, объединяющий передовые методики обучения и опытных преподавателей. Мы предлагаем широкий спектр курсов и тренингов, адаптированных к специфике нашей отрасли
                    </p>
                    <div className="mainPage__stats">
                        <div className="mainPage__stats-item">
                            <h2 className="mainPage__stats-item-title">2900 +</h2>
                            <span className="mainPage__stats-item-descr">Всего обученно за 2023 год</span>
                        </div>
                        <div className="mainPage__stats-item">
                            <h2 className="mainPage__stats-item-title">2000 +</h2>
                            <span className="mainPage__stats-item-descr">Обученно руководителей и специалистов</span>
                        </div>
                        <div className="mainPage__stats-item">
                            <h2 className="mainPage__stats-item-title">800 +</h2>
                            <span className="mainPage__stats-item-descr">Обученно рабочих</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainPage__current">
                <div className="container">
                    <h2 className="title">Актуальные курсы</h2>
                    <div className="mainPage__current-wrapper">
                        {/* <CourseCard  /> */}
                        <CourseCard icon={стропальщики} program={"Стропальщик"} hours={192} cost={10000} />
                        <div className="mainPage__current-wrapper-info">
                            <p className="mainPage__current-wrapper-info__descr">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <LinkButton width={200} path={ABOUT_ROUTE}>Перейти</LinkButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainPage__news">
                <div className="container">
                    <h2 className="title">Курсы и новости</h2>
                    <div className="mainPage__wrapper">
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main