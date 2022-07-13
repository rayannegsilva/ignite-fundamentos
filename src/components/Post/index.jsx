import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { useState } from 'react';


export function Post ({ author, publishedAt, content }) {
   const [comments, setComments] = useState(['Post muito bacana!']);
   const [newCommentText, setNewCommentText] = useState('');


   const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
   })

   const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
   })

   function handleCreateNewComment(){
    event.preventDefault()

    setComments([...comments, newCommentText]);

    setNewCommentText('');
   }

   function handleNewCommentChange(){
    setNewCommentText(event.target.value);
   }

   function deleteComment(comment){

   }
  
  return (
    <article className={styles.post}>
     <header>
        <div className={styles.author}>
         <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
       
       <time title="publishedDateFormatted" dateTime={publishedAt.toISOString()}>{publishDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === "paragraph"){
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          placeholder="Deixe seu comentário"
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  );
}