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

def y_value(f_array,x_array,x):
    """
    Calcul la fonction affine passant point par point et renvoie l'ordonnée d'un point x situé entre deux point
    de :x_array:
    :param f_array: Nuage de point contenant les ordonnées
    :param x_array: Nuage de point contenant les x
    :return: as float
    """
    f_array , x_array = np.array(f_array) , np.array(x_array)
    assert len(f_array) == len(x_array) , ":f_array: and :x_array: must be the same lenght"
    assert x_array[0] <= x <= x_array[-1] , "x doit être compris dans :x_array:"
    for i,el in enumerate(x_array):
        if x_array[i] <= x <= x_array[i+1]: indic = i
    a = (f_array[indic+1] - f_array[indic])/(x_array[indic+1] - x_array[indic])
    b = f_array[indic] - a * x_array[indic]
    return float(a*x + b)