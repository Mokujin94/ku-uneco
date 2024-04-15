import React from 'react'

import style from './linkButton.module.scss'
import { Link } from 'react-router-dom'
import { ABOUT_ROUTE } from '../../utils/consts'

function LinkButton(props) {

  console.log(props.width)
  
  return (
    <Link to={props.path} className={style.button} style={{maxWidth: props.width + 'px'}}>
        {props.children}
    </Link>
  )
}

export default LinkButton