"""
Regroupe différentes méthodes générales pour diveres applications
"""
def truncDecimal(num,nbDecimal):
    NumInString = str(num)
    NumInList = NumInString.split(".")
    if len(NumInList) == 1:
        TrunquedNum = num
    else:
        NonDecimal = NumInString.split(".")[0]
        Decimal = NumInString.split(".")[1]
        if nbDecimal < len(Decimal):
            TrunquedNum = NonDecimal + "." + Decimal[:nbDecimal]
            TrunquedNum = float(TrunquedNum)
        else:
            TrunquedNum = num
        if nbDecimal == 0:
            TrunquedNum = int(NonDecimal)

    return TrunquedNum

def getFromDict(Dico,KeyList,Log=False):
    """
    Creer un nouveau dictionnaire possedant une partie des :keys: de l'ancien
    param :Dico: Dictionnaire à copier en partie
    param :KeyList: Liste des :keys: à copier dans :Dico:
    param :Log: Si :True: affiche un log en cas d'erreur
    """
    newDico = dict()
    for thisKey in KeyList:
        if thisKey in Dico.keys(): newDico[thisKey] = Dico[thisKey]
        else:
            if Log: print(str(thisKey) + " not found !")
    return newDico