import pandas as pd
import os

# Directory containing the Excel files
directory_path = "./DATA/"

# Output file to save the combined results
output_file = "combined_grand_total_with_sheetnames.xlsx"

# Create an empty DataFrame to collect rows
grand_total_rows = pd.DataFrame()

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

            # Find rows containing "Grand Total" in any column
            filtered_rows = sheet_data[sheet_data.apply(lambda row: row.astype(str).str.contains("TTL", case=False).any(), axis=1)]

            # Add a new column with the sheet name and the file name
            filtered_rows['SheetName'] = sheet_name
            filtered_rows['FileName'] = filename

            # Append the rows to the grand_total_rows DataFrame
            grand_total_rows = pd.concat([grand_total_rows, filtered_rows], ignore_index=True)

# Save the combined DataFrame to a new Excel file
grand_total_rows.to_excel(output_file, index=False, header=False)

print(f"Combined rows saved to '{output_file}'")
