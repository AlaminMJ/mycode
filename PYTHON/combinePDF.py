# pip install pypdf2

from PyPDF2 import PdfMerger

def combine_pdfs(pdf_list, output_path):
    # Create a PdfMerger object
    merger = PdfMerger()

    # Add each PDF to the merger
    for pdf in pdf_list:
        merger.append(pdf)

    # Write the combined PDF to the output file
    merger.write(output_path)
    merger.close()
    print(f"Combined PDF saved as: {output_path}")

# List of PDF files to combine
pdf_files = ["file1.pdf", "file2.pdf", "file3.pdf"]  # Replace with your PDF file paths
output_file = "combined_output.pdf"  # Output file path

# Combine PDFs
combine_pdfs(pdf_files, output_file)
