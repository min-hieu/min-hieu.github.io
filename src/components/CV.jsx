import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { RiArrowLeftFill } from '@react-icons/all-files/ri/RiArrowLeftFill';
import { RiArrowRightFill } from '@react-icons/all-files/ri/RiArrowRightFill';
import useWindowSize from '../components/useWindowSize'

import '../styles/cv.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const CVMain = () => {
  const windowSize = useWindowSize()
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(0);
  const pdfPath = '/resume.pdf';
  const pdfWidth = windowSize.width > windowSize.height 
    ? windowSize.height 
    : windowSize.width * 0.9

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {numPages ?
        <>
          <div className="downCon">
            <a className="downBtn" href={pdfPath}>
              download
            </a>
          </div>
          <div className="pdfNumCon">
            <div 
              className="btn" 
              onClick={()=>
                {pageNum == 0 
                ? setPageNum(numPages-1) 
                : setPageNum(pageNum-1)}
              }
            >
              <RiArrowLeftFill />
            </div>
            <div className="pdfNum">
              {pageNum+1}/<b>{numPages}</b>
            </div>
            <div 
              className="btn"
              onClick={()=>
                setPageNum((pageNum+1)%numPages)
              }
            >
              <RiArrowRightFill />
            </div>
          </div>
        </>
      : null}
      <div className="pdfCon">
        <Document 
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading CV..."
        >
          <Page 
            pageNumber={pageNum+1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={pdfWidth}
          />
        </Document>
      </div>
    </div>
  );
}

export { CVMain };
