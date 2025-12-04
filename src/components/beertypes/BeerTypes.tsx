"use client";

import Image from "next/image";
import styles from "../../styles/beertypes/BeerTypes.module.css";

const beers = [
  {
    id: 1,
    name: "Golden Ale",
    style: "Rubia Suave",
    abv: "5.2%",
    image: "/images/Cerveza1.png",
    description: "Refrescante, suave y con notas leves a cereal.",
  },
  {
    id: 2,
    name: "Irish Red",
    style: "Roja Caramelizada",
    abv: "5.0%",
    image: "/images/Cerveza5.png",
    description: "Cuerpo medio, toques a caramelo y leve tostado.",
  },
  {
    id: 3,
    name: "Stout",
    style: "Negra Cremosa",
    abv: "6.0%",
    image: "/images/Cerveza6.png",
    description: "Oscura, intensa y con notas a café y chocolate.",
  },
];

export default function BeerTypes() {
  return (
    <section className={styles.section} id="beers">
      <h2 className={styles.title}>Nuestras Cervezas</h2>

      <div className={styles.grid}>
        {beers.map((beer) => (
          <div key={beer.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={beer.image}
                alt={beer.name}
                fill
                className={styles.image}
              />
            </div>

            <h3 className={styles.name}>{beer.name}</h3>
            <p className={styles.style}>{beer.style}</p>
            <span className={styles.abv}>ABV {beer.abv}</span>
            <p className={styles.description}>{beer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
