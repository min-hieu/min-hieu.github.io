from bs4 import BeautifulSoup as bs
from pathlib import Path


def getAllImagePath():
    all_images = list(Path("./assets").glob("*.webp"))
    exclude_list = ["copyright.webp"]
    all_images = sorted([img for img in all_images if img.name not in exclude_list])
    return all_images

def readSoup():
    with open("./template.html") as fp:
        soup = bs(fp, 'html.parser')
    return soup

def writeSoup(soup):
    with open("./index.html", "w") as fp:
        fp.write(soup.prettify())

def attachImg(container, img_pth):
    newImg = soup.new_tag('img', src=str(img_pth), alt=img_pth.stem)
    newImg['class'] = 'photo'
    container.append(newImg)

soup = readSoup()
mainCon = soup.find('div', {'id': 'photoMain'})

img_path_list = getAllImagePath()
for i, img_pth in enumerate(img_path_list):
    attachImg(mainCon, img_pth)

# print(newImg)
writeSoup(soup)

