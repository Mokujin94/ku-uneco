import Form from '../../components/form/Form';
import './contacts.scss';

const Contacts = () => {
    return (
        <div className='contact'>
            <div className="container">
                <h1 className="title">Контакты</h1>
                <div className="contact__wrapper">
                    <div className="contact__wrapper-content">
                        <div className="contact__wrapper-content-item">
                            <span className='contact__wrapper-content-item-title'>Адрес:</span>
                            <span className='contact__wrapper-content-item-descr'>г. Москва, Раушская набережная, д.8, 115035</span>
                        </div>
                        <div className="contact__wrapper-content-item">
                            <span className='contact__wrapper-content-item-title'>Почта:</span>
                            <span className='contact__wrapper-content-item-descr'>почта@mail.com</span>
                        </div>
                        <div className="contact__wrapper-content-item">
                            <span className='contact__wrapper-content-item-title'>Номер:</span>
                            <span className='contact__wrapper-content-item-descr'>+7 999 995 99-98</span>
                        </div>
                    </div>
                    <div className="contact__wrapper-content">
                        <div className="contact__wrapper-content-itemIcon">
                            <div className="contact__wrapper-content-item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <path d="M12.8751 0.041748C19.9628 0.041748 25.7084 5.78734 25.7084 12.8751C25.7084 19.9628 19.9628 25.7084 12.8751 25.7084C5.78734 25.7084 0.041748 19.9628 0.041748 12.8751C0.041748 5.78734 5.78734 0.041748 12.8751 0.041748ZM17.302 18.1063C17.5379 17.3823 18.6442 10.164 18.7806 8.74168C18.8217 8.31069 18.6859 8.02462 18.4191 7.89682C18.0966 7.74175 17.6191 7.81928 17.0646 8.01927C16.3048 8.29305 6.58942 12.4184 6.02796 12.6569C5.49591 12.8831 4.99221 13.1296 4.99221 13.4868C4.99221 13.7381 5.14139 13.8793 5.55206 14.0258C5.9793 14.1782 7.0557 14.5044 7.69148 14.6798C8.30374 14.8487 9.00048 14.7022 9.39083 14.4595C9.80471 14.2023 14.583 11.0052 14.9257 10.725C15.2685 10.4448 15.5417 10.8036 15.2615 11.0843C14.9814 11.3645 11.7019 14.5477 11.2693 14.9883C10.7442 15.5236 11.1169 16.0781 11.4693 16.3C11.8714 16.5534 14.7648 18.4939 15.2006 18.8052C15.6364 19.1164 16.0781 19.2575 16.4829 19.2575C16.8876 19.2575 17.1005 18.7249 17.302 18.1063Z" fill="black" />
                                </svg>
                            </div>
                            <span className='contact__wrapper-content-item-descr'>KU_uneco</span>
                        </div>
                        <div className="contact__wrapper-content-itemIcon">
                            <div className="contact__wrapper-content-item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <path d="M12.8751 0.041748C19.9628 0.041748 25.7084 5.78734 25.7084 12.8751C25.7084 19.9628 19.9628 25.7084 12.8751 25.7084C5.78734 25.7084 0.041748 19.9628 0.041748 12.8751C0.041748 5.78734 5.78734 0.041748 12.8751 0.041748ZM17.302 18.1063C17.5379 17.3823 18.6442 10.164 18.7806 8.74168C18.8217 8.31069 18.6859 8.02462 18.4191 7.89682C18.0966 7.74175 17.6191 7.81928 17.0646 8.01927C16.3048 8.29305 6.58942 12.4184 6.02796 12.6569C5.49591 12.8831 4.99221 13.1296 4.99221 13.4868C4.99221 13.7381 5.14139 13.8793 5.55206 14.0258C5.9793 14.1782 7.0557 14.5044 7.69148 14.6798C8.30374 14.8487 9.00048 14.7022 9.39083 14.4595C9.80471 14.2023 14.583 11.0052 14.9257 10.725C15.2685 10.4448 15.5417 10.8036 15.2615 11.0843C14.9814 11.3645 11.7019 14.5477 11.2693 14.9883C10.7442 15.5236 11.1169 16.0781 11.4693 16.3C11.8714 16.5534 14.7648 18.4939 15.2006 18.8052C15.6364 19.1164 16.0781 19.2575 16.4829 19.2575C16.8876 19.2575 17.1005 18.7249 17.302 18.1063Z" fill="black" />
                                </svg>
                            </div>
                            <span className='contact__wrapper-content-item-descr'>uneco_bigcitylights</span>
                        </div>
                    </div>
                </div>
                <div className="mainPage__form">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Contacts;