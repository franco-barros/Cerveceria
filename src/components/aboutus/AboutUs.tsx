"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { Users } from "lucide-react";

const aboutData = [
  {
    src: "/about1.jpg",
    alt: "Cerveza artesanal 1",
    text: "En Templaria elaboramos cerveza artesanal con dedicación, fuego y tradición. Seleccionamos maltas premium y lúpulos de carácter para lograr sabores auténticos.",
    reverse: false, // texto izquierda, imagen derecha
  },
  {
    src: "/about2.jpg",
    alt: "Cerveza artesanal 2",
    text: "Nuestro proceso respeta métodos clásicos para ofrecer una experiencia templaria intensa, cálida y llena de personalidad.",
    reverse: true, // imagen izquierda, texto derecha
  },
  {
    src: "/about3.jpg",
    alt: "Cerveza artesanal 3",
    text: "Creamos cervezas que destacan por su aroma y sabor, con un equilibrio perfecto entre tradición y creatividad.",
    reverse: false, // texto izquierda, imagen derecha
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      {/* BADGE */}
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Users size={18} style={{ marginRight: "0.4rem" }} />
            Sobre Nosotros
          </span>
        </div>
      </FadeInOnScroll>

      {/* DESCRIPCIONES DESKTOP */}
      {aboutData.map((item, index) => (
        <FadeInOnScroll key={index}>
          <div className={styles.desktopLayout}>
            {!item.reverse ? (
              <>
                <div className={styles.infoWrapper}>
                  <div className={styles.textWrapper}>{item.text}</div>
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <div className={styles.textWrapper}>{item.text}</div>
                </div>
              </>
            )}
          </div>
        </FadeInOnScroll>
      ))}

      {/* DESCRIPCIONES MOBILE */}
      <div className={styles.mobileLayout}>
        {aboutData.map((item, index) => (
          <FadeInOnScroll key={index}>
            <div className={styles.mobileImage}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.descriptionCard}>{item.text}</div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
