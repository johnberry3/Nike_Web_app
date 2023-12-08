import Button from "../Components/Button"
import { useState } from "react"
import { bigShoe1 } from "../assets/images"
import { statistics, shoes } from "../Constant"
import { arrowRight } from "../assets/icons"
import ShoeCard from "../Components/ShoeCard"

const Hero = () => {
    const[bigShoeImg, setBigShoeImg] = 
     useState(bigShoe1)
  return (
    <section id="home" className="w-full  flex xl:flex-row flex-col justify-center min-h-screen  max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
          <h1 className="mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold"> <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br /> <span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>
          <p className="font-montserrat text-slate-gray leading-8 mt-6 mb-14">Discover stylish Nike Arrivals, quality comfort and innovation for your active life</p>
          <Button label="Shop Now" iconURL = {arrowRight}/>

          <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
              {statistics.map((stat) =>(
                  <div key={stat.value}>
                     <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
                     <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                  </div>
              ))}
          </div>

        </div>
         <div className="relative flex-1 flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img src={bigShoeImg} alt="shoe colection" width={610} height={500} className="relative object-contain z-10" />

            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
               {shoes.map((shoe)=>(
                  <div key={shoe}>
                       <ShoeCard 
                       imgURL = {shoe}
                       changeBigShoeImage = 
                       {(shoe) => setBigShoeImg 
                       (shoe)} 
                       bigShoeImg={bigShoeImg }/>
                  </div>
               ))}
            </div>
         </div>
    </section>
  )
}

export default Hero