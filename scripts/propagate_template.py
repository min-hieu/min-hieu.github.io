from pathlib import Path
from bs4 import BeautifulSoup as bs

top_dir = Path(__file__).parent.parent
with open(top_dir / "templates/sandwich.html", "r") as f:
    soup = bs(f.read(), "html.parser")

print(soup)
