import style from './waves.module.scss';

interface Prop {
  color: string;
}

function Waves({ color }: Prop): JSX.Element {
  return (
    <svg className={style.waze} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fill={color}
        fillOpacity='1'
        d='M0,224L48,218.7C96,213,192,203,288,218.7C384,235,480,277,576,288C672,299,768,277,864,256C960,235,1056,213,1152,224C1248,235,1344,277,1392,298.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
}

export default Waves;
