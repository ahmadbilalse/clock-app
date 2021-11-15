import axios from 'axios';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react'

export default function Quote() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios('https://api.quotable.io/random');
      setData(result.data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data ? <div className="flex items-start max-w-xl">
      <div>
        <p className="leading-loose">"{data.content}"</p>
        <p className="mt-2 font-bold">{data.author}</p>
        {isError ? <p className="mt-4 text-red-400">Something went wrong...</p> : null}
      </div>
      <button onClick={fetchData} className={classNames("ml-4", {
        "animate-reverse-spin": isLoading,
      })}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg></button>
    </div> : <div></div>
  )
}
