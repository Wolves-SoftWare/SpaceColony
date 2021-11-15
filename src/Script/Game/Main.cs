using Godot;
using System;
using SpaceColony.Script.Utils;
using Object = Godot.Object;

public class Main : Godot.Node
{
	public Vector2 sreenSize = new Vector2();
	
	public override void _Ready()
	{
		sreenSize = OS.GetScreenSize();
	}
	public override void _Process(float delta)
	{
		/*GDScript ScreenResizer = (GDScript) GD.Load("res://src/Script/Utils/ScreenResizer.gd");
		Object screenResizerNode = (Godot.Object) ScreenResizer.New();
		screenResizerNode.Call("Resize", sreenSize);*/
	}
	
	private void StartPressed()
	{
		GetTree().ChangeScene("res://src/Scenes/Game.tscn");

	}

}












