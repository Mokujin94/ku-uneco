import style from './newsCard.module.scss';
import image from '../../icons/newsImage.jpg';
import { Link } from 'react-router-dom';

const NewsCard = () => {
    return (
        <div className={style.newsCard}>
            <div className={style.img}>
                <img src={image} alt="news-image" />
            </div>
            <div className={style.newsCard__inner}>
                <h2 className={style.newsCard__title}>Заголовок</h2>
                <p className={style.newsCard__content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit. Senectus et netus et malesuada fames ac turpis egestas maecenas. Sed libero enim sed faucibus turpis. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Ipsum dolor sit amet consectetur.</p>
                <Link className={style.newsCard__button}>Перейти</Link>
            </div>
        </div>
    );
};

export default NewsCard;