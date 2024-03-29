import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const TestBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        Điều hấp dẫn là Bali rất đa dạng, khu thì tiệc tùng sôi động, có chỗ thì hoang sơ kỳ vĩ. Bali là nơi giao thoa giữa văn hóa, tôn giáo và thiên nhiên vô cùng ấn tượng. Bali có ruộng bậc thang, núi lửa, rất nhiều bãi biển, đảo đẹp. Bên cạnh đó còn những ngôi đền linh thiêng, n chỗ sống ảo, cùng hơn 30 thác hoang sơ.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Sĩ Hiển</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Trong tour Thái Lan 5 ngày 4 đêm, nhà mình được ở khách sạn 4 sao kể cả tại Pattaya và Bangkok. Ở Pattaya, khách sạn có bao gồm cả bể bơi, khu ăn uống, quầy bar
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Minh hieu</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Nếu bạn là một người thích đi bộ và tận hưởng khí trời thì tại Lệ Giang có một tuyến đường đi bộ dẫn bạn đến núi tuyết Ngọc Rồng. Phong cảnh trên đường đi rất đẹp với rừng vân sam nguyên thủy, rừng đỗ quyên, đồng cỏ và hồ trên núi cao.

Từ Lệ Giang, bạn có thể đi lên núi từ thôn Ngọc Hồ. Tuy nhiên để đảm bảo an toàn, bạn phải nhờ một hướng dẫn viên địa phương từ làng đi lên núi. Chỉ mất một ngày để đi bộ trên núi tuyết Ngọc Long. Bạn thường phải bắt đầu vào khoảng 8:00 sáng và trở về làng vào khoảng 6:00 chiều.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Hoang Ha</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
          explicabo provident hic distinctio molestias voluptates nobis alias
          placeat suscipit earum debitis recusandae voluptate illum expedita
          corrupti aliquid doloribus delectus?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Sĩ Hiển</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestBlog;
