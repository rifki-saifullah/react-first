import { AiOutlineArrowRight } from "react-icons/ai"
import Image7 from "../assets/img/8.jpg";

const Join = () => {
    return (
        <div id="join" className='h-full pb-20 flex flex-col md:p-0 md:h-screen md:grid md:grid-cols-2 bg-sky-100/50'>
            <div className='px-16 self-center'>
                <h1 className='text-sky-800 md:text-4xl text-2xl pt-8 pb-4'>Gabung bersama kami</h1>
                <p className='text-sm pb-3 md:text-lg'>Bergabunglah dengan kami yang terdiri dari mahasiswa untuk menciptakan web, artikel, dan desain yang kreatif. Kami menawarkan kesempatan bagi Anda untuk mengasah keterampilan desain dalam pembuatan web menarik, penulisan artikel informatif, dan desain yang memukau.</p>
                <p className='text-sm pb-3 md:text-lg'>Kami memberikan platform untuk eksplorasi kreatif, pengembangan portofolio, dan pengalaman. Bergabunglah sekarang dan menjadi bagian dari komunitas mahasiswa desain yang inspiratif dalam menciptakan suatu karya.</p>
                <a href="" className='mb-8 text-sky-600 text-sm md:text-lg inline-block after:content-[""] after:block after:scale-x-0 after:duration-300 after:ease-linear after:border-2 after:border-solid after:border-sky-600 hover:duration-300 hover:text-sky-800 hover:after:scale-50'>Apply now<AiOutlineArrowRight className='inline  ml-2' /></a>
            </div>
            <div className='w-[50%] flex md:justify-self-center self-center shadow-2xl'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-once="true"
            >
                <img src={Image7} alt="" className='justify-self-end bg-cover rounded-xl' />
            </div>
        </div>
    )
}

export default Join