using System;
using SpaceColony.Script.Class;
using System.Collections.Generic;
using Godot;
using System.Linq;
using SpaceColony.Script.Class.SubClass;
using SpaceColony.Script.Utils;
namespace SpaceColony.Script.Modules.Colonist
{
	public class Generator
	{
		public static List<string> names;
		public static void Generate(int number)
		{
			
			var Colonist = new List<Colon>();
			Colonist.Add(new Colon(){Name = "jean", Gender = "Male",Skill = new  Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "mich", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "tr", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "ez", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "za", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "qs", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "dd", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "df", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});
			Colonist.Add(new Colon(){Name = "fg", Gender = "Male",Skill = new Skills(),Social = new List<Social>(),Tasks = new Tasks()});

			/*for (int i = 0; i < number; i++)
			{*/
				//Colonist.Add(new Colon(){Name = "jean mich", Gender = "Male",Skill = new Skill(),Social = new List<Social>(),Tasks = new Tasks()});
			//}
			foreach (Colon colon in Colonist)
			{
				var subList = Colonist.Where(p => p.Name != colon.Name);
				foreach (Colon c in subList)
				{
					int socialValue = new Random().Next(0,10);
					GD.Print(socialValue);
					if (socialValue == 9)
					{
						int random_number = new Random().Next(-75, 75);
						Social social = new Social(){Name= c.Name,Point=random_number,RelationFocus = null};
						colon.Social.Add(social);
					}
				}
			}
			
			
			var path = AppDomain.CurrentDomain.BaseDirectory + "/data/save/game.json";
			SpaceColonyJSON.WriteToJsonFile<List<Colon>>(path,Colonist);
		}
	}
}
