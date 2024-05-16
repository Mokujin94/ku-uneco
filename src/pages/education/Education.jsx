import CourseCard from "../../components/courseCard/CourseCard";

import электромонтер from '../../icons/icons/электромонтер.svg';
import безопас1 from '../../icons/icons/безопас 1.svg';
import безопас2 from '../../icons/icons/безопас 2.svg';
import безопас3 from '../../icons/icons/безопас 3.svg';
import возобнов from '../../icons/icons/возобнов.svg';
import дгу from '../../icons/icons/дгу.svg';
import люлька from '../../icons/icons/люлька.svg';
import мастерство_управления from '../../icons/icons/мастерство управления.svg';
import наставник from '../../icons/icons/наставник.svg';
import прокол from '../../icons/icons/прокол.svg';
import стропальщики from '../../icons/icons/стропальщики.svg';
import электробезопас from '../../icons/icons/электробезопас.svg';

import './education.scss'
const Education = () => {

    const educationServices = [
        {
            id: 1,
            program: "Рабочий люльки находящейся на подъемнике",
            hours: 24,
            cost: 5000,
            icon: люлька
        },
        {
            id: 2,
            program: "Стропальщик",
            hours: 192,
            cost: 10000,
            icon: стропальщики
        },
        {
            id: 3,
            program: "Безопасные методы и приемы выполнения работ на высоте 1 группа",
            hours: 40,
            cost: 5000,
            icon: безопас1
        },
        {
            id: 4,
            program: "Безопасные методы и приемы выполнения работ на высоте 2 группа",
            hours: 40,
            cost: 5000,
            icon: безопас2

        },
        {
            id: 5,
            program: "Безопасные методы и приемы выполнения работ на высоте 3 группа",
            hours: 40,
            cost: 5000,
            icon: безопас3

        },
        {
            id: 6,
            program: "Нормы и правила безопасной организации работ в электроустановках электрических станций и сетей",
            hours: 72,
            cost: 10000,
            icon: электробезопас
        },
        {
            id: 7,
            program: "Электромонтер по ремонту и монтажу кабельных линий (входит квалификационное удостоверение и СУГ)",
            hours: 204,
            cost: 15000,
            icon: электромонтер
        },
        {
            id: 8,
            program: "Применение пиротехнического устройства прокола кабеля (УПКП-1)",
            hours: 40,
            cost: 5000,
            icon: прокол
        },
        {
            id: 9,
            program: "Машинист электростанции передвижной (ДГУ) 3-6 разряд",
            hours: 72,
            cost: 15000,
            icon: дгу
        },
        {
            id: 10,
            program: "Энергосбережение и возобновляемые источники энергии",
            hours: 8,
            cost: 10000,
            icon: возобнов
        },
        {
            id: 11,
            program: "Наставничество",
            hours: 8,
            cost: 10000,
            icon: наставник
        },
        {
            id: 12,
            program: "Развитие управленческих компетенций по программе развития руководителей «Мастерство управления»",
            hours: 48,
            cost: 20000,
            icon: мастерство_управления
        },
        // {
        //     id: 13,
        //     program: "Предоставление учебных площадок АО «ОЭК» сторонним организациям",
        //     hours: 1,
        //     cost: "Подробнее"
        // }
    ];
    return (
        <div className='education'>
            <div className="container">
                <h1 className="title">Образовательные программы</h1>
                <div className="education__wrapper">
                    {
                        educationServices.map(item => {
                            return <CourseCard key={item.id} icon={item.icon} program={item.program} hours={item.hours} cost={item.cost}/>
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Education;