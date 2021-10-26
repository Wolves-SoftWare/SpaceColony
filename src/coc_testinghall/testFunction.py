import numpy as np
import random as rd

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


def mychoice(liste,weight):
    if len(weight) != 0:
        for i,w in enumerate(weight):
            if w == 0:
                weight.remove(weight[i])
                liste.remove(liste[i])
        min_w = min(weight)
        weight = list(np.array(weight) / min_w)  # Pour normaliser les poids
        for _ in weight: _ = int(truncDecimal(_,0)) # Enlève les decimals des poids
        string = ""
        for el in liste:
            index_el = liste.index(el)
            string += el * int(weight[index_el])
        liste  = [el for el in string]
    index_choose = np.random.rand() * len(liste)
    index_choose = truncDecimal(index_choose,0)
    return liste[index_choose]


###### Run the function
weight = [1,2,4,1,0]
liste = ["a","b","c","d","e"]
mychoice(liste,weight=weight)
i = 0
while i < 10:
    print(mychoice(liste,weight))
    i += 1