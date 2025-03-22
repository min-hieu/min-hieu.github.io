from pathlib import Path
import imageio.v3 as iio
from tqdm import tqdm
from PIL import Image
import numpy as np
import lpips
import torch

import matplotlib.pyplot as plt

cold = False
sim_fn = lpips.LPIPS(net='alex')
all_images = list(Path("./assets").glob("*.webp"))
exclude_list = ["copyright.webp"]
all_images = [str(img.resolve()) for img in all_images if img.name not in exclude_list]

if cold:
    sim_mat = torch.zeros(len(all_images), len(all_images))
    with torch.no_grad():
        for i, img0 in enumerate(tqdm(all_images)):
            for j, img1 in enumerate(tqdm(all_images, leave=True)):
                im0tensor = torch.from_numpy(iio.imread(img0)).moveaxis(-1, 0)[None]
                im1tensor = torch.from_numpy(iio.imread(img1)).moveaxis(-1, 0)[None]
                im0tensor = torch.nn.functional.interpolate(im0tensor, size=(256, 256))
                im1tensor = torch.nn.functional.interpolate(im1tensor, size=(256, 256))
                sim = sim_fn.forward(im0tensor, im1tensor)
                sim_mat[i, j] = sim


    torch.save(sim_mat, "sim_mat.pt")
else:
    sim_mat = torch.load("sim_mat.pt")

sim_mat.fill_diagonal_(torch.inf)

import matplotlib.pyplot as plt

curr_idx = 0
visited = torch.zeros(len(all_images), dtype=bool)
pbar = tqdm(all_images, leave=True)
while (~visited).sum() != 0:
    visited[curr_idx] = 1
    sim_mat[:,visited] = torch.inf
    im_sim = sim_mat[curr_idx]
    curr_idx = torch.argmin(im_sim)

    im_pth = Path(all_images[curr_idx])
    im_pth.rename(f"./assets/{sum(visited):05}{im_pth.suffix}")
    pbar.update(1)
