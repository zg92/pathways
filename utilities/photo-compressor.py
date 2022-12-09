import os
import sys
from PIL import Image


def filesList(file_path):
    return os.listdir(file_path)


def compressPhoto(file_to_save, file_name, destination_directory):
    picture = Image.open(file_to_save)
    picture.save(os.path.join(destination_directory, file_name),
                 "JPEG", optimize=True, quality=50)
    return


def compressProcess(file_path, destination_directory):
    files = filesList(file_path)
    for file_to_edit in files:
        compressPhoto(file_to_save=os.path.join(
            sys.argv[1], file_to_edit), file_name=file_to_edit, destination_directory=destination_directory)


if __name__ == '__main__':
    if len(sys.argv) == 3:
        compressProcess(sys.argv[1], sys.argv[2])
    else:
        print('Arguments supplied were invalid')
