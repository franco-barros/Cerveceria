"use client";

import { Users } from "lucide-react";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import AboutBlock from "./aboutblock";
import AboutUsSlider from "./aboutusslider";
import { useEffect, useState } from "react";

const aboutData = [
  {
    src: "/images/Cerveza.png",
    alt: "Cerveza artesanal 1",
    text: "En Templaria elaboramos cerveza artesanal con dedicación, fuego y tradición. Seleccionamos maltas premium y lúpulos de carácter para lograr sabores auténticos.",
    reverse: false,
  },
  {
    src: "/images/Cerveza2.png",
    alt: "Cerveza artesanal 2",
    text: "Nuestro proceso respeta métodos clásicos para ofrecer una experiencia templaria intensa, cálida y llena de personalidad.",
    reverse: true,
  },
  {
    src: "/images/Cerveza4.png",
    alt: "Cerveza artesanal 3",
    text: "Creamos cervezas que destacan por su aroma y sabor, con un equilibrio perfecto entre tradición y creatividad.",
    reverse: false,
  },
];

const AboutUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Users size={18} style={{ marginRight: "0.4rem" }} />
            Sobre Nosotros
          </span>
        </div>
      </FadeInOnScroll>

      {/* MOBILE → Slider */}
      {isMobile ? (
        <AboutUsSlider data={aboutData} />
      ) : (
        /* DESKTOP → Normal blocks */
        aboutData.map((item, i) => <AboutBlock key={i} {...item} />)
      )}
    </section>
  );
};

export default AboutUs;
