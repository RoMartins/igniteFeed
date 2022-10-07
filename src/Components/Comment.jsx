import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>    

      <img className={styles.avatar} src="https://github.com/RoMartins.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
              <div className={styles.commentAuthorAndTime}>
                <strong> Rodrigo Martins</strong>
                <time title='11 de maio ás 8:13' dateTime='22-05-11 8:13:30'>Cerca de 1h atrás</time>
              </div>

              <button title='Deletar comentário'>
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}