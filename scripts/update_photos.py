import PIL
from pathlib
import beautifulsoup4 as bs
from dataclasses import dataclass

@dataclass
class Photo:
    path: pathlib.Path
    data: PIL.Image

# get all image path
def read_images():
    photo_dir = Path(__file__).parent / 'fun/photos/assets'
    photos = []
    for p in photo_dir.glob("*.webp"):
        if p.stem == "watermark":
            continue
    return [Photo(p, PIL.Image.open(p)) for p in photo_dir.glob("*.webp")]

# read photo template file with bs
with open(Path(__file__).parent / 'templates/photo.html', 'r') as f:
    template = bs.BeautifulSoup(f.read(), 'html.parser')

