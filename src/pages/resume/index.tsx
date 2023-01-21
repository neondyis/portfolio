import {Center, Container, Text} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import {useState} from "react";
import {pdfjs, Document, Page} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
export default function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    // @ts-ignore
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return(
        <>
            <Center>
                <Container padding='0'>
                    <Text className={'glitch'}  fontWeight="bold" fontSize="3rem" data-text={'Resumé'} width='fit-content' textColor='#33272a'> Resumé.</Text>
                    <Text>Reach out to me via my contact page.</Text>
                    <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false}/>
                        ))}
                    </Document>
                </Container>
            </Center>
        </>
    )
}

type ResumeProps  = {

}