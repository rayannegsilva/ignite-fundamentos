import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment ({content, onDeleteComment}) {
  function handleDeleteComment(){
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/69162451?v=4" alt="" />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Rayanne Giló</strong>
            <time title="29 de junho às 16:00" dateTime="2022-29-06 16:00:00">Cerca de uma 1 hora atrás</time>
          </div>

          <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={20}/>
          </button>
        </header>

        <p>{content}</p>
      </div>

      <footer>
        <button>
          <ThumbsUp size={24} />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  </div>
  );
}