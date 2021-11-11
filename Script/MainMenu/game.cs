using Godot;
using System.Collections;
using SpaceColony.Script.Utils;

public class game : Node
{
	// Declare member variables here. Examples:
	// private int a = 2;
	// private string b = "text";

	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		ArrayList List = new ArrayList();
		ArrayList Weights = new ArrayList();
		List.Add("Hello,");
		List.Add("World,");
		List.Add("!");
		Weights.Add(1);
		Weights.Add(0);
		Weights.Add(2);
		GD.Print(Choice.Make(List,Weights));
	}

//  // Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(float delta)
	{
	}

	
}
