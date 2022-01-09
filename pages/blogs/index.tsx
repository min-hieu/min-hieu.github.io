import Navbar from '../../components/Navbar.tsx'
import Card from '../../components/Card.tsx'
import styles from '../../styles/Blog.module.scss'

const blogCards = () => {
  for 
}

const Blog = () => {
  return (
    <>
      <Navbar thisPage="blogs"/>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>I'm thinking about...</span>
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
      </div>
    </>
  )
}

export default Blog;
