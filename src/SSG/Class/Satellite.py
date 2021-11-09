import random as rd

import numpy as np
from Functions.RollingFunctions import *


class Satellite:
    """
    Uniquement les petits satellites sans atmosphere mais avec des caractéristiques utiles
    -   self.Composition: Composition du satellite
    -   self.Type: Type du satellite
    -   self.Size: Taille
    -   self.Distance: Distance par rapport à sa planète
    """
    def __init__(self,SatType,auto=True):
        self.Composition = []
        self.Type = SatType
        self.Size = int()
        self.Distance = int()
        if auto: self.Autogen()

    def __repr__(self):
        return f"{self.Type} at {self.Distance} orbit radii"

    def Autogen(self):
    #  self.Size
        if   self.Type in ["MinorRing","MajorRing"]:    self.Size = 1
        elif self.Type in ["Moonlets"]:                 self.Size = rd.choice(np.arange(100,1500,100))
        elif self.Type in ["SmallMoon"]:                self.Size = rd.choice(np.arange(1500,2200,100))
    # self.Distance
        self.Distance = DetermineDistance(self.Type)  # Recupere distance via .csv (voir :DetermineDistance:)

    def __copy__(self):
        newObject = Satellite()
        for attr in self.__dict__:
            newObject.__setattr__(attr,self.__getattribute__(attr))
        return newObject