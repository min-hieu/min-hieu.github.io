import { 
  TableOfContent, 
  Page,
  NotionRenderer
} from 'react-notion-x'
import { getBlockTitle } from 'notion-utils'
import styles from '../../styles/BlogPage.module.scss'
import Navbar from '../../components/Navbar.jsx'
import dynamic from 'next/dynamic'

export async function getServerSideProps(ctx) {
  const { pageId } = ctx.query

  const API_URL = `${process.env.BASE_URL}/api/blogs/${pageId}`
  console.log(`api_url: ${API_URL}`);

  const res = await fetch(API_URL)
  const fetchedData = await res.json()
  const data = fetchedData.data

  return {
    props: { recordMap: data}
  }
}

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

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
            mapPageUrl={id=>`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`}
            fullPage={false}
            darkMode={false}
            components={{
              page: Page,
              Equation,
              Code,
            }}
          />
        </div>
      </div>
    </>
  )
}
