import AOS from 'aos';
import 'aos/dist/aos.css';

const Vision = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 text-center px-12 md:p-5 md:pb-28 pb-10">
            <div className="p-6"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                <h1 className="text-lg text-sky-800">Values</h1>
                <p className='text-sm pb-3 md:text-lg'>Kami mempercayai kekuatan kolaborasi, baik antara mahasiswa maupun dengan klien, untuk menciptakan solusi desain yang lebih baik.</p>
            </div>
            <div className="p-6"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                <h1 className="text-lg text-sky-800">Visi</h1>
                <p className='text-sm pb-3 md:text-lg'>Menjadi wadah untuk menghubungkan klien dengan talenta-talenta muda yang serta menjadi inspirasi dan inovasi di dunia desain.</p>
            </div>
            <div className="p-6"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                <h1 className="text-lg text-sky-800">Misi</h1>
                <p className='text-sm pb-3 md:text-lg'>Mendorong inovasi dan eksperimen dalam desain dengan mengedepankan ide-ide segar dan perspektif-perspektif baru dari mahasiswa.</p>
            </div>
        </div>
    )
}

AOS.init();

export default Vision;