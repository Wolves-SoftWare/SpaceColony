import json
from src.SSG.Class.Planet import Planet

my_details = {
    'name': 'John Doe',
    'age': 29
}
P1 = Planet(Name="TestPlanet")
P1.Satellites_list = ["AST1","AST2"]
P1.MineralSurvey = {
    "Minerals": 4,
    "Common": 2
}
P = Planet().__dict__
del(P["Satellites_list"])
del(P["MineralSurvey"])


#with open('test.json', 'w') as json_file:
#    json.dump(P, json_file)


def SaveInJSON(Planet,json_name):
    dico = Planet.__dict__
    for k in list(dico.keys()):
        if type(dico[k]) is (dict or list):
            json_file = open(json_name+".json","w")
            json.dump(dico[k], json_file)
    json_file = open(json_name+".json","w")
    json.dump(dico, json_file)

SaveInJSON(P1,"P1")
