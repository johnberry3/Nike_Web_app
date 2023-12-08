import { CustomeReviews, Footer, Hero, PopularProduct, Service, SpecialOffers, Subscribe, SuperQuality } from "./Section";
import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
     <Nav/>
     <section className="xl:padding-l wide:padding-r padding-b">
       <Hero/>
     </section>
     <section className="padding">
       <PopularProduct/>
     </section>
     <section className="padding">
       <SuperQuality/>
     </section>
     <section className="padding-x py-10">
       <Service/>
     </section>
     <section className="padding">
       <SpecialOffers/>
     </section>
     <section className="bg-pale-blue padding">
       <CustomeReviews/>
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
     </section>
     <section className="padding bg-black padding-x padding-t pb-8">
       <Footer/>
     </section>
  </main>
);

export default App;
