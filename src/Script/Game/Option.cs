using Godot;
using System;

public class Option : Godot.Node
{
	private int colonCount;
	public override void _Ready()
	{
		
	}

	private void Backpressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Main.tscn");
	}
	private void Textchanged(String text)
	{

		var label = (Label)GetNode("NaN");
		GD.Print(label);
	}
}






