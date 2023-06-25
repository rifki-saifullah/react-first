const Employees = () => {
    return (
        <div className="pb-1">
            <h1 className="underline text-2xl text-sky-800 text-center pb-8">The Employees</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 md:text-center px-12 md:pb-10 pb-10 ">
                <div className="p-6 bg-slate-200 md:bg-transparent rounded-xl shadow-md md:shadow-none">
                    <h1 className="text-lg text-sky-800">Wahyudin</h1>
                    <p className='text-sm md:text-lg'>220511145</p>
                    <p className='text-sm md:text-lg'>Universitas Muhammadiyah Cirebon</p>
                </div>
                <div className="p-6 bg-slate-200 md:bg-transparent rounded-xl shadow-md md:shadow-none">
                    <h1 className="text-lg text-sky-800">Rifki Saifullah</h1>
                    <p className='text-sm md:text-lg'>220511145</p>
                    <p className='text-sm md:text-lg'>Universitas Muhammadiyah Cirebon</p>
                </div>
                <div className="p-6 bg-slate-200 md:bg-transparent rounded-xl shadow-md md:shadow-none">
                    <h1 className="text-lg text-sky-800">Muhamad Sauqi Kabir</h1>
                    <p className='text-sm md:text-lg'>220511145</p>
                    <p className='text-sm md:text-lg'>Universitas Muhammadiyah Cirebon</p>
                </div>
            </div>
        </div>
    )
}
export default Employees