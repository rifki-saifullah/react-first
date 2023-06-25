import { AiOutlineArrowRight } from "react-icons/ai"
import Image7 from "../assets/img/7.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Design = () => {
    return (
    <div id="design" className='h-full pt-10 flex flex-col md:p-0 md:h-screen md:grid md:grid-cols-2 bg-sky-100'>
         <div className='w-[80%] flex md:justify-self-center self-center shadow-2xl'
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true"
         >
            <img src={Image7} alt="" className='justify-self-end bg-cover rounded-xl' />
        </div>
        <div className='px-16 self-center'
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
        >
            <h1 className='text-sky-800 md:text-4xl text-2xl pt-8 pb-4'>Design</h1>
            <p className='text-sm pb-3 md:text-lg'>Dapatkan desain kreatif dari tim kami! Kami adalah mahasiswa dengan keahlian dalam pembuatan desai. Apapun kebutuhan desain Anda, kami siap membantu. </p>
            <p className='text-sm pb-3 md:text-lg'>Kami menyediakan desain web, logo, brosur, dan banyak lagi. Percayakan pada kami untuk memberikan hasil desain yang memukau dan memenuhi ekspektasi Anda. Hubungi kami sekarang dan berikan sentuhan kreatif pada proyek Anda!</p>
            <a href="https://wa.me/6283838719333?text=Saya tertarik untuk menjelajahi layanan yang Anda tawarkan dalam web desain, desain grafis, dan jasa pembuatan artikel." className='mb-8 text-sky-600 text-sm md:text-lg inline-block after:content-[""] after:block after:scale-x-0 after:duration-300 after:ease-linear after:border-2 after:border-solid after:border-sky-600 hover:duration-300 hover:text-sky-800 hover:after:scale-50'>Hubungi kami<AiOutlineArrowRight className='inline  ml-2' /></a>
        </div>
    </div>
    )
}

AOS.init();

export default Design