import { 
  TableOfContent, 
  Code,
  Page,
  Equation,
  CollectionRow,
  CollectionView,
  NotionRenderer
} from 'react-notion-x'
import { getBlockTitle } from 'notion-utils'
import styles from '../../styles/BlogPage.module.scss'
import Navbar from '../../components/Navbar.jsx'

const BLOG_URL = `${process.env.BASE_URL}/api/blogs`

export async function getServerSideProps(ctx) {
  const { pageId } = ctx.query

  const API_URL = `${BLOG_URL}/${pageId}`

  const res = await fetch(API_URL)
  const fetchedData = await res.json()
  const data = fetchedData.data

  return {
    props: { recordMap: data}
  }
}

export default function BlogPage({ recordMap }) {

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  const title = getBlockTitle(block, recordMap)

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.notionContainer}>
          <span className={styles.notionTitle}>{ title }</span>
          <NotionRenderer
            recordMap={recordMap}
            mapPageUrl={id=>`${process.env.BASE_URL}/blogs/${id}`}
            fullPage={false}
            darkMode={false}
            components={{
              equation: Equation,
              code: Code,
              page: Page,
              collectionView: CollectionView,
              collectionRow: CollectionRow,
            }}
          />
        </div>
      </div>
    </>
  )
}
