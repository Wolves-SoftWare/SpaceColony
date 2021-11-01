
class Testing_system:
    def __init__(self):
        self.StarList = []
        self.nbRogueOrbit = 0
        self._nbStar = 1
        self.nbStar = 1
        self.nbOrbit = 0


class Testing_Star:
    def __init__(self):
        self.Distance = 100
        self.IsPrimary = True  # Si etoile primaire ou companion etc...
        self.IsDwarf = False  # Si l'étoile est Naine ou pas
        self.Class, self.Decimal, self.Size = "G","3","V"