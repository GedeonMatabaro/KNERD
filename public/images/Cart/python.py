import os
# Get the list of video file names in the folder
folder_path = "./"
files_names = [f for f in os.listdir(folder_path)]
print(files_names)