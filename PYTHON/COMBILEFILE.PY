
import os
import pandas as pd

# Define the folder containing the Excel files
folder_path = './DATA'

# Get a list of all Excel files in the folder
excel_files = [f for f in os.listdir(folder_path) if f.endswith('.xlsx')]

# Create an empty list to store dataframes
dataframes = []

# Loop through each file and read it into a dataframe
for file in excel_files:
    file_path = os.path.join(folder_path, file)
    df = pd.read_excel(file_path)
    df['Source File'] = file  # Add a column to track the source file
    dataframes.append(df)

# Combine all dataframes into one
combined_df = pd.concat(dataframes, ignore_index=True)

# Save the combined dataframe to a new Excel file
output_file = 'combined_excel.xlsx'
combined_df.to_excel(output_file, index=False)

print(f"All files have been combined into {output_file}")
