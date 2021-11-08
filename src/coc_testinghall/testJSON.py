"""
FIXME
    - bug when runnig System.createPlanet()
"""
import json
from Class.Planet import Planet
from Class.System import System
from Class.Star import Star
from Class.Satellite import Satellite
from Class.Orbit import Orbit
from src.coc_testinghall.TestingObject import Testing_system, Testing_Star
import os
os.chdir("../SSG")
path = "/Users/floriandelrieu/OneDrive/Logiciels et Jeux/SpaceColony/src/coc_testinghall/"
NonJSONWritableList = [Planet,Star,Satellite,Orbit,System,
                       Testing_system,Testing_Star]

S = System()
S.clearorbit()
S.createPlanet()
#del S.StarList
#s1 = Testing_Star()
#s2 = Testing_Star()
#S.StarList = [s1,s2]

def SaveInJSON(Objet,json_name):
    #dico = Planet.__dict__
    #dico = f1(dico)
    json_file = open(json_name+".json","w")
    json.dump(Objet, json_file)

def f2(obj):
    """
    FIXME
        - f2 bug when Planet are created is System files
        - need more debugging again ...

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
    if type(obj) in NonJSONWritableList:  # Verifie si :obj: est pas :JSON writable:
        obj = obj.__dict__  # Transforme en :dict:
    for el1 in obj:  # Détecte si des éléments de :obj: sont :JSON writable:
            if type(obj[el1]) in NonJSONWritableList or type(el1) in NonJSONWritableList:
                obj = f2(el1)
            if type(obj[el1]) is list:
                curr_list = obj[el1]
                new_list = []
                for el2 in curr_list:
                    temp = f2(el2)
                    new_list.append(temp)
                obj[el1] = new_list.copy()
    return obj

S2 = S.__copy__()
S2 = f2(S2)
#SaveInJSON(S2,path + "S1")
