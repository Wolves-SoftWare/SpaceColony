using Godot;
using System;

public class MainMenuButton : Control
{
	// Declare member variables here. Examples:
	// private int a = 2;
	// private string b = "text";

	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		
	}
	
	private void BackToMenuPressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Main.tscn");

	}
}






