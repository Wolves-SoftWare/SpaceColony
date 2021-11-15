using Godot;
using System.Collections;
using SpaceColony.Script.Utils;
using SpaceColony.Script.Modules.Colonist;
using SpaceColony.Script.Class;

public class game : Node
{
	public GameOptions options = new GameOptions();
	public override void _Ready()
	{
		Generator.Generate(options.getColonCount());
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



