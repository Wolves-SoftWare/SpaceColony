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
from src.coc_testinghall.TestingObject import Testing_system, Testing_Star
import os
os.chdir("../SSG")
path = "/Users/floriandelrieu/OneDrive/Logiciels et Jeux/SpaceColony/src/coc_testinghall/"
NonJSONWritableList = [Planet,Star,Satellite,Orbit,System,
                       Testing_system,Testing_Star]

S = Testing_system()
#del S.StarList
s1 = Testing_Star()
s2 = Testing_Star()
S.StarList = [s1,s2]

def SaveInJSON(Objet,json_name):
    #dico = Planet.__dict__
    #dico = f1(dico)
    json_file = open(json_name+".json","w")
    json.dump(Objet, json_file)

def f2(obj):
    """
    FIXME
        if type(obj[el]) is (list or dict):
    """
    if type(obj) in NonJSONWritableList:  # Verifie si :obj: est pas :JSON writable:
        obj = obj.__dict__ # Transforme en :dict:
    for el in obj: # Détecte si des éléments de :obj: sont :JSON writable:
        if type(el) in NonJSONWritableList:
            obj = f2(el)
        elif type(obj[el]) is list:
            curr_list = obj[el]
            for this_el in curr_list:
                this_el = f2(this_el)
    return obj

S = f2(S)
#SaveInJSON(S,path + "S1")
