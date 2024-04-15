import React from 'react'

import style from './docCard.module.scss';
import docIcon from '../../icons/docCard.png';

function DocCard() {
  return (
    <div className={style.card}>
        <div className={style.card__wrapper}>
            <img src={docIcon} alt="document-icon" />
            <span>Расписание</span>
        </div>
    </div>
  )
}

export default DocCard