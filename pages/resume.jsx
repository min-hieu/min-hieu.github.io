import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import styles from '../styles/Resume.module.scss'
import useWindowSize from '../components/useWindowSize'
import { 
  MdDownload,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md'
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const Resume = () => {
  const windowSize = useWindowSize()
  const router = useRouter()
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages)

  const handleDownload = () => router.push('/resume.pdf')

  return (
    <>
      <div className={styles.pdfContainer}>
        <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page 
            width={windowSize.width * 0.7}
            pageNumber={pageNumber} 
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <Navbar thisPage="cv"/>
      <div className={styles.controlContainer}>
        <MdKeyboardArrowUp 
          className={styles.btn} 
          onClick={() => 
              setPageNumber(n=>(n+1)===3 ? 1 : n+1)
          }
        />
        <span className={styles.pageNum}>
          {pageNumber}/{numPages}
        </span>
        <MdKeyboardArrowDown 
          className={styles.btn}
          onClick={() => 
              setPageNumber(n=>(n-1)===0 ? numPages : n-1)
          }
        />
        <MdDownload className={styles.btn} onClick={handleDownload}/>
      </div>
    </>
  )
}

export default Resume
