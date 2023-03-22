import React from 'react'
import { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'




const Resume = () => {

  const [numPage, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [file, setFile] = useState('../NO PHONE NUMBER Tyler_Hall_Resume_.pdf')

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPage)
    setNumPages(1)
  }
  return (
    <div>
      <Document file ={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="1000" width="1000" pageNumber={pageNumber} renderTextLayer={false} />
      </Document>
    </div>
  )
}

export default Resume