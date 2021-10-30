"""
TODO
    - Faire une boucle pour convertir tout les elements d'une liste qui sont dans[Planet,Star,Satellite,System,Orbit]
    - Etre doué
    - Faire fonctionner ce pu*** de code de mer** qui n'est pourtant pas compliqué
            - je parle de la f2
            - f1 c'est pas bon
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
NonJSONWritableList = [Planet,Star,Satellite,Orbit,System]

S = Star()
dico = S.__dict__

def SaveInJSON(Planet,json_name):
    dico = Planet.__dict__
    dico = f1(dico)
    json_file = open(json_name+".json","w")
    json.dump(dico, json_file)

def f2(obj):
    obj = obj.__dict__
    for el in obj:
        if type(obj[el]) is (list or dict):
            f2(el)
        elif type(el) in NonJSONWritableList:
            el = el.__dict__
            f2(el)


def f1(Objet):
    if type(Objet) in NonJSONWritableList:
        dico = Objet.__dict__
        for thiskey in dico.keys():
            if type(dico[thiskey]) is list:
                for el in dico[thiskey]:
                    f1(el)
        return dico


#            if type(dico[thiskey]) is dict:
#                newdico = dico[thiskey]
#                for el in newdico

#    return type(Objet) not in [Planet,System,Orbit,Star,Satellite]


f2(S)
#SaveInJSON(TestingStar,path + "S1")
