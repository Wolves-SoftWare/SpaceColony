using SpaceColony.Script.Utils;
using System.Collections;

namespace SpaceColony.Script.Class.SubClass
{
    public class Skills
    {
        
        /**
         * TODO
         *  - Repair xp skill
         */
        private static ArrayList listPoint = new ArrayList()
            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};

        private static ArrayList weightsPoint = new ArrayList()
            {7, 7, 7, 8, 10, 15, 12, 12, 9, 7, 6, 5, 4, 4, 3, 2, 2, 1, 1};

        private static ArrayList listInterrest = new ArrayList() {0, 1, 2};
        private static ArrayList weightsInterrest = new ArrayList() {20, 7, 3};
        public SkillData Farming = new SkillData(){Point = Choice.Make(listPoint, weightsPoint), Interrest = Choice.Make(listInterrest, weightsInterrest)};
        public SkillData Extract = new SkillData(){Point = Choice.Make(listPoint, weightsPoint), Interrest = Choice.Make(listInterrest, weightsInterrest)};
        public SkillData Build = new SkillData(){Point = Choice.Make(listPoint, weightsPoint), Interrest = Choice.Make(listInterrest, weightsInterrest)};
        public SkillData Hunting = new SkillData(){Point = Choice.Make(listPoint, weightsPoint), Interrest = Choice.Make(listInterrest, weightsInterrest)};
        public SkillData Diplomat = new SkillData(){Point = Choice.Make(listPoint, weightsPoint), Interrest = Choice.Make(listInterrest, weightsInterrest)};
        public SkillData Craft = new SkillData(){Point = Choice.Make(listPoint, weightsPoint), Interrest = Choice.Make(listInterrest, weightsInterrest)};
        public SkillData Medic = new SkillData(){Point = Choice.Make(listPoint, weightsPoint), Interrest = Choice.Make(listInterrest, weightsInterrest)};
    }
}