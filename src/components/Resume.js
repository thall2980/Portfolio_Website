import React from "react";
import { useState } from "react";
import { SizeMe } from "react-sizeme";
import { TfiSave } from "react-icons/tfi";
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState("../NO PHONE NUMBER Tyler_Hall_Resume_.pdf");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPage);
    setNumPages(1);
  }
  return (
    // <div classname="h-full w-full">
    //   <div>
    //     <p className="text-center">
    //       <a href={file} className=" text-5xl">
    //         PDF Viewer
    //       </a>
    //     </p>
    //     <br />
    //   </div>
    //   <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={pageNumber} renderTextLayer={false} />
    //   </Document>
    // </div>

    <SizeMe
      monitorHeight
      refreshRate={128}
      refreshMode={"debounce"}

      render={({ size }) => (
        <div>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <div>
              <Page
                width={size.width}
                pageNumber={pageNumber}
                renderTextLayer={false}
              />
            </div>
          </Document>
        </div>
      )}
    />
  );
};

export default Resume;
