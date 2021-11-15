namespace SpaceColony.Script.Class
{
    public class GameOptions
    {
        public int colonCount = 5;

        public void setColonCount(int count)
        {
            colonCount = count;
        }
        
        public int getColonCount()
        {
            return colonCount;
        }
    }
}