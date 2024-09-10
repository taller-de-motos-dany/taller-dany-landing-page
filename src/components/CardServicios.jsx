/* eslint-disable react/prop-types */
import  { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './CardServicios.css';
import  'react-icons/fa';
import  'antd/es/typography/Paragraph';

const CardServicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = 4;

  const services = [
    {
      imagencard: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-cards-portada%2FimgMantenimiento.png?alt=media&token=ad23b6e6-0657-450c-91b7-21ba98c8cc39",
      title: "Mantenimiento",
      description: "Ofrecemos servicios completos de mantenimiento preventivo para mantener tu motocicleta en óptimas condiciones. Desde cambios de aceite hasta ajustes de frenos, nos aseguramos de que tu moto esté siempre lista para rodar.",
      prices: ["Desde L.495"]
    },
    {
      imagencard: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-cards-portada%2FimgRestauraciones.png?alt=media&token=689dbd96-a051-4110-82f5-c4afaef33495",
      title: "Restauraciones",
      description: "Especialistas en devolverle la vida a motocicletas clásicas o dañadas. Nuestro equipo realiza restauraciones detalladas para que tu moto recupere su brillo original y funcione como nueva.",
      prices: ["Precio varia por modelo"]
    },
    {
      imagencard: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-cards-portada%2FimgDiagnosticos.png?alt=media&token=f90d16c3-ceb3-4837-bb29-7795ff7929f9",
      title: "Diagnosticos",
      description: "Identificamos con precisión cualquier problema mecánico o eléctrico en tu motocicleta utilizando herramientas de diagnóstico avanzadas, garantizando una reparación eficiente y efectiva.",
      prices: ["Desde L.199"]
    },
    {
      imagencard: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-cards-portada%2FimgElectricidad.png?alt=media&token=e7c0eebb-8aec-484c-b45c-34dfec9bb49b",
      title: "Sistema Electrico",
      description: "Solucionamos problemas en el sistema eléctrico de tu moto, desde fallos en el encendido hasta problemas de iluminación, asegurando que cada componente funcione correctamente.",
      prices: ["Precio varia por falla"]
    }
  ];
  
  

  const CustomCard = ({ service }) => (
    <div className="custom-cardP">
      <div className="card-image-container">
        <img className="card-image" src={service.imagencard} alt="Main Image" />
        <h1 className="card-title">{service.title}</h1>
      </div>
      <div className="card-details">
        <div className="card-info">
          <p className="descripcion-personalizada">
           
            {service.description}
          </p>
          <div className="card-prices">
            {service.prices.map((price, index) => (
              <span key={index} className="price-tag">{price}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const slides = services.map((service, index) => (
    <CustomCard key={index} service={service} />
  ));

  const handleScroll = (e) => {
    const newSlide = Math.round((e.target.scrollLeft / e.target.scrollWidth) * totalSlides);
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (slideRef.current) {
        slideRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    
    <Content className="seccion-personalizada">
      <div id='servicios' className="contenedor-titulo" style={{ marginBottom: "10px" }}>
        <div className="contenedor-flechas">
          <div className="flecha-izquierda">&#187;</div>
          <div className="flecha-derecha">&#187;</div>
          <h2 className="titulo-principal">
            Servic<span className="texto-destacado">ios</span>
          </h2>
        </div>
      </div>
      <div className="desktop-view">
        <Row gutter={[16, 16]} justify="center">
          {services.map((service, index) => (
            <Col span={6} key={index}>
              <CustomCard service={service} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="carousel-container mobile-view">
        <div className="carousel" ref={slideRef}>
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              {slide}
            </div>
          ))}
        </div>
        <div className="scrollbar-container">
          <div className="scrollbar" style={{ width: `${(currentSlide + 1) * (100 / totalSlides)}%`, left: `${currentSlide * (100 / totalSlides)}%` }}></div>
        </div>
      </div>
    </Content>
  );
};

export default CardServicios;
