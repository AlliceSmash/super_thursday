using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NumberGame;

namespace NumberGameTest
{
    [TestClass]
    public class Game1Test_Should_
    {
        private TestContext testContextInstance;
        public Game1 nameGame;

        public TestContext TestContext
        {
            get { return testContextInstance; }
            set { testContextInstance = value; }
        }

        [TestInitialize]
        public void Init()
        {
            nameGame = new Game1();
        }

        [TestMethod]
        [DeploymentItem("NumberGameTest\\Expected.xml")]
        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.XML",
                           "|DataDirectory|\\Expected.xml",
                           "Row",
                     DataAccessMethod.Sequential)]
        public void FizzBuzz()
        {
            int input = Int32.Parse((string)testContextInstance.DataRow["Input"]);
            string expected = (string)testContextInstance.DataRow["Result"];
            string actual = nameGame.FizzBuzz(input);
            Assert.AreEqual(expected, actual);
        }
    }
}
