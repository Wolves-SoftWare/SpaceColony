"""
TODO
    - Faire une boucle pour convertir tout les elements d'une liste qui sont dans[Planet,Star,Satellite,System,Orbit]
"""

import json
from src.SSG.Class.Planet import Planet
from src.SSG.Class.System import System
from src.SSG.Class.Star import Star
from src.SSG.Class.Satellite import Satellite
from src.SSG.Class.Orbit import Orbit
import os
os.chdir("../SSG")
path = "/Users/floriandelrieu/OneDrive/Logiciels et Jeux/SpaceColony/src/coc_testinghall/"
my_details = {
    'name': 'John Doe',
    'age' : 29
}

P1 = Planet(Name="TestPlanet")
S1 = System()

def SaveInJSON(Planet,json_name):
    dico = Planet.__dict__
    json_file = open(path + json_name+".json","w")
    json.dump(dico, json_file)

def ConvertInDict(object):
    dico = object.__dict__
    for k in list(dico.keys()):
        if type(dico[k]) in [Planet,Star,Satellite,System,Orbit]:
            dico[k] = dico[k].__dict__
        elif type(dico[k]) is list:
            for el in dico[k]:
                if type(el) in [Planet,Star,Satellite,System,Orbit]:
                    el = el.__dict__
SaveInJSON(S1,"S1")
