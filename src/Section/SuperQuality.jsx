import Button from "../Components/Button"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="About-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-col flex-1">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
          <h1 className="text-4xl font-palanquin lg:max-w-lg capitalize font-bold"> <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You</span>
          <br /> <span className="text-coral-red">super</span> <span className="text-coral-red">Quality</span> Shoes</h1>
          <p className="mt-2 info-text lg:max-w-lg info-text">Ensuring premium comfoert and style our meticulously crafted footwear is designed to elevate your experience providing you with unmatched quality, innovations and a touch of elegance <br />Our dedication to detail and excellence ensures your satisfaction</p>

          <div className="mt-11">
          <Button  label="View details"/>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} object-contain />

        </div>
    </section>
  )
}

export default SuperQuality