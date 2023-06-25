import { Swiper, SwiperSlide } from "swiper/react"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Image1 from "../assets/img/1.jpg";
import Image2 from "../assets/img/2.jpg";
import Image7 from "../assets/img/7.jpg";

const Serivces = () => {
    return (
        <div id="services" className="h-[50vh] md:h-screen grid content-center">
            <h1 className="text-2xl text-sky-600 text-center p-6">Services</h1>
            <Swiper 
                effect={ "coverflow" }
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={ "auto" }
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                className="w-3/4 md:w-2/4 h-full md:h-full rounded-xl shadow-xl"
            >
                <SwiperSlide>
                    <div className="relative bg-cover">
                    <img src={Image1} alt="" />
                    <a href="#website">
                        <div className="cursor-pointer absolute bottom-0 w-full bg-slate-400/70 p-4">
                            <p className="text-white text-center">Website Design<AiOutlineArrowRight className='inline  ml-2' /></p>
                        </div>
                    </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative bg-cover">
                        <img src={Image2} alt="" />
                        <a href="#design">
                            <div className="cursor-pointer absolute bottom-0 w-full bg-slate-400/70 p-4">
                                <p className="text-white text-center">Desain<AiOutlineArrowRight className='inline  ml-2' /></p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative bg-cover">
                        <img src={Image7} alt="" />
                        <a href="#article">
                            <div className="cursor-pointer absolute bottom-0 w-full bg-slate-400/70 p-4">
                                <p className="text-white text-center">Pembuatan Artikel<AiOutlineArrowRight className='inline  ml-2' /></p>
                            </div>
                        </a>    
                    </div>
                </SwiperSlide>
                
                <div className="">
                    <div className="swiper-button-prev slider-arr">
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="swiper-button-next slider-arr">
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Serivces