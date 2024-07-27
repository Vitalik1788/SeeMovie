import css from './Header.module.css';
import logo from '../../images/logo.png';
import Image from 'next/image';

export default function AppHeader() {
  return (
    <div className={css.headerBox}>
      <Image src={logo} alt="logo" priority={true} width={60} />
      <ul className={css.list}>
        <li className={css.item}>ГОЛОВНА</li>
        <li className={css.item}>КАТАЛОГ</li>
        <li className={css.item}>ОБРАНЕ</li>
      </ul>
    </div>
  );
}
