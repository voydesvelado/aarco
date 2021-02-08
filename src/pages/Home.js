import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import car from "../assets/svg/car.svg";
import heart from "../assets/svg/heart.svg";
import home from "../assets/svg/home.svg";
import sun from "../assets/svg/sun.svg";
import rocket from "../assets/svg/rocket.svg";
import eye from "../assets/svg/eye.svg";
import star from "../assets/svg/star.svg";
import ServicesCard from "../components/ServicesCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "Power3.in" },
    });
    tl.to(heroRef.current, 0, { css: { visibility: "visible" } }).from(
      h1Ref.current,
      {
        opacity: 0,
        y: 50,
      }
    );

    gsap.from(servicesRef.current, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        trigger: servicesRef.current,
        id: "services",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(aboutRef.current, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        trigger: aboutRef.current,
        id: "about",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(contactRef.current, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        trigger: contactRef.current,
        id: "form",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const carImage =
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  const homeImage =
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  const sunImage =
    "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

  const doctorImage =
    "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1275&q=80";

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <main className="hero__banner" id="start" ref={heroRef}>
        <div className="container">
          <div className="row" ref={h1Ref}>
            <div className="col-12">
              <h1 className="text-center">
                Hoy es un buen día para asegurar el mañana.
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <a href="#services" className="btn aarco__btn">
                Conoce más aquí
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* OUR SERVICES */}
      <section id="services" ref={servicesRef} className="services__banner">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1>Nuestros seguros</h1>
            </div>
          </div>
          <div className="row">
            <ServicesCard
              h1="Autos"
              p="Protege los daños o pérdida del automóvil y los daños o perjuicios
                  causados a la propiedad ajena o a terceras personas con motivo
                  del uso del automóvil"
              img={carImage}
              svg={car}
            />
            <ServicesCard
              h1="Gastos Médicos Mayores"
              p="Protege los honorarios médicos, hospitalarios y demás que sean necesarios para la recuperación de la salud o vigor vital del asegurado, cuando se hayan afectado por causa de un accidente o enfermedad"
              img={doctorImage}
              svg={heart}
            />
            <ServicesCard
              h1="Hogar"
              p="Protege a la vivienda y asus habitantes contra daños que pudieran sufrir a causa de fenómenos naturales o robo, daños que pueda ocasionar una mascota, entre otras cosas"
              img={homeImage}
              svg={home}
            />
            <ServicesCard
              h1="Vida"
              p="Es un respaldo económico el cual su función principal es indemnizar a los beneficiarios designados con una suma de dinero en caso del fallecimiento de la persona asegurada"
              img={sunImage}
              svg={sun}
            />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about__banner">
        <div className="container" id="about" ref={aboutRef}>
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="text-white mb-5">Quiénes somos</h1>
              <p className="text-white">
                Alatorre Avendaño Recursos Corporativos, S.C. nace en 1986 como
                una sociedad promotora de seguros. En la búsqueda de diferentes
                alternativas de comercialización y con el fin de ampliar sus
                servicios se crea AARCO Agente de Seguros y de Fianzas, S.A de
                C.V. que le permite actuar como corredor de seguros y de fianzas
                con las principales instituciones del ramo establecidas en
                México
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="about__card text-center">
                <img src={rocket} className="about__svg" alt="misión" />
                <h3>Misión</h3>
                <p>Atracción y desarrollo de personas.</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="about__card text-center">
                <img src={eye} className="about__svg" alt="visión" />
                <h3>Visión</h3>
                <p>Crecimiento.</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="about__card text-center">
                <img src={star} className="about__svg" alt="filosofía" />
                <h3>Filosofía</h3>
                <p>Servicio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="form__banner" id="form" ref={contactRef}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 text-center">
              <h1>Contáctanos</h1>
              <p>
                Llena este formulario y uno de nuestros asesores se pondrá en
                contacto contigo.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer__banner mt-4">
        <div className="container">
          <div className="row py-4">
            <div className="col-12 text-center">
              <p>Creado por David con ❤️ para Aarco.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
