import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function GithubLink() {
  return (
    <a className="inline-block border-2 border-white p-2 rounded-lg" href="https://github.com/ahmadbilalse/clock-app" target="_blank" rel="noreferrer">
      <p className="flex items-center"><FaGithub className="text-3xl mr-4" /> View on GitHub</p>
    </a>
  )
}
