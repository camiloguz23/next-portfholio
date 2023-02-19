import Image from 'next/image';
import style from './header.module.scss';
import Links from '../Links/Links';

function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <Image src={'/img/JR.svg'} width={'30'} height={'30'} alt='this is a image with letters J and R' />
      <nav className={style.nav}>
        <Links path={'#about'} name={'About'} />
        <Links path={'#skill'} name={'Skill'} />
        <Links path={'#experience'} name={'Experience'} />
      </nav>
    </header>
  );
}

export default Header;
