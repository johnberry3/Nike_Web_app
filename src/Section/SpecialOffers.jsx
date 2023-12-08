import { offer } from "../assets/images"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-start max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img src={offer} alt="" width={773} height={687} object-contain w-full />
        </div>
    </section>
  )
}

export default SpecialOffers