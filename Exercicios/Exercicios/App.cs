class App
{
    public static void Main()
    {
        int idade;
        //int c; 
        System.Console.WriteLine("-------Alistamento Militar--------------");
        System.Console.Write("Digite a sua idade: ");
        idade = Convert.ToInt32(Console.ReadLine()); 
       
        if (idade < 18)
        {
            int c = idade - 18 ; 
            System.Console.WriteLine("Faltam " + c + " anos para você fazer o alistamneto");
            
        }
    }
}