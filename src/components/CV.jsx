import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../../public/resume.pdf';

function CVMain() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        {pageNumber} / {numPages}
      </p>
    </div>
  );
}

export { CVMain };
