# Example from https://github.com/autopilot-rs/autopy/blob/master/examples/sine_mouse_wave.py
import autopy
import math
import time
import random
import sys

TWO_PI = math.pi * 2.0


def sine_mouse_wave():
    """
    Moves the mouse in a sine wave from the left edge of
    the screen to the right.
    """
    width, height = autopy.screen.size()
    height /= 2
    height -= 10  # Stay in the screen bounds.

    for x in range(int(width)):
        y = int(height * math.sin((TWO_PI * x) / width) + height)
        autopy.mouse.move(x, y)
        time.sleep(random.uniform(0.001, 0.003))


sine_mouse_wave()
