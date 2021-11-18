using Godot;
using System;

public class Option : Godot.Node
{
	private int colonCount;

	private void Colons_number_changed(String new_text)
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
