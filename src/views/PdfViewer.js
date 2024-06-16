import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Box } from "@mui/material";
import MyPdfDocument from "../assets/file.pdf"; // Đường dẫn đến file PDF

function PdfViewer() {
  return (
    <Box sx={{ mt: 3, width: "100%", height: "80vh" }}>
      <PDFViewer width="100%" height="100%">
        <MyPdfDocument />
      </PDFViewer>
    </Box>
  );
}

export default PdfViewer;
