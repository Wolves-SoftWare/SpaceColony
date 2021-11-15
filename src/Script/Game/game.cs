using Godot;
using System.Collections;
using SpaceColony.Script.Utils;
using SpaceColony.Script.Modules.Colonist;
using SpaceColony.Script.Class;

public class game : Node
{
	// Declare member variables here. Examples:
	// private int a = 2;
	// private string b = "text";

	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		Generator.Generate(1);
	}

//  // Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(float delta)
	{
		
	}
	private void BackPressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Main.tscn");
		GameOptions gameOption = new GameOptions();
		GD.Print(gameOption.colonCount);
	}
	
}



