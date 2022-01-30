import styles from "../styles/Card.module.scss";

interface cardProp {
    thumbnail: string;
    title: string;
}

export default function Card({ thumbnail, title }: cardProp) {
  const backgroundImg = 
    thumbnail 
	? {background: `url(${thumbnail})`} 
	: {background: `url()`}
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background} style={backgroundImg}/>
        <div className={styles.title}>
          {title}
        </div>
      </div>
    </>
  )
}