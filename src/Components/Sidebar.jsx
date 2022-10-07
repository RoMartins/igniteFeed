import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'


export function Sidebar() {
  return (
    <aside className={styles.siderbar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="" srcset="" />
      
      <div className={styles.profile}>
        <Avatar src="https://github.com/RoMartins.png" />
        <strong>Rodrigo Martins</strong>
        <span>Web Developer</span>
      </div>   

      <footer className={styles.footer}>
          <a href="/">
            <PencilLine size={20}/>
            Editar seu perfil
            
          </a>
      </footer>
    </aside>
  )
}