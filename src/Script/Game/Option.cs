using Godot;
using System;

public class Option : Node2D
{
	// Declare member variables here. Examples:
	// private int a = 2;
	// private string b = "text";

	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		
	}

	private void Backpressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Game.tscn");
	}
	private void Textchanged(String text)
	{
		GD.Print(text);
	}
}






