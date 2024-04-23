import CourseCard from "../../components/courseCard/CourseCard";
import './education.scss'
const Education = () => {
    return (
        <div className='education'>
            <div className="container">
                <h1 className="title">Образовательные программы</h1>
                <div className="education__wrapper">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </div>
    );
};

export default Education;