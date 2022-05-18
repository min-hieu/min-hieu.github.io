import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Blog.module.scss';

const API_URL = `${process.env.BASE_URL}/api/blogs`

export async function getServerSideProps() {

  const res = await fetch(API_URL)
  const fetchedData = await res.json()
  const data = fetchedData.data

  return {
    props: { recordMap: data }
  }
}

export default function Blog({ recordMap }) {
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
            mapPageUrl={id=>`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`}
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
