using Godot;
using System;

public class Option : Godot.Node
{
	private int colonCount;
	public override void _Ready()
	{
		
	}

	private void BackPressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Main.tscn");

	}
	private void Textchanged(String text)
	{
		
		
	}
}









