import React, { Component } from 'react'
// import Pinky from './assets/images/pinky.jpg'

export class explore extends Component {
  render() {
    return (
      <div>
        <div className="explore-container flex justify-center items-center gap-5 mt-[150px] flex-wrap">
          <div className="explore-left flex w-96 justify-between p-5  rounded">
            <div className="explore-text justify-start flex flex-col bg-green-900 p-5 rounded-l-lg  w-[50%] gap-2">
              <p className="text-1 text-left flex ">
                Opportunity to create your own unique profile
              </p>
              <a
                href="#"
                className="exploreBtn w-24 border-2 border-solid rounded-full"
              >
                Explore
              </a>
            </div>
            <div className="exploreIcon bg-yellow-300  w-[50%] justify-end flex p-3 rounded-r-lg bg-[url('./assets/images/blur.jpg')]  bg-cover bg-top">
              <a
                href="#"
                className="rounded-full p-2 h-10 ackdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300 hover:backdrop-blur-xl hover:bg-white/20 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="explore-left flex w-96 justify-between p-5  rounded">
            <div className="explore-text justify-start flex flex-col bg-green-900 p-5 rounded-l-lg  w-[50%] gap-2">
              <p className="text-1 text-left flex ">
                Opportunity to create your own unique profile
              </p>
              <a
                href="#"
                className="exploreBtn w-24 border-2 border-solid rounded-full"
              >
                Explore
              </a>
            </div>
            <div className="exploreIcon bg-yellow-300  w-[50%] justify-end flex p-3 rounded-r-lg bg-[url('./assets/images/grass.jpg')]  bg-cover bg-top">
              <a
                href="#"
                className="rounded-full p-2 h-10 ackdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300 hover:backdrop-blur-xl hover:bg-white/20 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="explore-left flex w-96 justify-between p-5  rounded">
            <div className="explore-text justify-start flex flex-col bg-green-900 p-5 rounded-l-lg  w-[50%] gap-2">
              <p className="text-1 text-left flex ">
                Opportunity to create your own unique profile
              </p>
              <a
                href="#"
                className="exploreBtn w-24 border-2 border-solid rounded-full"
              >
                Explore
              </a>
            </div>
            <div className="exploreIcon   w-[50%] justify-end flex p-3 rounded-r-lg bg-[url('./assets/images/pinky.jpg')] bg-cover bg-top">
              <a
                href="#"
                className="rounded-full p-2 h-10 ackdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300 hover:backdrop-blur-xl hover:bg-white/20 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default explore
