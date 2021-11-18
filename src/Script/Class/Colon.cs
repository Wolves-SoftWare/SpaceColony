using SpaceColony.Script.Class.SubClass;
using System.Collections;
using System.Collections.Generic;

namespace SpaceColony.Script.Class

{
	public class Colon
	{
		public string Name { get; set; }
		public string Gender { get; set; }
		public List<SkillData> Skill { get; set; }
		public List<Tasks>  Tasks { get; set; }
		public List<Social> Social { get; set; }

	}
}
