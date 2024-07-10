import style from './defaultCard.module.scss'
import img from '../../icons/Основные сведения.webp';
import { Link } from 'react-router-dom';

const DefaultCard = ({ title, path }) => {
    return (
        <Link to={path} className={style.defaultCard}>
            <div className={style.defaultCard__img}>
                <img src={img} alt="" />
            </div>
            <h2 className={style.defaultCard__title}>{title}</h2>
        </Link>
    );
};

export default DefaultCard;