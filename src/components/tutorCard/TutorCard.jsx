import React from 'react'

import style from './tutorCard.module.scss';

function TutorCard() {
  return (
    <div className={style.card}>
        <div className={style.card__wrapper}>
            <img src="https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1713052800&semt=ais" alt="tutor-avatar" />
            <span className={style.card__text}>Джордж <br /> Блэк</span>
            <span className={style.card__text}>+7 999 999 99 99</span>
            <span className={style.card__text}>mail@mail.com</span>
        </div>
    </div>
  )
}

export default TutorCard