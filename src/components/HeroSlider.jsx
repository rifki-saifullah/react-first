import { MenuNav, Slide } from "hero-slider";
import {AiOutlineArrowRight} from 'react-icons/ai'
import HeroSlider from "hero-slider/dist/HeroSlider";
import Image1 from "../assets/img/1.jpg";
import Image2 from "../assets/img/2.jpg";
import Image3 from "../assets/img/3.jpg";

const MainSlider = () => {
    return (
        <>
            <div id="home"></div>
            <HeroSlider 
                className="-z-10"
                height={"100vh"}
                autoplay
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide) => console.debug("onSliding(nextSlide)", nextSlide),
                    onBeforeSliding: (previousSlide, nextSlide) => console.debug("onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                    onAfterSliding: (nextSlide) => console.debug("onAfterSliding(nextSlide): ", nextSlide )
                }}
            >
                <Slide
                    label=""
                    background={{
                        backgroundImageSrc: Image2
                    }
                } 
                >
                    <div className="z-10 w-screen h-screen grid content-center text-white bg-slate-500/40">
                        <div className="w-full h-4/5 md:w-3/5 p-8 justify-self-center">
                            <h1 className="md:text-4xl text-2xl text-shadow pb-4">Web Design</h1>
                            <p className="text-base md:text-xl pb-4 shadow-sky-600">Dapatkan jasa web design yang menarik dari tim mahasiswa kami. Kami menciptakan website yang kreatif, responsif, dan sesuai dengan identitas merek Anda. Hubungi kami sekarang untuk hasil yang memukau!</p>
                            <a href="#website" className="shadow-sm rounded drop-shadow-2x bg-sky-600 p-2 text-sky-100 text-lg inline-block after:duration-300  after:border-sky-500 hover:bg-sky-700 hover:text-white hover:duration-300">Pelajari lebih lanjut <AiOutlineArrowRight className="inline  ml-2" /></a>
                        </div>
                    </div>
                </Slide>
                <Slide
                    label=""
                    background={{
                        backgroundImageSrc: Image1
                    }
                } 
                >
                    <div className="z-10 w-screen h-screen grid content-center text-white bg-slate-500/50">
                        <div className="w-full h-4/5 md:w-3/5 p-8 justify-self-center">
                            <h1 className="md:text-4xl text-2xl py-5 drop-shadow-2x drop-shadow-2xl shadow-sky-600">Design</h1>
                            <p className="text-base md:text-xl pb-4 shadow-sky-600">Kami menyediakan desain web, logo, brosur, dan banyak lagi. Percayakan pada kami untuk memberikan hasil desain yang memukau dan memenuhi ekspektasi Anda. Hubungi kami sekarang dan berikan sentuhan kreatif pada proyek Anda!</p>
                            <a href="#design" className="rounded drop-shadow-2x bg-sky-600 p-2 text-sky-100 text-lg inline-block after:duration-300  after:border-sky-500 hover:bg-sky-700 hover:text-white hover:duration-300">Pelajari lebih lanjut <AiOutlineArrowRight className="inline  ml-2" /></a>
                        </div>
                    </div>
                </Slide>
                <Slide
                    label=""
                    background={{
                        backgroundImageSrc: Image3
                    }
                } 
                >
                   <div className="z-10 w-screen h-screen grid content-center text-white bg-slate-500/60">
                        <div className="w-full h-4/5 md:w-3/5 p-8 justify-self-center">
                            <h1 className="drop-shadow-2xl shadow-sky-600 md:text-4xl text-2xl">Pembuatan Artikel</h1>
                            <p className="text-base md:text-xl pb-4">Ingin artikel yang menarik dan berkualitas? Kami di sini untuk membantu! Kami dapat menulis artikel dalam berbagai topik, mulai dari berita, teknologi, hingga gaya hidup.</p>
                            <a href="#article" className="drop-shadow-2xl shadow-sky-600 rounded drop-shadow-2x bg-sky-600 p-2 text-sky-100 text-lg inline-block after:duration-300  after:border-sky-500 hover:bg-sky-700 hover:text-white hover:duration-300">Pelajari lebih lanjut <AiOutlineArrowRight className="inline  ml-2" /></a>
                        </div>
                    </div>
                </Slide>
                <MenuNav />
            </HeroSlider>
        </>
    )
}

export default MainSlider;