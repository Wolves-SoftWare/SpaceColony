using System;
using SpaceColony.Script.Class;
using System.Collections.Generic;
using System.Linq;

using Godot;

using Newtonsoft.Json.Linq;

using SpaceColony.Script.Class.SubClass;
using SpaceColony.Script.Utils;
namespace SpaceColony.Script.Modules.Colonist
{
	public class Generator
	{
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

			
			
			foreach (Colon colon in Colonist)
			{
				var subList = Colonist.Where(p => p.Name != colon.Name);
				JObject test = (JObject) JToken.FromObject(colon.Skill);
				List<string> keys = test.Properties().Select(x => x.Name).ToList();

				foreach (string skill in keys)
				{
					switch (skill)
					{
						case "Farming":
							colon.Skill.Farming.Xp = Convert.ToInt32(
								(colon.Skill.Farming.Point * 1000 + (colon.Skill.Farming.Point - 1) * 200) /
								(colon.Skill.Farming.Interrest == 1 ? 1.2 :
									colon.Skill.Farming.Interrest == 2 ? 1.5 : 1));
							break;
						case "Extract":
							colon.Skill.Extract.Xp = Convert.ToInt32(
								(colon.Skill.Extract.Point * 1000 + (colon.Skill.Extract.Point - 1) * 200) /
								(colon.Skill.Extract.Interrest ==
								 1 ? 1.2 :
									colon.Skill.Extract.Interrest == 2 ? 1.5 : 1));
							break;
						case "Build":
							colon.Skill.Build.Xp = Convert.ToInt32(
								(colon.Skill.Build.Point * 1000 + (colon.Skill.Build.Point - 1) * 200) /
								(colon.Skill.Build.Interrest ==
								 1 ? 1.2 :
									colon.Skill.Build.Interrest == 2 ? 1.5 : 1));
							break;
						case "Hunting":
							colon.Skill.Hunting.Xp = Convert.ToInt32(
								(colon.Skill.Hunting.Point * 1000 + (colon.Skill.Hunting.Point - 1) * 200) /
								(colon.Skill.Hunting.Interrest ==
								 1 ? 1.2 :
									colon.Skill.Hunting.Interrest == 2 ? 1.5 : 1));
							break;
						case "Diplomat":
							colon.Skill.Diplomat.Xp = Convert.ToInt32(
								(colon.Skill.Diplomat.Point * 1000 + (colon.Skill.Diplomat.Point - 1) * 200) /
								(colon.Skill.Diplomat.Interrest ==
								 1 ? 1.2 :
									colon.Skill.Diplomat.Interrest == 2 ? 1.5 : 1));
							break;
						case "Craft":
							colon.Skill.Craft.Xp = Convert.ToInt32(
								(colon.Skill.Craft.Point * 1000 + (colon.Skill.Craft.Point - 1) * 200) /
								(colon.Skill.Craft.Interrest ==
								 1 ? 1.2 :
									colon.Skill.Craft.Interrest == 2 ? 1.5 : 1));
							break;
						case "Medic":
							colon.Skill.Medic.Xp = Convert.ToInt32(
								(colon.Skill.Medic.Point * 1000 + (colon.Skill.Medic.Point - 1) * 200) /
								(colon.Skill.Medic.Interrest ==
								 1 ? 1.2 :
									colon.Skill.Medic.Interrest == 2 ? 1.5 : 1));
							break;
					}

				}

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
