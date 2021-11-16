import { useEffect, useState } from "react";
import axios from "axios";

export const timeOfDay = {
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night',
}

const useTimeInfo = () => {
  const [timeData, setTimeData] = useState();

  const fetchTime = async () => {
    const getGreeting = (hours) => {
      if (hours >= 5 && hours < 12) {
        return timeOfDay.morning;
      } else if (hours >= 12 && hours < 17) {
        return timeOfDay.afternoon;
      } else if (hours >= 17 && hours < 21) {
        return timeOfDay.evening;
      } else {
        return timeOfDay.night;
      }
    }

    // For testing: '2021-11-15T15:18:25+07:00'
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    setTimeData({
      greeting: getGreeting(hours),
      hours,
      minutes,
      time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    });
    const result = await axios('https://worldtimeapi.org/api/ip');
    date = new Date(result.data.datetime);
    hours = date.getHours();
    minutes = date.getMinutes();
    setTimeData({
      ...result.data,
      greeting: getGreeting(hours, minutes),
      hours,
      minutes,
      time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    });

  }

  useEffect(() => {
    fetchTime();
  }, []);

  return timeData;
}

export default useTimeInfo;