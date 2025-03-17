class App
{
    public static void Main()
    {
        int idade;
        //int c; 
        System.Console.WriteLine("-------Alistamento Militar--------------");
        System.Console.Write("Digite a sua idade: ");
        idade = int.Parse(Console.ReadLine());
       
        if (idade < 18)
        {
            int c = 18 - idade; 
            System.Console.WriteLine("Faltam " + c + " anos para você fazer o alistamneto");
            
        }else
        {
            int i = idade - 18;
            System.Console.WriteLine("Ja se passaram " + i + " anos do alistamento");
        }
    }
}