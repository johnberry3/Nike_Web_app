const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 justify-center items-center rounded-full bg-coral-red flex">
        <img src={imgURL} alt="Truckfast" width={24} height={24} />
        </div>
        <h3 className="text-2xl leading-7 font-bold mt-5 font-palaquin">{label}</h3>
        <p className="font-monteserrat leading-normal text-slate-gray mt-5 text-lg">{subtext}</p>

    </div>
  )
}

export default ServiceCard