using System;
using System.Collections;
using SpaceColony.Script.Class;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using Godot;

using Newtonsoft.Json.Linq;

using SpaceColony.Script.Class.SubClass;
using SpaceColony.Script.Utils;
using Object = System.Object;

namespace SpaceColony.Script.Modules.Colonist
{
	public class Generator
	{
		private static ArrayList listPoint = new ArrayList()
			{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};

		private static ArrayList weightsPoint = new ArrayList()
			{7, 7, 7, 8, 10, 15, 12, 12, 9, 7, 6, 5, 4, 4, 3, 2, 2, 1, 1};

		private static ArrayList listInterrest = new ArrayList() {0, 1, 2};
		private static ArrayList weightsInterrest = new ArrayList() {17, 9, 3};

		public static void Generate(int number)
		{
			try
			{
				List<Colon> colonist = new List<Colon>();
				List<string> genderList = new List<string>() {"Male", "Female"};
				Random random = new Random();
				var names = SpaceColonyJSON.ReadFromJsonFile<DataNamesModel>(AppDomain.CurrentDomain.BaseDirectory +
																			 "/src/Assets/JSON/names.json");
				for (int i = 0; i < number; i++)
				{
					string gender = genderList[random.Next(genderList.Count)];
					if (gender == "Male")
					{
						colonist.Add(new Colon()
						{
							Name = names.Male[random.Next(names.Male.Count)],
							Gender = gender,
							Skill = new List<SkillData>()
							{
								new SkillData()
								{
									Name = "Farming", Point = Choice.Make(listPoint, weightsPoint),
									Interrest = Choice.Make(listInterrest, weightsInterrest)
								},
								new SkillData()
								{
									Name = "Extract", Point = Choice.Make(listPoint, weightsPoint),
									Interrest = Choice.Make(listInterrest, weightsInterrest)
								},
								new SkillData()
								{
									Name = "Build", Point = Choice.Make(listPoint, weightsPoint),
									Interrest = Choice.Make(listInterrest, weightsInterrest)
								},
								new SkillData()
								{
									Name = "Hunting", Point = Choice.Make(listPoint, weightsPoint),
									Interrest = Choice.Make(listInterrest, weightsInterrest)
								},
								new SkillData()
								{
									Name = "Diplomat", Point = Choice.Make(listPoint, weightsPoint),
									Interrest = Choice.Make(listInterrest, weightsInterrest)
								},
								new SkillData()
								{
									Name = "Craft", Point = Choice.Make(listPoint, weightsPoint),
									Interrest = Choice.Make(listInterrest, weightsInterrest)
								},
								new SkillData()
								{
									Name = "Medic", Point = Choice.Make(listPoint, weightsPoint),
									Interrest = Choice.Make(listInterrest, weightsInterrest)
								}
							},
							Social = new List<Social>(),
							Tasks = new List<Tasks>()
						});
					}
					else if (gender == "Female")
					{
						colonist.Add(new Colon()
						{
							Name = names.Female[random.Next(names.Female.Count)], Gender = gender, Skill =
								new List<SkillData>()
								{
									new SkillData()
									{
										Name = "Farming", Point = Choice.Make(listPoint, weightsPoint),
										Interrest = Choice.Make(listInterrest, weightsInterrest)
									},
									new SkillData()
									{
										Name = "Extract", Point = Choice.Make(listPoint, weightsPoint),
										Interrest = Choice.Make(listInterrest, weightsInterrest)
									},
									new SkillData()
									{
										Name = "Build", Point = Choice.Make(listPoint, weightsPoint),
										Interrest = Choice.Make(listInterrest, weightsInterrest)
									},
									new SkillData()
									{
										Name = "Hunting", Point = Choice.Make(listPoint, weightsPoint),
										Interrest = Choice.Make(listInterrest, weightsInterrest)
									},
									new SkillData()
									{
										Name = "Diplomat", Point = Choice.Make(listPoint, weightsPoint),
										Interrest = Choice.Make(listInterrest, weightsInterrest)
									},
									new SkillData()
									{
										Name = "Craft", Point = Choice.Make(listPoint, weightsPoint),
										Interrest = Choice.Make(listInterrest, weightsInterrest)
									},
									new SkillData()
									{
										Name = "Medic", Point = Choice.Make(listPoint, weightsPoint),
										Interrest = Choice.Make(listInterrest, weightsInterrest)
									}
								},
							Social = new List<Social>(), Tasks = new List<Tasks>()
						});
					}
				}

				SpaceColonyJSON.WriteToJsonFile<List<Colon>>(
					AppDomain.CurrentDomain.BaseDirectory + "/data/save/game.json", colonist);

				foreach (Colon colon in colonist)
				{
					Object[] subList = colonist.ToArray();
					foreach (SkillData skill in colon.Skill)
					{
						skill.Xp = Convert.ToInt32(
							(skill.Point * 1000 + (skill.Point - 1) * 200) /
							(skill.Interrest == 1 ? 1.2 :
								skill.Interrest == 2 ? 1.5 : 1));
					}

					foreach (Colon c in subList)
					{
						int socialValue = new Random().Next(0, 10);
						if (socialValue == 9)
						{
							int random_number = new Random().Next(-75, 75);
							Social socialColon = new Social()
								{Name = c.Name, Point = random_number, RelationFocus = "none"};
							Social socialC = new Social()
								{Name = colon.Name, Point = random_number, RelationFocus = "none"};
							if (c.Name != colon.Name)
							{
								c.Social.Add(socialC);
								colon.Social.Add(socialColon);
							}
						}
					}
				}

				SpaceColonyJSON.WriteToJsonFile<List<Colon>>(
					AppDomain.CurrentDomain.BaseDirectory + "/data/save/game.json", colonist);
				var xEle = new XElement("Colons",
					from colon in colonist
					select new XElement("Colon",
						new XAttribute("Name", colon.Name),
						new XElement("Gender", colon.Gender),
						new XElement("Skills", 
						from skill in colon.Skill
						select new XElement("Skill",
							new XAttribute("Name", skill.Name),
							new XElement("Point", skill.Point),
							new XElement("Interrest", skill.Interrest),
							new XElement("Xp", skill.Xp)
						)
						),
						new XElement("Socials",
						from social in colon.Social
						select new XElement("Social",
							new XAttribute("Name", social.Name),
							new XElement("Point", social.Point),
							new XElement("RelationFocus", social.RelationFocus)
						)
						),
						new XElement("Tasks",
						from task in colon.Tasks
						select new XElement("Colon",
							new XAttribute("Name", task.Name)
						)
						)
					));



				xEle.Save(AppDomain.CurrentDomain.BaseDirectory + "/src/Assets/data/colony.xml");
			}
			catch (Exception e)
			{
				GD.Print(e);
				throw;
			}

		}
	}
}
