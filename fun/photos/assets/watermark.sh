ls | grep .jpg | while read -r filepath; do
  fname=$filepath:t:r;
  echo watermarking $fname;
  magick $fname.jpg \( copyright.png -resize x%\[fx:u.h/0.3\] -alpha set -channel Alpha -evaluate set 50% \) -gravity SouthEast -geometry +15+15 -composite -resize x%\[fx:u.h/5] $fname.webp
done
