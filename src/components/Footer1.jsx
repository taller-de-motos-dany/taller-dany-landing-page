import { Col, Layout, Row, Space, Typography } from "antd";
import { createGlobalStyle } from "styled-components";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

// Importar fuente personalizada
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
`;

export default function Footer1() {
  return (
    <div>
      <GlobalStyle />
      <Footer
        style={{
          backgroundColor: "#1f1f1f",
          color: "white",
          padding: "40px 50px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <Row gutter={[16, 32]}>
          <Col xs={12} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "white",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
              }}
            >
              Sobre Nosotros
            </Title>
            <Text
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 300,
              }}
            >
              Somos un taller de motocicletas dedicado a ofrecer los mejores
              servicios de mantenimiento y reparación.
            </Text>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "white",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
              }}
            >
              Enlaces Rápidos
            </Title>
            <Space direction="vertical">
              <Link
                href="#servicios"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Servicios
              </Link>
              <Link
                href="#quienes-somos"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Quienes Somos
              </Link>
              <Link
                href="#contacto"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Contacto
              </Link>
            </Space>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "white",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
              }}
            >
              Contacto
            </Title>
            <Space direction="vertical">
              <Text
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Teléfono: (+504) 9846-6995
              </Text>
              <Text
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Email: danyaleman53@gmail.com
              </Text>
              <Text
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Dirección: Carrizal #1, Sector 1, Casa #24 Tegucigalpa, Honduras.
              </Text>
            </Space>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "white",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
              }}
            >
              Síguenos
            </Title>
            <Space direction="vertical">
              <Link
                href="https://wa.me/+50498466995"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                WhatsApp
              </Link>
              <Link
                href="https://www.instagram.com/dany_aleman_11/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Instagram
              </Link>
              <Link
                href="mailto:danyaleman53@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                }}
              >
                Google
              </Link>
            </Space>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 300,
            }}
          >
            &copy; {new Date().getFullYear()} Taller de Motos Dany. Todos los
            derechos reservados.
          </Text>
        </Row>
      </Footer>
    </div>
  );
}
