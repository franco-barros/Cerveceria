"use client";

import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "aboutus", label: "Sobre Nosotros" },
    { id: "faq", label: "Preguntas Frecuentes" },
  ];

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        {/* --- DESCRIPCIÓN PRINCIPAL --- */}
        <div className={styles.section}>
          <p className={styles.description}>
            En Templaria elaboramos cerveza artesanal inspirada en la tradición,
            el fuego y el espíritu medieval. Utilizamos maltas premium,
            fermentación cuidada y recetas que buscan un sabor auténtico y lleno
            de carácter templario.
          </p>
        </div>

        {/* --- ENLACES SOLO EN HOME --- */}
        {isHome && (
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Enlaces</h4>
            <ul className={styles.list}>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2025 Templaria Cerveza Artesanal | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
