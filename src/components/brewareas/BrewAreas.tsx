"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/brewareas/BrewAreas.module.css";
import { Beer, Wheat, Flame, Droplets, Hop, Factory } from "lucide-react";
import BrewAreasMobile from "./brewareasmobile/BrewAreasMobile";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface BrewArea {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const brewAreas: BrewArea[] = [
  {
    id: "1",
    title: "Selección de Ingredientes",
    description:
      "Elegimos maltas premium, lúpulos frescos y levaduras cuidadas que definen el carácter templario en cada lote.",
    icon: <Wheat size={28} />,
  },
  {
    id: "2",
    title: "Maceración y Cocción",
    description:
      "Realizamos un proceso preciso de macerado utilizando temperaturas controladas y cocción lenta para extraer sabores auténticos.",
    icon: <Flame size={28} />,
  },
  {
    id: "3",
    title: "Fermentación",
    description:
      "Cada cerveza descansa el tiempo necesario para desarrollar personalidad, cuerpo y aroma propios.",
    icon: <Droplets size={28} />,
  },
  {
    id: "4",
    title: "Lupulado",
    description:
      "Aplicamos técnicas de lupulado clásicas y modernas (dry hopping, whirlpool) para lograr perfiles intensos.",
    icon: <Hop size={28} />,
  },
  {
    id: "5",
    title: "Maduración",
    description:
      "Damos a cada estilo su tiempo de reposo óptimo, logrando equilibrio profundo y suavidad templaria.",
    icon: <Factory size={28} />,
  },
  {
    id: "6",
    title: "Estilos de Cerveza",
    description:
      "Creamos estilos como IPA, Golden, Scottish y Porter, todos con nuestro sello tradicional de fuego y carácter.",
    icon: <Beer size={28} />,
  },
];

const BrewAreas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderArea = (area: BrewArea) => (
    <article key={area.id} id={`brew-${area.id}`} className={styles.areaCard}>
      {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}
      <h4>{area.title}</h4>
      <p>{area.description}</p>
    </article>
  );

  return (
    <section id="section-brewareas" className={styles.brewAreasSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Beer size={18} style={{ marginRight: "0.4rem" }} />
            Proceso Templario
          </span>
        </div>

        <p className={styles.description}>
          Elaboramos cerveza artesanal con identidad propia, combinando
          tradición medieval, fuego y materia prima seleccionada para lograr un
          sabor único.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        {isMobile ? (
          <BrewAreasMobile brewAreas={brewAreas} />
        ) : (
          <div className={styles.gridDesktop}>{brewAreas.map(renderArea)}</div>
        )}
      </FadeInOnScroll>
    </section>
  );
};

export default BrewAreas;
