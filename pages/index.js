import Head from 'next/head'
import Clock from '../components/Clock'
import Quote from '../components/Quote'

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-Inter text-white md:p-16
      bg-black bg-opacity-50
      bg-day bg-cover bg-center bg-blend-overlay
      flex flex-col justify-between">
      <Head>
        <title>Clock App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Quote />
      <Clock />
    </div>
  )
}
