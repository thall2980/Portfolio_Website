import React from 'react'
import { useState } from 'react'
import { TfiSave } from 'react-icons/tfi';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`





const Resume = () => {

  const [numPage, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [file, setFile] = useState('../NO PHONE NUMBER Tyler_Hall_Resume_.pdf')

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPage)
    setNumPages(1)
  }
  return (
    <div classname="">
      <div style={{textAlign:'center'}}>
      <a href={file} className="w-full text-5xl"><TfiSave/></a>
      </div>
      <Document file ={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page   pageNumber={pageNumber} renderTextLayer={false} />
      </Document>
    </div>
  )
}

export default Resume