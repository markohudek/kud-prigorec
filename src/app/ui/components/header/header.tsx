'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import Link from 'next/link';
import { FACEBOOK, INSTAGRAM } from '@/const';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const size = 120;
  const logoPath = '/logo.svg';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/" passHref>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Image
              src={logoPath}
              alt="KUD Prigorec logo"
              width={size}
              height={size}
            />
          </div>
        </div>
      </Link>

      <ul className={styles.nav}>
        <li>
          <Link href="/about">O nama</Link>
        </li>
        <li>
          <Link href="/program">Program</Link>
        </li>
        <li>
          <Link href="/gallery">Galerija</Link>
        </li>
      </ul>

      <div className={styles.social}>
        <Link href={FACEBOOK} target="_blank">
          <i className="lab la-facebook"></i>
        </Link>
        <Link href={INSTAGRAM} target="_blank">
          <i className="lab la-instagram"></i>
        </Link>
      </div>
    </header>
  );
}
