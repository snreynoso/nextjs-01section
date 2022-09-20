import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={styles.menu_container}>
            {
                menuItems.map(({ text, href }) => (
                    <ActiveLink key={href} text={text} href={href}></ActiveLink>
                ))
            }

            {/* <ActiveLink text="Home" href='/'></ActiveLink>
            <ActiveLink text="About" href='/about'></ActiveLink>
            <ActiveLink text="Contact" href='/contact/contact'></ActiveLink>
            <ActiveLink text="Pricing" href='/pricing/pricing'></ActiveLink> */}
        </nav>
    );
}
