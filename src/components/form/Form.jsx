import FuncButton from '../funcButton/FuncButton';
import style from './form.module.scss';


const Form = () => {
    return (
        <div className={style.form}>
            <h2 className="title">Оставить заявку</h2>
            <div className={style.form__item}>
                <span>Имя</span>
                <input type="text" className={style.form__item__input} />
            </div>
            <div className={style.form__item}>
                <span>Имя</span>
                <input type="text" className={style.form__item__input} />
            </div>
            <div className={style.form__item}>
                <span>Имя</span>
                <input type="text" className={style.form__item__input} />
            </div>
            <FuncButton>Отправить</FuncButton>
        </div>
    );
};

export default Form;