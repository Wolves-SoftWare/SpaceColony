using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
namespace SpaceColony.Script.Utils

{
	public class Choice
	{
		public static System.Object Make(ArrayList list,ArrayList weights)
		{
			ArrayList newList = new ArrayList();
			ArrayList newWeights = new ArrayList();
			for (int i = 0; i < weights.Count; i++)
			{
				int number = Convert.ToInt32(weights[i]);
				if (number != 0)
				{
					newList.Add(list[i]);
					newWeights.Add(weights[i]);
				}
			}
			ArrayList chance = new ArrayList();
			for (int i = 0; i < newList.Count; i++)
			{
				int indice = int.Parse(newWeights[i].ToString());
				for (int l = 0; l < indice; l++)
				{
					chance.Add(newList[i]);
				}
			}
			Random random = new Random();
			return chance[random.Next(0, chance.Count)];
		}
	}
}
