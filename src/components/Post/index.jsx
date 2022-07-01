import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css'

export function Post () {
  return (
    <article className={styles.post}>
     <header>
        <div className={styles.author}>
         <Avatar src="https://avatars.githubusercontent.com/u/69162451?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Rayanne Giló</strong>
            <span>Web Developer</span>
          </div>
        </div>
       
       <time title="29 de junho às 16:00" dateTime="2022-29-06 16:00:00">Publicado à 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href=""> #novoprojeto</a>{' '}
          <a href=""> #nlw</a>{' '}
          <a href="">#rocketseat</a>
          </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}