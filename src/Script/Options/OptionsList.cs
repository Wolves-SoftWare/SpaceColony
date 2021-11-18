using Godot;
using System;
using SpaceColony.Script.Class;
public class OptionsList : Control
{

	private void Textchanged(String text)
	{
		GameOptions gameOption = new GameOptions();

		try 
		{
			int number = int.Parse(text);
			gameOption.colonCount = number;
			GD.Print(gameOption.colonCount);
		}
		catch (Exception e)
		{
			gameOption.colonCount = 5;
			GD.Print(gameOption.colonCount);
		}
	}
}



