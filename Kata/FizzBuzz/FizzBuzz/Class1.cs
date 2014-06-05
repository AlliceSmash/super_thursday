using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace NumberGame
{
    public class Game1
    {
        public string FizzBuzz(int input)
        {
            if (input % 15 == 0) return "FizzBuzz";
            if (input % 3 == 0) return "Fizz";
            if (input % 5 == 0) return "Buzz";
            string output = input.ToString();
            return output;
        }
    }
}
