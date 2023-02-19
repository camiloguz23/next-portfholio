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
      devsavant: {
        name: 'DevSavant S.A',
        rol: 'Desarrollador de software',
        description:
          'He realizado AppWeb para compañias con herramientas como React Angular, Node JS; donde he hecho labores como prograamdor, review code, testing'
      },
      globant: {
        name: 'Globant',
        rol: 'College Student',
        description:
          'He realizado mis practicas laborales donde he acquerido nuevos conocimientos en el lado frontend, en base de datos como MySQL y Mongo DB, tambien pyShark, python'
      },
      opportunit: {
        name: 'OpportunIT',
        rol: 'Software Developer (Apprentice)',
        description: 'Durante mi preparacion que esta estudiando y practicando conocimietos sobre frontend, backend con Python y Node JS'
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
