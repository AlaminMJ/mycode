const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

async function splitPdf(inputPdfPath, outputFolder, pageRanges) {
  // Read the input PDF
  const pdfBytes = fs.readFileSync(inputPdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);

  for (let i = 0; i < pageRanges.length; i++) {
    const [start, end] = pageRanges[i];
    const splitPdfDoc = await PDFDocument.create();

    // Add pages from the range to the new PDF
    for (let j = start - 1; j < (end || start); j++) {
      const [copiedPage] = await splitPdfDoc.copyPages(pdfDoc, [j]);
      splitPdfDoc.addPage(copiedPage);
    }

    // Write the split PDF to file
    const splitPdfBytes = await splitPdfDoc.save();
    const outputPath = `${outputFolder}/split_part_${i + 1}.pdf`;
    fs.writeFileSync(outputPath, splitPdfBytes);
    console.log(`Saved: ${outputPath}`);
  }
}

// Example usage
const inputPdfPath = "example.pdf"; // Path to the input PDF
const outputFolder = "./output_pdfs"; // Directory to save the split PDFs
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Create the folder if it doesn't exist
}
const pageRanges = [
  [1, 3], // Pages 1-3
  [4, 4], // Page 4
  [5, 7], // Pages 5-7
];

// Split the PDF
splitPdf(inputPdfPath, outputFolder, pageRanges)
  .then(() => console.log("PDF split successfully!"))
  .catch((err) => console.error("Error splitting PDF:", err));
