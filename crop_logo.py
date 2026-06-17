import sys
try:
    # pyrefly: ignore [missing-import]
    from PIL import Image, ImageChops
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageChops

def trim(im):
    # Convert image to RGB if it's RGBA and has a white background, or handle transparency
    if im.mode in ('RGBA', 'LA'):
        # Create a white background image
        background = Image.new(im.mode[:-1], im.size, (255, 255, 255))
        try:
            background.paste(im, im.split()[-1]) # Paste using alpha as mask
        except Exception:
            background = im.convert('RGB')
        im = background
    
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def main():
    img_path = r"d:\Antigravity\shinigamichess\public\logo.png"
    out_path = r"d:\Antigravity\shinigamichess\public\logo_cropped.png"
    
    try:
        im = Image.open(img_path)
        print(f"Original size: {im.size}")
        
        # We assume the background is roughly the color of the top-left pixel
        cropped = trim(im)
        print(f"Cropped size: {cropped.size}")
        
        # Save as PNG
        cropped.save(out_path)
        print("Successfully cropped and saved to logo_cropped.png")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
