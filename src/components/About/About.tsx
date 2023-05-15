import { Cube } from '@/components';
import Image from 'next/image';
import style from './about.module.scss';

const size: number = 40;

function About(): JSX.Element {
  return (
    <div className={style.about} id='about'>
      <Cube setStyle={{ top: 60, left: 30 }} />
      <Cube setStyle={{ bottom: 20, right: 40 }} />
      <div className={style.containerAbout}>
        <div className={style.info}>
          <p>
            Desarrollador Frontend con experiencia en React, Angular y aprendiendo sobre Next JS, enfocado en la calidad del código y
            dedicado al aprendizaje continuo. Experiencia profesional en empresas reconocidas, incluyendo roles de
            liderazgo en equipo. Activo en la comunidad de programación, contribuyendo a la formación de otros profesionales en el campo del
            Frontend. Las habilidades clave incluyen trabajo colaborativo, responsabilidad, alto grado de profesionalismo y capacidad para
            liderar equipos efectivamente.
          </p>
        </div>

        <div className={style.contact}>
          <span className={style.titleContact}>
            <i className='material-symbols-outlined'>stars</i>Contactos
          </span>

          <div className={style.linksContacts}>
            <a target={'_blank'} rel='noreferrer' href='https://wa.me/573238082776?text=hola%20quiero%20contactar%20con%20usted'>
              <Image src={'/img/whatsapp.svg'} alt='icon whatsApp' priority={true} width={size} height={size} />
            </a>
            <a target={'_blank'} rel='noreferrer' href='mailto:jeysonkmguzman@gmail.com'>
              <Image src={'/img/email.svg'} alt='icon whatsApp' priority={true} width={size} height={size} />
            </a>
            <a href='https://www.linkedin.com/in/jeysoncamiloguzmanrico/'>
              <Image src={'/img/linkedin.svg'} alt='icon from linkedin' priority={true} width={size} height={size} />
            </a>
          </div>
        </div>
        <div className={style.download}>
          <a href={'/document/CV_english.pdf'} download>
            <button className={style.btnCV}>
              Download CV <i className='material-symbols-outlined'>download</i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
