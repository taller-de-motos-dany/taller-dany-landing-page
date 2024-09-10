import { useState } from 'react';
import './Productos.css';

const proyectosData = [
  {
    id: 1,
    title: "Mantenimiento Preventivo",
    description: "Dedicados al mantenimiento integral de motocicletas, abarcando revisiones preventivas y ajustes para asegurar un rendimiento óptimo y prolongar la vida útil de tu motocicleta.",
    image: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-trabajos%2Fmantenimiento.jpeg?alt=media&token=7abf3b4d-70ae-42fd-9c43-5690b0861934"
  },
  {
    id: 2,
    title: "Reparación de Motor",
    description: "Especialistas en la reparación y ajuste de motores, garantizando un rendimiento mejorado y una experiencia de conducción más suave.",
    image: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-trabajos%2FreparacionMotor.jpeg?alt=media&token=653136ef-9618-4e10-a55f-4277f4555a52"
  },
  {
    id: 3,
    title: "Pintura y Estética",
    description: "Centrado en la personalización estética de motocicletas, con servicios de pintura y diseño que transforman cada vehículo en una obra de arte única.",
    image: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-trabajos%2Festetica1.jpeg?alt=media&token=f779adc6-6197-4b8f-b402-bdbc49680e7f"
  },
  {
    id: 4,
    title: "Accesorios y Equipamiento",
    description: "Instalación de accesorios y equipamiento avanzado para motocicletas, potenciando tanto la funcionalidad como el estilo del vehículo para un desempeño superior.",
    image: "https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/img-trabajos%2Faccesorios-fz.jpg?alt=media&token=ea90d226-d2ff-4eef-884b-903bbc77828b"
  }
];

function Proyectos() {
  const [selectedProyecto, setSelectedProyecto] = useState(proyectosData[0]);

  return (

    <div id='trabajos' className="proyectos">
      <div className="seccion-personalizada">
        <div className="contenedor-titulo">
          <div className="contenedor-flechas" >
            <div className="flecha-izquierda">&#187;</div>
            <div className="flecha-derecha">&#187;</div>
            <h2 className="titulo-principal">
              Nuestros trab<span className="texto-destacado">ajos</span>
            </h2>
          </div>
        </div>
        <div className="proyectos-grid">
          <div className="proyectos-main-image">
            <img src={selectedProyecto.image} alt={selectedProyecto.title} />
          </div>
          <div className="proyectos-info">
            <h2>{selectedProyecto.title}</h2>
            <p className="descripcion-personalizada">{selectedProyecto.description}</p>

          </div>
          <div className="proyectos-thumbnails">
            {proyectosData.map(proyecto => (
              <img
                key={proyecto.id}
                src={proyecto.image}
                alt={proyecto.title}
                className={`thumbnail ${selectedProyecto.id === proyecto.id ? 'active' : ''}`}
                onClick={() => setSelectedProyecto(proyecto)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
