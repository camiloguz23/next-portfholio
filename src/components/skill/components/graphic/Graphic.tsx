import style from './Graphic.module.scss';

interface Prop {
  rol: string;
}

const Graphic = ({ rol }: Prop): JSX.Element => {
  const isRol = (): boolean => rol === 'frontend';
  return (
    <div className={style.contentGraphic}>
      <div className={`${style.line1} ${isRol() ? style.frontend : style.backend}`}></div>
      <div className={`${style.line2} ${isRol() ? style.frontend : style.backend}`}></div>
      <div className={`${style.line3} ${isRol() ? style.frontend : style.backend}`}></div>
      <div className={`${style.line4} ${isRol() ? style.frontend : style.backend}`}></div>
    </div>
  );
};

export default Graphic;
