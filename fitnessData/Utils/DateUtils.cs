using System;
using System.Collections.Generic;
using System.Text;

namespace fitnessData.Utils
{
    public class DateUtils
    {
        private static DateTime BASETIME = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

        // 1440123400
        public static long TimeStampNow
        {
            get
            {
                TimeSpan t = DateTime.UtcNow - BASETIME;
                int secondsSinceEpoch = (int)t.TotalSeconds;
                return secondsSinceEpoch;
            }
        }

        public static long TimeStampOneDay
        {
            get
            {
                TimeSpan t = DateTime.UtcNow.AddHours(24) - BASETIME;
                int secondsSinceEpoch = (int)t.TotalSeconds;
                return secondsSinceEpoch;
            }
        }

        public static string DateTimeFormatString(DateTime date)
        {
            return date.ToString("MM-dd HH:mm");
        }

        public static string DateFormatString(DateTime date)
        {
            return date.ToString("MM-dd");
        }

        public static string TimeFormatString(DateTime date)
        {
            return date.ToString("HH:mm");
        }

        public static string DateTimeDay(DateTime date)
        {
            return date.ToString("dddd");
        }
    }
}
