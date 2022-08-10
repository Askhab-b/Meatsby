import Slider from 'react-slick';

// import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus
          totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod
          debitis nostrum necessitatibus quis dolorem quas!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src='/assets/images/ava-1.jpg' alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus
          totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod
          debitis nostrum necessitatibus quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src='/assets/images/ava-2.jpg' alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus
          totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod
          debitis nostrum necessitatibus quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src='/assets/images/ava-3.jpg' alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
