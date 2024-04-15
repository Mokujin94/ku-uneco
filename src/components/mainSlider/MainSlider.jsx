import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './mainSlider.scss';
import LinkButton from '../linkButton/LinkButton';
import { ABOUT_ROUTE } from '../../utils/consts';

function MainSlider() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
  return (
    <div className="slider-container">

        <div className="slider__text">
          <h1 className="slider__title">Добро пожаловать в Корпоративный Университет "Объединенной энергетической компании"!</h1>
          <LinkButton width={200} path={ABOUT_ROUTE}>О нас</LinkButton>
        </div>

      <Slider {...settings}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdGtN6VUrbECwxqOQaECLEQyvZl33PWo_o1ySsdD58w&s" />
        </div>
        <div>
          <img src="https://cs12.pikabu.ru/post_img/big/2022/11/15/6/1668502661189941501.jpg" />
        </div>
        <div>
          <img src="https://pikuco.ru/upload/test_stable/7e1/7e17b26c6a4def7636ca9d426341ea6c.webp" />
        </div>
        <div>
          <img src="https://avatars.dzeninfra.ru/get-zen_doc/2359038/pub_6268ea6a468c5b6d394f2bd1_6268ed1e32485635767dc3cd/scale_1200" />
        </div>
      </Slider>
    </div>
  )
}

export default MainSlider