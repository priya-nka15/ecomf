# Create a zip file containing all the project files
import zipfile
import os

# Define the files to include in the zip
project_files = [
    'index.html',
    'styles.css', 
    'script.js',
    'README.md',
    'package.json',
    'QUICKSTART.md'
]

# Create the zip file
zip_filename = 'cloudtech-store-complete-project.zip'

with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    # Add each file to the zip
    for file in project_files:
        if os.path.exists(file):
            # Add file to zip with a folder structure
            zipf.write(file, f'cloudtech-store/{file}')
            print(f"Added {file} to zip")
        else:
            print(f"Warning: {file} not found")

print(f"\n✅ Successfully created: {zip_filename}")
print(f"📁 File size: {os.path.getsize(zip_filename)} bytes")

# List the contents of the zip file
print(f"\n📋 Contents of {zip_filename}:")
with zipfile.ZipFile(zip_filename, 'r') as zipf:
    file_list = zipf.namelist()
    for file in file_list:
        info = zipf.getinfo(file)
        print(f"   {file} ({info.file_size} bytes)")

print(f"\n🎉 Your complete CloudTech Store project is ready!")
print(f"📥 Download: {zip_filename}")
print(f"📂 Extract the zip file and open 'cloudtech-store/index.html' to start!")