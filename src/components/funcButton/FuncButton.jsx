import style from './funcButton.module.scss'

const FuncButton = ({ children }) => {
    return (
        <div className={style.funcButton}>
            {children}
        </div>
    );
};

export default FuncButton;