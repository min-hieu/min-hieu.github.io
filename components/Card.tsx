import styles from "../styles/Card.module.scss"

const Card = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}/>
        <div className={styles.title}>
          small title
        </div>
      </div>
    </>
  )
}

export default Card;
