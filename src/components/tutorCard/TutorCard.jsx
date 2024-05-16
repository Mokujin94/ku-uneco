import React from 'react'

import style from './tutorCard.module.scss';

function TutorCard({avatar, name, secondName, position, number, mail}) {
  return (
    <div className={style.card}>
        <div className={style.card__wrapper}>
            <img src={avatar} alt="tutor-avatar" />
            <span className={style.card__text}>{name} <br /> {secondName}</span>
            <span className={style.card__text}>{position}</span>
            <span className={style.card__text}>{number}</span>
            <span className={style.card__text}>{mail}</span>
        </div>
    </div>
  )
}

export default TutorCard