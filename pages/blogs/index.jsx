import { NotionRenderer } from 'react-notion-x';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)

export default function Blog({ recordMap }) {
  if (recordMap) {
    return (
      <>
        <Head>
          <title>Hieu's Thought</title>
        </Head>
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
            mapPageUrl={id=>`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`}
            components={{
              nextImage: Image,
              Collection,
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
