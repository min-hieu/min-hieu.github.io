import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Blog.module.scss';

export default function Blog(props) {
  const [metadata, setMetadata] = useState(null)
  const [recordMap, setRecordMap] = useState(null)
  console.log(props)

  const fetchNotion = () => axios.get('/api/notionAPI')

  useEffect(() => {
    fetchNotion().then(({ data })=>{
      const pages = data.data.block
      setRecordMap(data.data)
    })
  }, [])

  if (recordMap) {
    return (
      <>
        <Navbar thisPage="blogs"/>
        <div className={styles.container}>
          <div className={styles.title}>
            <span>💭 I'm thinking about...</span>
          </div>
          <NotionRenderer
            recordMap={recordMap}
            fullPage={false}
            darkMode={false}
            showTableOfContent={true}
            customImages={true}
            mapPageUrl={id=>`http://localhost:3000/blogs/${id}`}
            components={{
              image: ({
                src,
                alt,

                height,
                width,

                className,
                style,
                loading,
                decoding,
                
                ref,
                onLoad
              }) => (
                <img
                className={className}
                style={style}
                src={src}
                ref={ref}
                width={width}
                height={height}
                loading='lazy'
                alt={alt}
                decoding='async'
              />
              ),
              collection: Collection,
              collectionRow: CollectionRow
            }}
          />
        </div>
      </>
    )
  } else {
    return (
      <>
        <Navbar thisPage="blogs"/>
        <div className={styles.container}>
          <div className={styles.title}>
            <span>💭 Loading Hieu's thoughts from the cloud...</span>
          </div>
        </div>
      </>
    )
  }
}
