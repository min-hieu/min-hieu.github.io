import { Code, Equation, NotionRenderer } from 'react-notion-x'
import styles from '../../styles/BlogPage.module.scss'
import Navbar from '../../components/Navbar.jsx'

export async function getServerSideProps(ctx) {
  const { pageId } = ctx.query

  const API_URL = `http://localhost:3000/api/blogs/${pageId}`

  const res = await fetch(API_URL)
  const fetchedData = await res.json()
  const data = fetchedData.data

  return {
    props: { recordMap: data}
  }
}

export default function BlogPage({ recordMap }) {

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.notionContainer}>
          <NotionRenderer
            recordMap={recordMap}
            mapPageUrl={id=>`http://localhost:3000/blogs/${id}`}
            fullPage={false}
            darkMode={false}
            components={{
              equation: Equation,
              code: Code
            }}
          />
        </div>
      </div>
    </>
  )
}
