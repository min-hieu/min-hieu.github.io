import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import styles from '../../styles/Blog.module.scss';


const CardList = ({ metadata }) => {
  return metadata.map((page, idx) =>
    <Card key={idx} thumbnail={page?.thumbnail ? page.thumbnail : '/noimage.png'} title={page?.title} />
  )
}


export default function Blog() {
  const [metadata, setMetadata] = useState(null)
  const [recordMap, setRecordMap] = useState(null)

  const fetchNotion = () => axios.get('/api/notionAPI')

  useEffect(() => {
    fetchNotion().then(({ data })=>{
      const pages = data.data.block

      setRecordMap(data.data)

      setMetadata(Object.keys(pages).map((id) => 
        pages[id].value.type === "page" ? {
          thumbnail: pages[id].value.format?.page_icon,
          title: pages[id].value.properties.title[0][0]
        } : null).slice(1)
      )

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
