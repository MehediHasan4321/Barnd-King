import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const ImageSlider = ({images}) => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 4000,
      speed:900
    }
    return (
        <div>
            <Slider {...settings}>
                {
                    images.map(img=><div className=' h-[40vh]'>
                        <img className='h-full w-full' src={img.url} alt="" />
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default ImageSlider;