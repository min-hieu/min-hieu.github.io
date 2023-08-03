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
        <div className='controlCon'>
          <div className='pdfNumCon'>
            <span className='lastUpdate'>last update: 03/08/2023</span>
            <a className="downBtn" href={pdfPath}>
              Download
            </a>
          </div>
        </div>
      : null}
      <div className="pdfCon">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading CV..."
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={pdfWidth}
          />
          <Page
            pageNumber={2}
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
