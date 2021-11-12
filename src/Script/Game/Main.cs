using Godot;
using System;
using SpaceColony.Script.Utils;
public class Main : Godot.Node
{
	public Node CurrentScene { get; set; }
	
	public override void _Ready()
	{
		Viewport root = GetTree().GetRoot();
		CurrentScene = root.GetChild(root.GetChildCount() - 1);
	}
	
	
	private void StartPressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Game.tscn");
	}
}






