/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Row, Col, Typography } from "antd";
import "./QuienesSomos.css";

const { Paragraph } = Typography;

const QuienesSomos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="quienes-somos"
      className="contenedor"
      role="region"
      aria-labelledby="titulo-quienes-somos"
    >
      <div className="seccion-personalizada">
        <Row align="middle" justify="center">
          <Col xs={24} md={12} className="columna-texto-personalizada">
            <div className="contenedor-texto-personalizado">
              <div className="contenedor-titulo">
                <div className="contenedor-flechas">
                  <div className="flecha-izquierda" aria-hidden="true">
                    &#187;
                  </div>
                  <div className="flecha-derecha" aria-hidden="true">
                    &#187;
                  </div>
                  <h2 id="titulo-quienes-somos" className="titulo-principal">
                    ¿Quienes so<span className="texto-destacado">mos?</span>
                  </h2>
                </div>
              </div>

              <Paragraph className="descripcion-personalizada">
                Somos un taller dedicado a la reparación y mantenimiento de
                motocicletas. Con más de 5 años de experiencia, nuestro taller
                es un referente en la comunidad, no solo por la calidad de
                nuestros servicios, sino también por nuestra dedicación y pasión
                por las motocicletas.
              </Paragraph>
              <div
                className="contenedor-botones-personalizado"
                role="tablist"
                aria-label="Seleccionar misión, visión o valores"
              >
                <button
                  className={`boton-personalizado ${
                    currentSlide === 0 ? "activo" : ""
                  }`}
                  onClick={() => handleSlideClick(0)}
                  role="tab"
                  aria-selected={currentSlide === 0}
                  aria-controls="slide-mision"
                >
                  Misión
                </button>
                <button
                  className={`boton-personalizado ${
                    currentSlide === 1 ? "activo" : ""
                  }`}
                  onClick={() => handleSlideClick(1)}
                  role="tab"
                  aria-selected={currentSlide === 1}
                  aria-controls="slide-vision"
                >
                  Visión
                </button>
                <button
                  className={`boton-personalizado ${
                    currentSlide === 2 ? "activo" : ""
                  }`}
                  onClick={() => handleSlideClick(2)}
                  role="tab"
                  aria-selected={currentSlide === 2}
                  aria-controls="slide-valores"
                >
                  Valores
                </button>
              </div>
              <div className="contenedor-tarjetas-personalizado">
                {currentSlide === 0 && (
                  <div
                    id="slide-mision"
                    className="tarjeta-personalizada"
                    role="tabpanel"
                  >
                    <h2 className="titulo-tarjeta-personalizada">Misión</h2>
                    <Paragraph className="parrafo-tarjeta-personalizada">
                      Nuestra misión es garantizar la seguridad y el rendimiento
                      óptimo de cada motocicleta, proporcionando un servicio
                      excepcional y atención personalizada a nuestros clientes.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 1 && (
                  <div
                    id="slide-vision"
                    className="tarjeta-personalizada"
                    role="tabpanel"
                  >
                    <h2 className="titulo-tarjeta-personalizada">Visión</h2>
                    <Paragraph className="parrafo-tarjeta-personalizada">
                      Ser el taller de motocicletas líder en la región,
                      reconocido por la calidad de nuestros servicios, la
                      innovación en nuestras soluciones y la fidelidad de
                      nuestros clientes.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 2 && (
                  <div
                    id="slide-valores"
                    className="tarjeta-personalizada"
                    role="tabpanel"
                  >
                    <h2 className="titulo-tarjeta-personalizada">Valores</h2>
                    <Paragraph className="parrafo-tarjeta-personalizada">
                      Compromiso, calidad, confianza e innovación reflejan
                      nuestra esencia y enfoque de ofrecer servicios de alta
                      calidad mientras mantenemos una relación cercana con la
                      comunidad.
                    </Paragraph>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} className="columna-imagen-personalizada">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/logos-taller-de-motos-dany%2Flogo2.png?alt=media&token=968b767b-040e-4e7b-a37b-818f96e35320"
              alt="Imagen representativa de Taller de Motos Dany"
              className="imagen-personalizada"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default QuienesSomos;
