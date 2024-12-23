# pip install pypdf2
from PyPDF2 import PdfReader, PdfWriter

def split_pdf(input_pdf, output_folder, page_ranges):
    """
    Split a PDF into multiple PDFs based on page ranges or specific pages.

    Args:
        input_pdf (str): Path to the input PDF file.
        output_folder (str): Folder to save the split PDF files.
        page_ranges (list): List of tuples representing page ranges. 
                            Example: [(1, 3), (4, 5)] for pages 1-3 and 4-5.
                            Use single-value tuples for individual pages, e.g., [(7,)].
    """
    # Read the input PDF
    reader = PdfReader(input_pdf)

    for i, page_range in enumerate(page_ranges):
        writer = PdfWriter()
        start_page = page_range[0] - 1  # Pages are 0-indexed in PyPDF2
        end_page = page_range[1] if len(page_range) > 1 else page_range[0]

        # Add pages to the writer
        for page in range(start_page, end_page):
            writer.add_page(reader.pages[page])

        # Save the split PDF
        output_path = f"{output_folder}/split_part_{i+1}.pdf"
        with open(output_path, "wb") as output_file:
            writer.write(output_file)
            print(f"Saved: {output_path}")

# Example usage
input_pdf_path = "example.pdf"  # Path to the input PDF
output_directory = "output_pdfs"  # Directory to save the split PDFs
page_ranges_to_split = [(1, 3), (4,), (5, 7)]  # Split by pages 1-3, page 4, and pages 5-7

# Split the PDF
split_pdf(input_pdf_path, output_directory, page_ranges_to_split)
