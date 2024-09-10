import { Row, Col, Typography, Space } from "antd";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  MailOutlined,
  GoogleOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./ContactForm.css";
const { Text } = Typography;
const ContactForm = () => {
  return (
    <div id="contacto" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <Row justify="center">
        {/* Sección de información de contacto */}
        <Col xs={22} md={10}>
          <Space direction="vertical" size="large" className="contact-info">
            <div className="contenedor-titulo">
              <div className="contenedor-flechas">
                <div className="flecha-izquierda">&#187;</div>
                <div className="flecha-derecha">&#187;</div>
                <h2 className="titulo-contacto">
                  Contác<span className="titulo-destacado">tanos</span>
                </h2>
              </div>
            </div>
            <Space>
              <PhoneOutlined className="contact-icon" />
              <Text strong className="contact-label">
                Teléfono:
              </Text>
              <Text className="contact-text">(+504) 9846-6995</Text>
            </Space>
            <Space>
              <MailOutlined className="contact-icon" />
              <Text strong className="contact-label">
                Email:
              </Text>
              <Text className="contact-text">danyaleman53@gmail.com</Text>
            </Space>
            <Space align="start">
              <EnvironmentOutlined className="contact-icon" />
              <div>
                <Text strong className="contact-label">
                  Dirección:
                </Text>
                <br />
                <Text className="contact-text">
                  Carrizal #1, Sector 1, Casa #24 Tegucigalpa, Honduras.
                </Text>
              </div>
            </Space>
            <Space align="start">
              <ClockCircleOutlined className="contact-icon" />
              <div>
                <Text strong className="contact-label">
                  Horario de atención:
                </Text>
                <br />
                <Text className="contact-text">
                  Lunes a Viernes: 8:00 AM - 6:00 PM
                </Text>
                <br />
                <Text className="contact-text">Sábados: 9:00 AM - 2:00 PM</Text>
                <br />
                <p className="etiqueta-redes-sociales">
                  Redes sociales:
                  <a
                    href="mailto:danyaleman53@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoogleOutlined
                      style={{ marginLeft: "20px" }}
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/dany_aleman_11/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramOutlined className="social-icon" />
                  </a>
                  <a
                    href="https://wa.me/+50498466995"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppOutlined className="social-icon" />
                  </a>
                </p>
              </div>
            </Space>
          </Space>
        </Col>

        {/* Sección de redes sociales y mapa */}
        <Col xs={22} md={10}>
          <div className="contenedor-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d967.363682403894!2d-87.23533547199013!3d14.109334574109088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2shn!4v1722736409842!5m2!1ses-419!2shn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ContactForm;
