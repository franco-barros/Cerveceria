"use client";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import BeerTypes from "../components/beertypes";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <AboutUs />
        <BeerTypes />
      </main>
    </div>
  );
}
