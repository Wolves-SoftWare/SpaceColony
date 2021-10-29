import json
from src.SSG.Class.Planet import Planet

my_details = {
    'name': 'John Doe',
    'age': 29
}
P1 = Planet()
P = Planet().__dict__
del(P["Satellites_list"])
del(P["MineralSurvey"])


with open('test.json', 'w') as json_file:
    json.dump(P, json_file)


def SaveInJSON(Planet,json_name):
    dico = Planet.__dict__
    for k in list(dico.keys()):
        if len(dico[k]) != 0:
            del(dico[k])
    with open(json_name, 'w') as json_file:
        json.dump(dico, json_file)

SaveInJSON(P1,"P1.json")
