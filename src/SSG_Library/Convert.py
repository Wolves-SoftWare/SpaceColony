"""
Module for importing data and convert a file into a list or a dictionnary
"""
import numpy as np

#-----------------------------------------------------------------------------------------------------------------------------------------------------------
def Csv2Dict(DataFileName,separator="***"):
    """
    Convert a CSV file into a dict with the first line as titles and other as data. Like column tabular
    """
    import csv

    DATA = dict()
    CSV = csv.reader(open(DataFileName,"r"))

    line = 0
    col = 0
    LOOP = True

    for row in CSV:
        N_col = len(row)
    del row
    
    while col < N_col:
        CSV = csv.reader(open(DataFileName,"r"))
        for row in CSV:
            if line == 0:
                curTitle = row[col]
                DATA[curTitle] = list()
            else:
                try:
                    DATA[curTitle].append(float(row[col]))
                except:
                    DATA[curTitle].append(row[col])
            line+=1
        col+=1
        line = 0
    return DATA

#-----------------------------------------------------------------------------------------------------------------------------------------------------------
def Dict2CSV(Dict,DataFileName,separator="***"):
    """
    Convert a Dictionnary into a CSV file.
    Keys are title in the first line line of the CSV file and data are below
    Data from any keys must have length

    """

    file = open(DataFileName,"w")
    row = 0
    N_keys = len(Dict.keys())
    N_row = list()

    i_key = 0
    for k in Dict.keys():
        if i_key < N_keys-1:
            file.write(str(k)+",")
        elif i_key == N_keys-1:
            file.write(str(k)+"\n")
        i_key+=1
    row = 0
    i_key = 0
    for k in Dict.keys():
        try:
            N_row.append(len(Dict[k]))
        except:
            N_row.append(1)
    N_row = max(N_row)
    while row < N_row:
        for k in Dict.keys():
            if i_key < N_keys-1:
                try:
                    file.write(str(Dict[k][row]) +",")
                except:
                    file.write(",")
            if i_key == N_keys-1:
                try:
                    file.write(str(Dict[k][row]) +"\n")
                except:
                    file.write("\n")
            i_key+=1
        row+=1
        i_key = 0


