/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Carousel } from "antd";
import {
  InstagramOutlined,
  GoogleOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./CarouselComponent.css";

const CarouselComponent = ({ onImageLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onImageLoad(); // Notifica al componente padre que la imagen se ha cargado
  };

  useEffect(() => {
    // Detecta el tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1003); // Cambia este valor según tus media queries
    };

    handleResize(); // Inicializa el valor al cargar el componente
    window.addEventListener('resize', handleResize); // Añade el event listener para cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el event listener
    };
  }, []);

  return (
    <>
      {/* Sección del banner para PC */}
      {!isMobile && (
        <div className="pc-banner">
          <section className="custom-carousel">
            <div id="inicio">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/banners%2Fbanner.png?alt=media&token=530dd1b9-ad3f-42d0-b0cc-4ea4f7974816"
                className="carousel-content"
                alt="PC Banner"
                onLoad={handleImageLoad}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
              {imageLoaded && (
                <div className="carousel-text">
                  {/* Título principal */}
                  <h1 className="carousel-title">TALLER DE MOTOS</h1>
                  {/* Subtítulo */}
                  <h2 className="carousel-subtitle">DANY</h2>
                  {/* Descripción */}
                  <p className="carousel-description">
                    Mantenimiento | Restauraciones | Diagnosticos
                  </p>

                  {/* Sección de redes sociales */}
                  <div className="social-media-icons">
                  <a
                    href="mailto:danyaleman53@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoogleOutlined
                      className="custom-icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/dany_aleman_11/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramOutlined className="custom-icon" />
                  </a>
                    <a
                    href="https://wa.me/+50498466995"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppOutlined className="custom-icon" />
                  </a>
                  </div>
                  <div className="marcas-track">
                    {[...Array(2)].map((_, index) => (
                      <div key={index} className="marcas-slide">
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca1.png?alt=media&token=b41466e1-69fc-47be-bafe-599d82ab8213" alt="yamaha" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca2.png?alt=media&token=28b5f6e8-acb4-4971-bbe6-eee1aa3bf41b" alt="honda" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca3.png?alt=media&token=35a6933d-e554-4d6c-87a4-af4b7f4d5f6b" alt="ktm" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca7.png?alt=media&token=8d6abf86-1f6a-4ddc-9adc-a2cb6911f79e" alt="genesis" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca6.png?alt=media&token=d43a50ba-ba1d-49b4-bae1-e1d7861d8f55" alt="cfmoto" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca4.png?alt=media&token=87fc3b7f-f724-4b53-87f1-994d18c7f44b" alt="zmoto" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca5.png?alt=media&token=6c01f1e5-a029-4711-b056-85455b782def" alt="bajaj" />/
                      </div>
                    ))}
                  </div>    
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* Sección del banner para móvil */}
      {isMobile && (
        <div className="mobile-banner">
          <Carousel className="custom-carousel">
            <div id="inicio">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/banners%2FbannerMobil.png?alt=media&token=08809d2f-53a2-4037-ab29-49e2f07b96d0"
                className="carousel-content"
                alt="Mobile Banner"
                onLoad={handleImageLoad}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
              {imageLoaded && (
                <div className="carousel-text">
                  {/* Título principal */}
                  <h1 className="carousel-title">TALLER DE MOTOS</h1>
                  {/* Subtítulo */}
                  <h2 className="carousel-subtitle">DANY</h2>
                  {/* Descripción */}
                  <p className="carousel-description">
                    ◎Mantenimiento ◎Restauraciones ◎Enderezamiento
                  </p>
                  {/* Sección de redes sociales */}
                  <div className="social-media-icons">
                    <a
                      href="https://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GoogleOutlined className="custom-icon" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramOutlined className="custom-icon" />
                    </a>
                    <a
                      href="https://www.whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppOutlined className="custom-icon" />
                    </a>
                  </div>
                  <div className="marcas-track">
                    {[...Array(1)].map((_, index) => (
                      <div key={index} className="marcas-slide">
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca1.png?alt=media&token=b41466e1-69fc-47be-bafe-599d82ab8213" alt="yamaha" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca2.png?alt=media&token=28b5f6e8-acb4-4971-bbe6-eee1aa3bf41b" alt="honda" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca3.png?alt=media&token=35a6933d-e554-4d6c-87a4-af4b7f4d5f6b" alt="ktm" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca7.png?alt=media&token=8d6abf86-1f6a-4ddc-9adc-a2cb6911f79e" alt="genesis" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca6.png?alt=media&token=d43a50ba-ba1d-49b4-bae1-e1d7861d8f55" alt="cfmoto" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca5.png?alt=media&token=6c01f1e5-a029-4711-b056-85455b782def" alt="bajaj" />/
                        <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca4.png?alt=media&token=87fc3b7f-f724-4b53-87f1-994d18c7f44b" alt="zmoto" />/
                      </div>
                    ))}
                  </div>    
                </div>
              )}
            </div>
          </Carousel>
        </div>
      )}
    </>
  );
};

export default CarouselComponent;
