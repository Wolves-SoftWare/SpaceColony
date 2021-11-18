using Godot;
using System;

public class MainMenuButton : Control
{
	private void BackButton_pressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Main.tscn");
	}
}
