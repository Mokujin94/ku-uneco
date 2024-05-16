import { useRef, useState } from 'react';
import style from './courseItem.module.scss'

const CourseItem = ({ orangeAcive }) => {

    const [active, setActive] = useState(false)

    const contentRef = useRef(null);

    const onListOpen = () => {
        setActive(prev => !prev)
    }

    return (
        <div className={orangeAcive ? style.courseItem + " " + style.courseItem__orange : style.courseItem} onClick={onListOpen}>
            <div className={active ? style.courseItem__header + " " + style.courseItem__header_active : style.courseItem__header}>
                <span className='description'>1. Первый Этап</span>
                <div className={active ? style.courseItem__icon + " " + style.courseItem__icon_active : style.courseItem__icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                        <path d="M2 2L12 12L22 2" stroke="white" stroke-width="3" />
                    </svg>
                </div>
            </div>
            <div ref={contentRef} onClick={(e) => e.stopPropagation()} className={active ? style.courseItem__content + ' ' + style.courseItem__content_active : style.courseItem__content}>
                <ul>
                    <li>Введение</li>
                    <li>Продолжение</li>
                    <li>Заключение</li>
                    <li>Заключение</li>
                    <li>Заключение</li>
                    <li>Заключение</li>
                </ul>
            </div>
        </div>
    );
};

export default CourseItem;