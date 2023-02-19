import Link from 'next/link';
import style from './links.module.scss';

interface Prop {
  name: string;
  path: string;
};

function Links({ name, path }: Prop): JSX.Element {
  return (
    <Link className={style.link} href={path}>
      {name}
    </Link>
  );
}

export default Links;
