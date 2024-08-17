from bs4 import BeautifulSoup as bs
from pathlib import Path


def getAllImagePath():
    return list(Path("./assets").glob("*.webp"))

def readSoup():
    with open("./template.txt") as fp:
        soup = bs(fp, 'html.parser')
    return soup

def writeSoup(soup):
    with open("./index.html", "w") as fp:
        fp.write(soup.prettify())

def attachImg(container, img_pth):
    newImg = soup.new_tag('img', src=str(img_pth), alt=img_pth.stem)
    container.append(newImg)

soup = readSoup()
mainCon = soup.find('div', {'id': 'photoMain'})

img_path_list = getAllImagePath()
container = soup.new_tag('div', **{'class': 'column'})
col_size = len(img_path_list) // 3
for i, img_pth in enumerate(img_path_list):
    if (i % col_size) == 0 and i != 0:
        mainCon.append(container)
        container = soup.new_tag('div', **{'class': 'column'})
    attachImg(container, img_pth)

# print(newImg)
writeSoup(soup)

