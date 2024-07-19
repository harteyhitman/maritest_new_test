'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from '../../components/navbar/Navbar.module.css';
import Image from 'next/image';
import Frame from '../../../public/assets/Frame.png';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'About us', href: '/about' },
    { label: 'The Team', href: '/team' },
    { label: 'Contact Us', href: '/contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles['navbar']}>
            <Link href="/">
                <Image
                    src={Frame}
                    alt="plus"
                    width={215}
                    height={29}
                    className={styles['navbar-brand']}
                />
            </Link>
         
            {isMobile ? (
                <>
                    <button className={styles['mobile-menu-icon']} onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <div ref={menuRef} className={`${styles['nav-items']} ${isOpen ? styles.open : ''}`}>
                        <button className={styles['return-button']} onClick={closeMenu}>
                            &larr;
                        </button>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className='hover:text-[#FFCDA8]'>
                                <div className={styles['nav-item']}>{item.label}</div>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <div className={styles['nav-items-desktop']}>
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className='hover:text-[#FFCDA8]'>
                            <div className={styles['nav-item-desktop']}>{item.label}</div>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;


