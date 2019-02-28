# http://www.arducam.com/multi-camera-adapter-module-raspberry-pi/

import RPi.GPIO as gp
import os


def init():
    gp.setwarnings(False)
    gp.setmode(gp.BOARD)

    gp.setup(7, gp.OUT)
    gp.setup(11, gp.OUT)
    gp.setup(12, gp.OUT)

    gp.setup(15, gp.OUT)
    gp.setup(16, gp.OUT)
    gp.setup(21, gp.OUT)
    gp.setup(22, gp.OUT)

    gp.output(11, True)
    gp.output(12, True)
    gp.output(15, True)
    gp.output(16, True)
    gp.output(21, True)
    gp.output(22, True)


def capture(cam):
    cmd = "raspistill -o capture_%d.jpg" % cam
    os.system(cmd)


def camA():
    gp.output(7, False)
    gp.output(11, False)
    gp.output(12, True)


def camB():
    gp.output(7, True)
    gp.output(11, False)
    gp.output(12, True)


def camC():
    gp.output(7, False)
    gp.output(11, True)
    gp.output(12, False)


def camD():
    gp.output(7, True)
    gp.output(11, True)
    gp.output(12, False)


def camOff():
    gp.output(7, False)
    gp.output(11, True)
    gp.output(12, True)

