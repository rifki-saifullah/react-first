import {AiOutlineArrowRight} from 'react-icons/ai'
import Image9 from "../assets/img/9.jpg";

const Solutions = () => {
    return (
        <>
            <div id='about' className='px-10 py-14 flex flex-col md:p-0 md:h-screen md:grid md:grid-cols-2 '>
                <div className='md:w-4/5 justify-self-center self-center'>
                    <img src={Image9} alt="" className='bg-cover rounded-tr-[60px]' />
                </div>
                <div className='justify-self-center self-center'>
                    <h1 className='text-sky-800 md:text-4xl text-2xl pt-8 pb-4'>Web Works</h1>
                    <p className='text-sm pb-3 md:text-lg'>Anda mencari website pembuatan web design, artikel, dan design yang kreatif serta berkualitas ?, maka kami dengan memperkenalkan platform kami yang menawarkan layanan tersebut. Kami adalah komunitas yang terdiri dari mahasiswa berbakat yang memiliki minat dan keahlian di bidang desain.</p>
                    <p className='text-sm pb-3 md:text-lg'>Dengan antusiasme dan dedikasi kami, kami menyediakan solusi desain yang inovatif, menarik, dan sesuai dengan kebutuhan Anda. Setiap proyek kami dihasilkan melalui kerja sama tim yang solid, dengan mempertimbangkan ide-ide segar dan perspektif-perspektif baru yang kami miliki sebagai mahasiswa.</p>
                    <a href="#services" className='text-sky-600 text-sm md:text-lg inline-block after:content-[""] after:block after:scale-x-0 after:duration-300 after:ease-linear after:border-2 after:border-solid after:border-sky-600 hover:duration-300 hover:text-sky-800 hover:after:scale-50'>Lihat layanan<AiOutlineArrowRight className='inline  ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default Solutions;