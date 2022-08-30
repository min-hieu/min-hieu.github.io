import styles from "../styles/Card.module.scss";

interface cardProp {
    thumbnail: string;
    title: string;
}

export default function Card({ thumbnail, title }: cardProp) {
  const bgStyle = 
    thumbnail 
	? {backgroundImage: `url(${thumbnail})`} 
	: {backgroundImage: `url()`}
  

  console.log(thumbnail)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bgContainer} >
          <img src={thumbnail} className={styles.bgImg}/>
        </div>
        <div className={styles.title}>
          {title}
        </div>
      </div>
    </>
  )
}
