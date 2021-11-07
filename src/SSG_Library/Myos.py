import os

def getOS():
    """
    Verifie sur quelle machine le code est exécuté
    :return: :MAC: ou :PC:
    """
    if os.getcwd()[0] == "/":TERMINAL = "MAC"
    else:                    TERMINAL = "PC"
    return TERMINAL

def goto_Onedrive():
    TERMINAL = getOS()
    if TERMINAL == "MAC":
        os.chdir("/Users/floriandelrieu/OneDrive/")
    elif TERMINAL == "PC":
        os.chdir("D:/OneDrive/")

def OneDrive_path():
    if TERMINAL == "MAC":
        path = "/Users/floriandelrieu/OneDrive/"
    elif TERMINAL == "PC":
        path = "D:/OneDrive/"
    return path

TERMINAL = getOS()