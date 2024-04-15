import React from 'react'

import style from './footer.module.scss';
import telegramIcon from '../../icons/telegram.png'

import { CONTACTS_ROUTE, EDUCATIONAL_ROUTE, MAIN_ROUTE, NEWS_ROUTE, SCHEDULE_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className={style.footer}>
        <div className="container">
            <div className={style.footer__wrapper}>
            <div className={style.footer__item}>
                <ul className={style.footer__menu}>
                    <li className={style.footer__menu__item} >
                        <Link to={MAIN_ROUTE}>Об университете</Link>
                    </li>
                    <li className={style.footer__menu__item}>
                        <Link to={SCHEDULE_ROUTE}>Расписание</Link>
                    </li>
                    <li className={style.footer__menu__item}>
                        <Link to={EDUCATIONAL_ROUTE}>Образовательные программы</Link>
                    </li>
                    <li className={style.footer__menu__item}>
                        <Link to={NEWS_ROUTE}>Новости</Link>
                    </li>
                    <li className={style.footer__menu__item}>
                        <Link to={CONTACTS_ROUTE}>Контакты</Link>
                    </li>
                </ul>
            </div>
            <div className={style.footer__item}>
                <span className={style.footer__item__text}>Контакты</span>
                <div className={style.footer__item__block}>
                    <span className={style.footer__item__text}>почта@mail.com</span>
                    <span className={style.footer__item__text}>+7 999 995 99-98</span>
                </div>
                <span className={style.footer__item__text}>Адрес</span>
                <span className={style.footer__item__text}>м. Павелецкая, Кожевническая 14 Вход со стороны ул. Летниковской</span>
            </div>
            <div className={style.footer__item}>
                <div className={style.footer__item__link}>
                    <img src={telegramIcon} alt="telegram-icon" />
                    <Link to="#" className={style.footer__item__text}>KU_uneco</Link>
                </div>
                <div className={style.footer__item__link}>
                    <img src={telegramIcon} alt="telegram-icon" />
                    <Link to="#" className={style.footer__item__text}>uneco_bigcitylights</Link>
                </div>
                <span className={style.footer__item__text}>Пишите нам в любимых мессенджерах. Мы отвечаем каждый день с 9:00 до 19:00</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer