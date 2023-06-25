import Navbar from "./components/Navbar"
import MainSlider from "./components/HeroSlider"
import Solutions from "./components/Solutions"
import Serivces from "./components/Services"
import Vision from "./components/Vision"
import Join from "./components/Join"
import WebDesign from "./components/WebDesign"
import Design from "./components/Design"
import Article from "./components/Article"
import Employees from "./components/Employees"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return (
    <>
      {loading === false ? (
        <>
          <Navbar />
          <MainSlider />
          <Solutions />
          <Vision />
          <Serivces />
          <WebDesign />
          <Design />
          <Article />
          <Employees />
          <Join />
          <Footer />
        </>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <ReactLoading type="spin" color="#0000FF"
                  height={100} width={50} />
        </div>
      )}
    </>
  )
}

export default App