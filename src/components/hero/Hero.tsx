"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Fondo negro con textura (del CSS) */}
      <div className={styles.overlay} />

      {/* Contenido */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className={styles.logoLayer}>
          <div className={styles.logoInner}>
            <Image
              src="/icons/Templaria.png"
              alt="Templaria logo"
              fill
              sizes="(max-width: 768px) 60vw, 400px"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <h1 className={styles.title}>
          Cerveza artesanal hecha con pasión templaria.
        </h1>

        <p className={styles.phrase}>
          Tradición, fuego, malta y carácter. Una experiencia auténtica.
        </p>

        <div className={styles.buttons}>
          <button
            onClick={() => handleScrollTo("contact")}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Contactar
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
