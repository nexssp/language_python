import autopy


def find_image_example():
    needle = autopy.bitmap.Bitmap.open('needle.png')
    haystack = autopy.bitmap.Bitmap.open('haystack.png')

    pos = haystack.find_bitmap(needle)
    if pos:
        print("Found needle at: %s" % str(pos))


find_image_example()
