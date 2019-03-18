using System;
using System.Security.Cryptography;
using System.Text;

namespace fitnessData.Utils
{
    public class CryptoUtils
    {
        const string TOKENCHARS = "abcdefghijklmnopqrstuvxyz0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ";
        const int TOKENLENGTH = 32;

        private static DateTime BASETIME = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

        public static string GetMD5Hash(string password)
        {
            MD5 md5 = MD5.Create();
            byte[] inputBytes = Encoding.UTF8.GetBytes(password);
            byte[] hash = md5.ComputeHash(inputBytes);

            // convert byte array to hex string
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }

        public void VerifyMD5Hash()
        {
            //not implemented
        }

        public static bool VerifyPassword(string password, string passwordHash)
        {
            return true;
        }

        public static string CreateToken(int userId)
        {
            Random randy = new Random((int) TimeStamp);
            char[] chars = new char[TOKENLENGTH];

            for (int i = 0; i < TOKENLENGTH; i++)
            {
                chars[i] = TOKENCHARS[randy.Next(TOKENCHARS.Length)];
            }
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < chars.Length; i++)
            {
                sb.Append(chars[i].ToString());
            }
            return sb.ToString() + userId.ToString();  //To-Do , göm userId bättre
        }

        public static long TimeStamp
        {
            get
            {
                TimeSpan t = DateTime.UtcNow - BASETIME;
                int secondsSinceEpoch = (int)t.TotalSeconds;
                return secondsSinceEpoch;
            }
        }

    }
}
