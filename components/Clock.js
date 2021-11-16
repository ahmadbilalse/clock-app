import React from 'react'
import { timeOfDay } from '../utils/useTimeInfo';

export default function Clock(props) {
  const { region, country } = props.data.geoData ?? {};
  const { abbreviation, greeting, time } = props.data.timeData ?? {};

  const getIcon = () => {
    switch (greeting) {
      case timeOfDay.evening:
      case timeOfDay.night:
        return (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>)
      default:
        return (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>)
    }
  }

  return (
    <div>
      <p className="tracking-widest flex uppercase">
        <span className="mr-2">{getIcon()}</span>
        GOOD {greeting}, IT'S</p>
      <p className="font-semibold text-7xl my-2 sm:text-big lg:text-biggest">{time}<span className="font-normal text-base align-baseline ml-2 sm:text-4xl">{abbreviation}</span></p>
      <p className="font-semibold tracking-widest uppercase">IN {region}, {country}</p>
    </div>
  )
}
