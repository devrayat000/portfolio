import React from 'react'

interface IntroProps {}

const Intro: React.FC<IntroProps> = props => {
  return (
    <section className="bg-white text-title p-14 shadow-md rounded-sm mb-12">
      <h1>
        I’m Zul Ikram Musaddik Rayat
        <br />
        <span className="text-primary">Full-stack</span> Developer
      </h1>
      <p className="text-paragraph max-w-prose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
        feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
        lectus.
      </p>
      <button
        type="button"
        className="text-white bg-primary hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Hire Me
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </section>
  )
}

export default Intro
