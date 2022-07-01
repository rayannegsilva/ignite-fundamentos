import styles from './styles.module.css'

export function Avatar({ hasBorder = true, src}){
  
  //const hasBorder = props.hasBorder !== false;

  return (
    <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} 
        />
  );
}