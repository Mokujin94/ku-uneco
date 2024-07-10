import DocCard from '../../components/docCard/DocCard';
import './docs.scss'

const Docs = () => {

    const arr = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ]
    return (
        <div className='docs'>
            <div className="container">
                <h1 className="title title_mb30">Документы</h1>
                <div className="docs__wrapper">
                    {arr.map(item => {
                        return (
                            <DocCard />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Docs;