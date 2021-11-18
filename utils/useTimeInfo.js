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
  let secondInterval;

  useEffect(() => {
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

    const getCustomTimeData = (date) => {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return {
        greeting: getGreeting(hours, minutes),
        hours,
        minutes,
        seconds,
        time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
      }
    }

    const fetchTime = async () => {
      try {
        const result = await axios('https://worldtimeapi.org/api/ip');
        let date = new Date(result.data.unixtime * 1000);
        setTimeData({
          ...result.data,
          ...getCustomTimeData(date),
        })
        restartInterval(date);
      } catch (e) { }
    }

    const restartInterval = (date) => {
      if (secondInterval) clearInterval(secondInterval);
      const unixTime = date.getTime();
      setTimeData({
        ...timeData,
        ...getCustomTimeData(new Date(unixTime)),
      });
      secondInterval = setInterval(() => {
        unixTime = unixTime + 1000;
        setTimeData({
          ...timeData,
          ...getCustomTimeData(new Date(unixTime)),
        });
      }, 1000);
    }

    const setInitialTime = () => {
      // For testing: '2021-11-15T15:18:25+07:00'
      const date = new Date();
      restartInterval(date)
    }

    setInitialTime();
    fetchTime();

    return () => {
      clearInterval(secondInterval);
    }
  }, []);

  return timeData;
}

export default useTimeInfo;