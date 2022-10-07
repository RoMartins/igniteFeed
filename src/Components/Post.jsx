import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/RoMartins.png"/>

          <div className={styles.authorInfo}>
            <strong>Rodrigo Martins</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title='' dateTime=''>Publicado há 1hr</time>
      </header>
        
      <div className={styles.content}>
        <p>Fala Galera</p>

        <p>Acabei de subir mais um projeto no meu portifa</p>

        <p>hane.design</p>
        <a href="#"> #nwl </a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback </strong>
      
        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
    )
}