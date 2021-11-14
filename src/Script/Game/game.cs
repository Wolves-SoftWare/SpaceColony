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
		ArrayList list = new ArrayList() {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
		ArrayList weights = new ArrayList() {7,7,7,8,10,15,12,12,9 ,7 ,6 ,5 ,4, 4 ,3 ,2 ,2 ,1, 1};

		Choice.Make(list,weights);
		Generator.Generate(5);
		
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



