import pandas as pd

# Path to your input and output Excel files
input_file = "your_input_file.xlsx"
output_file = "combined_grand_total_with_sheetnames.xlsx"

# Load the Excel file
excel_data = pd.ExcelFile(input_file)

# Create an empty DataFrame to collect rows
grand_total_rows = pd.DataFrame()

# Loop through each sheet
for sheet_name in excel_data.sheet_names:
    # Read the sheet into a DataFrame without headers
    sheet_data = pd.read_excel(input_file, sheet_name=sheet_name, header=None)
    
    # Find rows containing "Grand Total" in any column
    filtered_rows = sheet_data[sheet_data.apply(lambda row: row.astype(str).str.contains("Grand Total", case=False).any(), axis=1)]
    
    # Add a new column with the sheet name
    filtered_rows['SheetName'] = sheet_name
    
    # Append the rows to the grand_total_rows DataFrame
    grand_total_rows = pd.concat([grand_total_rows, filtered_rows], ignore_index=True)

# Save the combined DataFrame to a new Excel file
grand_total_rows.to_excel(output_file, index=False, header=False)

print(f"Combined rows saved to '{output_file}'")
