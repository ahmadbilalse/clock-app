import classNames from 'classnames'
import Head from 'next/head'
import Clock from '../components/Clock'
import GithubLink from '../components/GithubLink'
import Quote from '../components/Quote'
import useGeoInfo from '../utils/useGeoInfo'
import useTimeInfo, { timeOfDay } from '../utils/useTimeInfo'


export default function Home() {
  const timeData = useTimeInfo();
  const geoData = useGeoInfo();

  return (
    <div className={classNames("min-h-screen p-8 font-Lato text-white md:p-16 bg-black bg-opacity-50 bg-cover bg-center bg-blend-overlay flex flex-col justify-between", {
      "bg-morning": timeData?.greeting === timeOfDay.morning,
      "bg-afternoon": timeData?.greeting === timeOfDay.afternoon,
      "bg-evening": timeData?.greeting === timeOfDay.evening,
      "bg-night": timeData?.greeting === timeOfDay.night,
    })}>
      <Head>
        <title>Clock App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Quote />
      <div>
        <Clock data={{
          geoData,
          timeData,
        }} />
        <div className="mt-4">
          <GithubLink />
        </div>
      </div>
    </div>
  )
}
