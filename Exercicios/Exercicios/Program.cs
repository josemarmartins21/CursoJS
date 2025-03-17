class Program
{
    public static void Main()
    {
         System.Console.Write("Qual é a velocidade do seu carro: ");
         int v = int.Parse(Console.ReadLine());
         if (v > 80)
         {
            System.Console.WriteLine("Você foi muntado");
         }
    }
}