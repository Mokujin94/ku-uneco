import style from './courseCard.module.scss';
import courseImg from '../../icons/course.jpg';

const CourseCard = ({ color }) => {
    return (
        <div className={style.courseCard} style={{ background: color }}>
            <div className={style.courseCard__top}>
                <h2 className={style.courseCard__top__title}>Стропальщик</h2>
                <div className={style.courseCard__top__img}>
                    <img src={courseImg} alt="course-image" />
                </div>
            </div>
            <div className={style.courseCard__bottom}>
                <span>Кол-во часов: 192</span>
                <span>Цена: 10 000 руб</span>
            </div>
        </div>
    );
};

export default CourseCard;