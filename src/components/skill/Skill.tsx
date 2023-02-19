import { Cube } from '@/components';
import { useState } from 'react';
import { Graphic, LanguagesProgramming } from './components';
import style from './skill.module.scss';

function Skill(): JSX.Element {
  const [rol, setRol]: [string, (rol: string) => void] = useState('frontend');
  return (
    <div className={style.skillContent} id='skill'>
      <Graphic rol={rol} />
      <div className={style.contentItem}>
        <span className={style.titleSkill}>
          <i className='material-symbols-outlined'>stars</i>Skill
        </span>
        <p className={style.infoSkill}>
          Tengo con conocimientos en lenguajes de programacion tanto en Frontend y Backend, PWA, manejo de herramientas cloud serve
        </p>
        <div className={style.itemSkill}>
          <LanguagesProgramming
            onRol={(type) => {
              setRol(type);
            }}
          />
        </div>
      </div>
      <Cube setStyle={{ bottom: 60, left: 50 }} />
    </div>
  );
}

export default Skill;
