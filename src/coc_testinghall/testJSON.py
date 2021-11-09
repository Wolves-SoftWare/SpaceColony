"""
FIXME
    - bug in f2 when Systems have Planets
"""
import json
from Class.Planet import Planet
from Class.System import System
from Class.Star import Star
from Class.Satellite import Satellite
from Class.Orbit import Orbit
from src.coc_testinghall.TestingObject import Testing_system, Testing_Star, Testing_Planet
import os
os.chdir("../SSG")
path = "/Users/floriandelrieu/OneDrive/Logiciels et Jeux/SpaceColony/src/coc_testinghall/"
NonJSONWritableList = [Planet,Star,Satellite,Orbit,System,
                       Testing_system,Testing_Star,Testing_Planet]

S = System()
S.createPlanet()

#S = Testing_system()
#s1 = Testing_Star()
#p1 = Testing_Planet()
#s1.Orbit_list = [p1]
#S.StarList = [s1]


def SaveInJSON(Objet,json_name):
    #dico = Planet.__dict__
    #dico = f1(dico)
    json_file = open(json_name+".json","w")
    json.dump(Objet, json_file)

def f2(obj):
    """
    FIXME
        + work if System have no planets
        + work when :obj: is any classe
        o doesn't work when System have Planets
          - TypeError: string indices must be integers in line 60
          - when obj=Planet() and el1="Planet"
            - why ?
    """

    if type(obj) in NonJSONWritableList:  # Verifie si :obj: est pas :JSON writable:
        obj = obj.__dict__  # Transforme en :dict:
    for el1 in obj:  # Détecte si des éléments de :obj: sont :JSON writable:
            if type(obj[el1]) in NonJSONWritableList or type(el1) in NonJSONWritableList:
                obj = f2(obj[el1])
            if type(obj[el1]) is list:
                curr_list = obj[el1]
                new_list = []
                for el2 in curr_list:
                    temp = f2(el2)
                    new_list.append(temp)
                obj[el1] = new_list.copy()
    return obj

#S2 = S.__copy__()
S = f2(S)
#SaveInJSON(S2,path + "S1")

"""
    if type(obj) in NonJSONWritableList:  # Verifie si :obj: est pas :JSON writable:
        obj = obj.__dict__ # Transforme en :dict:
    for el1 in obj: # Détecte si des éléments de :obj: sont :JSON writable:
        try:
            if type(obj[el1]) in NonJSONWritableList:
                obj = f2(el1)
        except:
            if type(el1) in NonJSONWritableList:
                obj = f2(el1)
        finally:
            if type(obj[el1]) is list:
                curr_list = obj[el1]
                new_list = []
                for el2 in curr_list:
                    temp = f2(el2)
                    new_list.append(temp)
                obj[el1] = new_list.copy()
"""