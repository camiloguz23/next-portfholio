import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import Cube from '../general/cube/Cube';
import style from './timeline.module.scss';
import { type Company, type Experience } from './model/timeLine.model';
import { ItemTime, Modal } from './components';

export default function ExperienceTime(): JSX.Element {
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState<Company>({
    name: '',
    rol: '',
    description: ''
  });

  const onModal = (company: string): void => {
    const experience: Experience = {
      supremacy: {
        name: 'Supremacy Kingdom',
        rol: 'Leader Team Fontend',
        description:
          'Como desarrollador ingeniero frontend altamente capacitado, ofrezco orientación experta al equipo en el uso de frameworks líderes como Angular, React y Next JS para garantizar proyectos escalables y fáciles de mantener. Mi enfoque se basa en las mejores prácticas de programación actuales, lo que me permite proporcionar soluciones innovadoras y de alta calidad que impulsan el éxito de su empresa. Trabajando conmigo, su equipo de desarrollo maximizará la productividad y la calidad del código.'
      },
      devsavant: {
        name: 'DevSavant S.A',
        rol: 'Desarrollador de software',
        description:
          'Soy un desarrollador de aplicaciones web que ha creado soluciones personalizadas para empresas utilizando herramientas como React, Angular y Node JS. Mis habilidades incluyen programación, revisión de código y pruebas exhaustivas para garantizar la calidad y eficiencia de las aplicaciones. Me enfoco en las mejores prácticas de programación actuales para crear aplicaciones escalables y de fácil mantenimiento. Con mi experiencia, he ayudado a las empresas a mejorar su presencia en línea y aumentar su rentabilidad.'
      },
      globant: {
        name: 'Globant',
        rol: 'College Student',
        description:
          'Durante mis prácticas laborales, he adquirido nuevos conocimientos en el desarrollo frontend, así como en bases de datos como MySQL y Mongo DB. Además, he trabajado con herramientas de análisis de red como PyShark y Python. Mi pasión por aprender y adaptarme a las últimas tendencias me permite proporcionar soluciones innovadoras y de alta calidad para el éxito de su empresa.'
      },
      opportunit: {
        name: 'OpportunIT',
        rol: 'Software Developer (Apprentice)',
        description:
          'Como estudiante apasionado por el desarrollo web, me estoy preparando a fondo en las áreas de frontend y backend, utilizando herramientas como Python y Node JS. Me esfuerzo por aprender y aplicar las últimas tendencias en programación para garantizar el éxito de su empresa con soluciones innovadoras y de alta calidad.'
      }
    };

    setCompany(experience[company]);
  };
  return (
    <div className={style.timeLine} id='experience'>
      <Cube setStyle={{ top: 80, right: 80 }} />
      <div className={style.contentTime}>
        <Timeline position='alternate'>
          <ItemTime
            date='Marzo/2023 - Currently'
            nameCompany='Supremacy Kingdom'
            onShow={(value) => {
              setShow(value);
              onModal('supremacy');
            }}
          />
          <ItemTime
            date='Enero/2022 - Enero/2023'
            nameCompany='DevSavant'
            onShow={(value) => {
              setShow(value);
              onModal('devsavant');
            }}
          />

          <ItemTime
            date='Agosto/2021 - Enero/2022'
            nameCompany='Globant'
            onShow={(value) => {
              setShow(value);
              onModal('globant');
            }}
          />

          <ItemTime
            date='Marzo/2020 - julio/2021'
            nameCompany='OpportunIT'
            onShow={(value) => {
              setShow(value);
              onModal('opportunit');
            }}
          />
        </Timeline>
      </div>
      {show && (
        <Modal
          company={company}
          onClick={() => {
            setShow(false);
            setCompany({ name: '', rol: '', description: '' });
          }}
        />
      )}
      <Cube setStyle={{ bottom: 60, left: 80 }} />
    </div>
  );
}
