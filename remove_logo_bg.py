"""
Remove the dark navy background from the Shinigami Chess logo
and make it transparent so it blends with any website background.
"""

from PIL import Image
import numpy as np

input_path = "shinigamilogo.png"
output_path = "public/logo.png"

img = Image.open(input_path).convert("RGBA")
data = np.array(img, dtype=np.float32)

R, G, B, A = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# The logo background is dark navy (~10-20, 18-30, 40-60 in RGB)
# The gold artwork is brighter and warmer
# We remove pixels that are dark AND blue-dominant

# Brightness (luminance)
lum = 0.299*R + 0.587*G + 0.114*B

# "Blue-dominant dark" = typical navy background
is_dark = lum < 60
is_bluish = B > R * 1.3  # blue channel dominates red
is_bg = is_dark & is_bluish

# Soft transition: pixels near the edge of the mask get partial alpha
# Compute how "background-like" each pixel is (0=artwork, 1=bg)
bg_score = (np.clip(60 - lum, 0, 60) / 60.0) * (np.clip(B - R * 1.3, 0, 30) / 30.0)

# Alpha: artwork pixels stay fully opaque, bg pixels become fully transparent
alpha_new = np.clip(1.0 - bg_score * 2.5, 0.0, 1.0) * 255

data[:,:,3] = alpha_new.astype(np.uint8)

result = Image.fromarray(data.astype(np.uint8), "RGBA")
result.save(output_path, "PNG")
print(f"Saved transparent logo to: {output_path}")
