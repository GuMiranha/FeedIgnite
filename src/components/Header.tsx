import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite-logo.svg.svg';

export function Header() {
    return(
        <header className={styles.header}>
        <img src={igniteLogo} alt='imagem logo'/>
        </header>
    );
}