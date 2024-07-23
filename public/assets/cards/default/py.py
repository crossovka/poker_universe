import os

# Получаем список файлов в текущей директории
files = os.listdir()

# Выводим названия файлов
for file in files:
    print(file)