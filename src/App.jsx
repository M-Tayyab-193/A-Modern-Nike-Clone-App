import React from "react";
import {
  Hero,
  PopularProducts,
  CustomerReviews,
  Services,
  SpecialOffer,
  SuperQuality,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
      </section>
    <section className="padding">
      <PopularProducts />
      </section>
    <section className="padding">
      <SuperQuality/>
      </section>
    <section className="padding">
      <Services/>
      </section>
    <section className="padding">
      <SpecialOffer/>
      </section>
    <section className="padding bg-blue-100/40">
    <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
      </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer/>
      </section>
  </main>
);

export default App;
