using Godot;
using System;

public class Main : Godot.Node
{
	public Node CurrentScene { get; set; }
	
	public override void _Ready()
	{
		Viewport root = GetTree().GetRoot();
		CurrentScene = root.GetChild(root.GetChildCount() - 1);
	}
	
	public void GotoScene(string path)
	{
		CallDeferred(nameof(DeferredGotoScene), path);
	}

	public void DeferredGotoScene(string path)
	{
		CurrentScene.QueueFree();
		var nextScene = (PackedScene)GD.Load(path);
		CurrentScene = nextScene.Instance();
		GetTree().GetRoot().AddChild(CurrentScene);
		GetTree().SetCurrentScene(CurrentScene);
	}
	private void _on_Button_pressed()
	{
		var global = (Main)GetNode("/root/Node2D");
		global.GotoScene("res://Scenes/Game.tscn");
	}
}



