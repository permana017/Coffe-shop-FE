import React from "react";
import "../ReviewCard/style.css"
import "src/style/Global.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Fade from 'react-reveal/Fade';

const Slider = () => {
    return (
        <Swiper
            // slidesPerView={3}
            spaceBetween={40}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  "@0.75": {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
            }}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="mySwiper">
            {[1,2,3,4,5,6,7,8,9].map((item,i)=>(
                <SwiperSlide  className="flex justify-center">
                    <Fade bottom delay={i * 1 * 100}>
                        <div key={i} className="w-full flex justify-center my-10">
                            <div className="card">
                                <div className="navbar-card">
                                    <div className="profile">
                                        <img src={require("src/assets/Ellipse 175.webp")} alt="Ellipse"/>
                                        <div>
                                            <h5>Viezh Robert</h5>
                                            <p>Warsaw, Poland</p>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <p>4.5</p>
                                        <img src={require("src/assets/star.png")} alt="star"/>
                                    </div>
                                </div>
                                <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and
                                    the coffee and meals tho. I like it here!! Very recommended!</p>
                            </div>
                        </div>
                    </Fade>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

function ReviewCard() {
    return (
        <div>
            <section className="review-costumer">
                <div className="container">
                    <div className="inner">
                        <div className="w-full md:w-1/2 flex flex-col items-center mb-5">
                            <h2 className="w-full md:w-2/3 text-center text-2xl mt-10 md:text-3xl font-bold text-center">Loved by Thousands of Happy Customer</h2>
                            <p className="w-full text-center text-sm text-[#4F5665]">These are the stories of our customers who have visited us with great pleasure.</p>
                        </div>
                        <div className="w-full overscroll-x-none">
                            <Slider/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReviewCard