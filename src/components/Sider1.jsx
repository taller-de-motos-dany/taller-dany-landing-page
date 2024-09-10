import{ useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Layout, Spin } from 'antd';
import './Sider1.css';
import CarouselComponent from './CarouselComponent';
import CardServicios from './CardServicios';
import Productos from './Productos';
import ContactForm from './ContactForm';
import QuienesSomos from './QuienesSomos';
import Footer1 from './Footer1';

const { Content } = Layout;

const Sider1 = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      {loading && (
        <div className="spinner-container">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
      )}
      <Layout className="diseno-fondo" style={{ display: loading ? 'none' : 'block' }}>
        <CarouselComponent onImageLoad={handleImageLoad} />
        <Content className="contenido-principal">
          <QuienesSomos />
          <CardServicios />
          <div>
            <Productos />
            <div className="contenedor-sin-margen"></div>
          </div>
        </Content>
        <div>
          <ContactForm />
        </div>
      </Layout>
      <Footer1 />
    </Layout>
  );
};

export default Sider1;
