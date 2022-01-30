import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import styles from '../../styles/Blog.module.scss'

const blog_metadata = [
  {
    thumbnail: null,
    title: 'this is a test title'
  },
  {
    thumbnail: null,
    title: 'this is a test title'
  },
  {
    thumbnail: null,
    title: 'this is a test title'
  },
  {
    thumbnail: null,
    title: 'this is a test title'
  },
  {
    thumbnail: null,
    title: 'this is a test title'
  },
  {
    thumbnail: null,
    title: 'this is a test title'
  },
]

const CardList = ({ metadata }) => {
  return metadata.map(({thumbnail, title}, idx) => 
    <Card key={idx} thumbnail={thumbnail} title={title} />
  )
}

export default function Blog() {
  return (
    <>
      <Navbar thisPage="blogs"/>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>💭 I'm thinking about...</span>
        </div>
        <div className={styles.cardContainer}>
          <CardList metadata={blog_metadata} />
        </div>
      </div>
    </>
  )
}
