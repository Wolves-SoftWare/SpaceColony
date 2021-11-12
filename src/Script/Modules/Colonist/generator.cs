using SpaceColony.Script.Class;
using System.Collections.Generic;
using Godot;

namespace SpaceColony.Script.Modules.Colonist
{
	public class Generator
	{
		public static void generate(int number)
		{
			var Colonist = new List<Colon>();
			for (int i = 0; i < number; i++)
			{
				Colonist.Add(new Colon(){Name = "jean mich", Gender = "Male",Skill = "1",Social = "2",Tasks = "3"});
			}
			foreach (Colon colon in Colonist)
			{
				GD.Print(colon);
			}
		}
	}
}
