import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fHww" alt="banner" />

            <div className={styles.profile}>
                <Avatar  src="https://github.com/gumiranha.png"/>

                <strong>Gustavo Yuri</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    editar seu perfil
                </a>
            </footer>
        </aside>
    );
}