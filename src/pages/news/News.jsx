import NewsCard from '../../components/newsCard/NewsCard';
import './news.scss';
const News = () => {
    return (
        <div className='news'>
            <div className="container">
                <h1 className="title">Новости</h1>
                <div className="news__wrapper">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        </div>
    );
};

export default News;