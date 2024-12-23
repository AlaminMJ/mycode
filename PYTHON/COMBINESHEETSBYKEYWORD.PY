import pandas as pd
import os
from datetime import datetime

def combine_rows_with_keyword(directory_path, keyword, output_folder="OUTPUT"):
    """
    Combines rows containing the specified keyword from all Excel files and sheets 
    in the specified directory into a uniquely named Excel file.

    Parameters:
    - directory_path: str, path to the directory containing Excel files.
    - keyword: str, the keyword to search for in the rows (e.g., 'GRAND TOTAL').
    - output_folder: str, folder to save the output file (default is 'OUTPUT').

    Returns:
    - str: Path to the output file.
    """
    # Ensure the output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Create a dynamic and unique output file name using a timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file = os.path.join(output_folder, f"combined_{keyword.replace(' ', '_')}_{timestamp}.xlsx")

    # Create an empty DataFrame to collect rows
    combined_rows = pd.DataFrame()

    # Loop through all files in the directory
    for filename in os.listdir(directory_path):
        if filename.endswith(".xls") or filename.endswith(".xlsx"):
            # Full path to the input file
            input_file = os.path.join(directory_path, filename)

            # Load the Excel file
            excel_data = pd.ExcelFile(input_file)

            # Loop through each sheet in the current Excel file
            for sheet_name in excel_data.sheet_names:
                # Read the sheet into a DataFrame without headers
                sheet_data = pd.read_excel(input_file, sheet_name=sheet_name, header=None)

                # Find rows containing the specified keyword in any column
                filtered_rows = sheet_data[sheet_data.apply(
                    lambda row: row.astype(str).str.contains(keyword, case=False).any(), axis=1
                )]

                # Add new columns with the file name and sheet name at the start
                filtered_rows.insert(0, 'FileName', filename)   # Add FileName as the first column
                filtered_rows.insert(1, 'SheetName', sheet_name)  # Add SheetName as the second column

                # Append the rows to the combined_rows DataFrame
                combined_rows = pd.concat([combined_rows, filtered_rows], ignore_index=True)

    # Save the combined DataFrame to a new Excel file
    combined_rows.to_excel(output_file, index=False, header=False)

    print(f"Combined rows containing '{keyword}' saved to '{output_file}'")
    return output_file

# Example usage of the function
output_path = combine_rows_with_keyword(
    directory_path="DATA",
    keyword="GRAND TOTAL",
    output_folder="OUTPUT"
)
print(f"File created at: {output_path}")
