from pathlib import Path
from tqdm import tqdm
import webp
import PIL
import os

from pillow_heif import register_heif_opener
register_heif_opener()

all_jpg = Path(__file__).parent.parent.glob("**/*.jpg")
all_JPG = Path(__file__).parent.parent.glob("**/*.JPG")
all_png = Path(__file__).parent.parent.glob("**/*.png")
all_PNG = Path(__file__).parent.parent.glob("**/*.PNG")
all_heic = Path(__file__).parent.parent.glob("**/*.heic")
all_HEIC = Path(__file__).parent.parent.glob("**/*.HEIC")

all_images = [*all_jpg, *all_JPG, *all_png, *all_PNG, *all_heic, *all_HEIC]

for pth in tqdm(all_images):
    out = f"{pth.parent.resolve() / pth.stem}.webp"
    with PIL.Image.open(pth) as img:
        webp.save_image(img, out, quality=80)
    os.remove(pth)
