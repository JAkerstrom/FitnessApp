namespace fitnessData.DataModels
{
    public class Excercise
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public static Excercise Create(string name,
                                       string desc)
        {
            return new Excercise()
            {
                Name = name,
                Description = desc
            };
        }
    }
}
