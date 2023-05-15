import { Waves } from '@/components';
import style from './presentation.module.scss';

function Presentation(): JSX.Element {
  return (
    <div className={style.intro}>
      <div className={style.info}>
        <h1>Jeyson Camilo Guzman</h1>
        <h2 className={style.rol}>Frontend Engineer Developer</h2>
        <h3 className={style.skill}>React JS,Next JS, Angular</h3>
      </div>
      <Waves color='#dfe4e7' />
    </div>
  );
}

export default Presentation;
