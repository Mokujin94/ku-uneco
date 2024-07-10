import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ABOUT_EDUCATION_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, EDUCATIONAL_ROUTE, MAIN_ROUTE, NEWS_ROUTE, SCHEDULE_ROUTE } from '../../utils/consts'
import logo from '../../icons/logo.png';
import style from './header.module.scss'

function Header() {

    const location = useLocation();

    console.log(location.pathname === MAIN_ROUTE)
    return (
        <div className={style.header}>
            <div className="container">
                <ul className={style.menu}>
                    <li className={style.menu__item}>
                        <Link to={MAIN_ROUTE}>
                            <div className={style.menu__logo}>
                                <img src={logo} alt="ku-logo" />
                            </div>
                        </Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={ABOUT_ROUTE} className={location.pathname === ABOUT_ROUTE ? style.menu__item__link__active : style.menu__item__link}>Об университете</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={SCHEDULE_ROUTE} className={location.pathname === SCHEDULE_ROUTE ? style.menu__item__link__active : style.menu__item__link}>Расписание</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={EDUCATIONAL_ROUTE} className={location.pathname === EDUCATIONAL_ROUTE ? style.menu__item__link__active : style.menu__item__link}>Образовательные программы</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={NEWS_ROUTE} className={location.pathname === NEWS_ROUTE ? style.menu__item__link__active : style.menu__item__link}>Новости</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={CONTACTS_ROUTE} className={location.pathname === CONTACTS_ROUTE ? style.menu__item__link__active : style.menu__item__link}>Контакты</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header