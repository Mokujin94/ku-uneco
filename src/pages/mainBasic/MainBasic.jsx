import './mainBasic.scss';

const MainBasic = () => {
    return (
        <div className='mainBasic'>
            <div className="container">
                <h1 className="title title_mb30">Основные сведения</h1>
                <table className="mainBasic__table">
                    <tbody className="mainBasic__table__body">
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Полное наименование образовательной организации</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">Общество с ограниченной ответственностью Учебный комбинат «Стремление»</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Сокращенное наименование образовательной организации</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">ООО «УК Стремление»</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Дата создания образовательной организации</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">14.10.2014г.</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Учредители образовательной организации</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">Святюк Ирина Викторовна</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Информация о представительствах и филиалах образовательной организации</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">У образовательной организации нет филиалов и представительств</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Место нахождения образовательной организации</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">127018, г. Москва, 3-й проезд Марьиной Рощи,
                                дом 40 стр. 1 корп. 11, эт. 9, оф. 904, 906</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Место осуществления образовательной деятельности</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">127018, г. Москва, 3-й проезд Марьиной Рощи,
                                дом 40 стр. 1 корп. 11, эт. 9, оф. 904, 906</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Адреса официальных сайтов представительств и филиалов образовательной организации или страницах в сети «Интернет»</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">Представительства и филиалы образовательной организации отсутствуют</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Режим/график работы</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">Пн-Пт 09.00-17.00</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Контактный телефон</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">+7-495-787-52-07, +7-925-589-87-65</td>
                        </tr>
                        <tr className="mainBasic__table__body-row">
                            <td className="mainBasic__table__body-column">Адрес электронной почты</td>
                            <td className="mainBasic__table__body-column mainBasic__table__body-column_thickness">4030679@mail.ru</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MainBasic;