import { useState, useEffect } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './Menu1.css';

const Menu1 = () => {
  const [visible, setVisible] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('');

  const mostrarCajon = () => {
    setVisible(true);
  };

  const cerrarCajon = () => {
    setVisible(false);
  };

  useEffect(() => {
    const manejarDesplazamiento = () => {
      if (visible) {
        cerrarCajon();
      }
    };

    if (visible) {
      window.addEventListener('scroll', manejarDesplazamiento);
    } else {
      window.removeEventListener('scroll', manejarDesplazamiento);
    }

    return () => {
      window.removeEventListener('scroll', manejarDesplazamiento);
    };
  }, [visible]);

  useEffect(() => {
    const secciones = document.querySelectorAll('section');
    const opciones = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSeccionActiva(entry.target.id);
        }
      });
    }, opciones);

    secciones.forEach(seccion => {
      observer.observe(seccion);
    });

    return () => {
      secciones.forEach(seccion => {
        observer.unobserve(seccion);
      });
    };
  }, []);
 
  return (
    <>
      <header className="encabezado-personalizado">
        <div className="logo">
          <img src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/logos-taller-de-motos-dany%2Flogo2.png?alt=media&token=968b767b-040e-4e7b-a37b-818f96e35320" alt="Logo" />
          <span className="texto-logo">TALLER DE MOTOS DANY</span>
        </div>
        <nav className="seccion-menu">
          <ul className="menu-escritorio">
            <li><a href="#inicio" className={seccionActiva === 'inicio' ? 'activo' : ''} onClick={cerrarCajon}>Inicio</a></li>
            <li><a href="#quienes-somos" className={seccionActiva === 'quienes-somos' ? 'activo' : ''} onClick={cerrarCajon}>Quiénes Somos</a></li>
            <li><a href="#servicios" className={seccionActiva === 'servicios' ? 'activo' : ''} onClick={cerrarCajon}>Servicios</a></li>
            <li><a href="#trabajos" className={seccionActiva === 'trabajos' ? 'activo' : ''} onClick={cerrarCajon}>Referencias</a></li>
            <li><a href="#contacto" className={seccionActiva === 'contacto' ? 'activo' : ''} onClick={cerrarCajon}>Contacto</a></li>
          </ul>
          <button className="boton-menu" onClick={mostrarCajon}>
            <MenuOutlined />
          </button>
        </nav>
        {visible && (
          <div className="cajon">
            <div className="cabecera-cajon">
              <button className="boton-cerrar" onClick={cerrarCajon}>
                ×
              </button>
            </div>
            <ul className="menu-cajon">
              <li><a href="#inicio" className={seccionActiva === 'inicio' ? 'activo' : ''} onClick={cerrarCajon}>Inicio</a></li>
              <hr /><li><a href="#quienes-somos" className={seccionActiva === 'quienes-somos' ? 'activo' : ''} onClick={cerrarCajon}>Quiénes Somos</a></li>
              <hr /><li><a href="#servicios" className={seccionActiva === 'servicios' ? 'activo' : ''} onClick={cerrarCajon}>Servicios</a></li>
              <hr /><li><a href="#trabajos" className={seccionActiva === 'trabajos' ? 'activo' : ''} onClick={cerrarCajon}>Referencias</a></li>
              <hr /><li><a href="#contacto" className={seccionActiva === 'contacto' ? 'activo' : ''} onClick={cerrarCajon}>Contacto</a></li> 
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Menu1;

