import React from 'react'
import image from './assets/images/music-2.jpg';
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function hero() {
  return (
    <>
      <div className="hero-container flex justify-between items-center  mt-[50px] min-h-[50px] md:min-h-[250px] bg-black flex-wrap">
        <div className="music-icon p-5 flex flex-row items-center justify-center flex-wrap gap-4 md:flex-col">
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
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>

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
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>

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
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        </div>
        <div className="hero-center md:flex flex-col items-center justify-center hidden ">
          <div className="flex w-screen md:w-full gap-0 justify-center flex-wrap flex-col md:flex-row">
            <div className="w-2/3 md:w-96 h-2/3 md:h-96 bg-yellow-500 rounded-full flex items-center justify-start text-white font-semibold p-5">
              <p className="m-text w-32 text-left">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <br></br>This platform helps you stream your favourite music
              </p>
            </div>

            <div className="w-2/3 md:w-96 h-2/3 md:h-96 bg-cover bg-center bg-[url('./assets/images/music-2.jpg')] bg-cover bg-top bg-no-repeat bg-yellow-400 rounded-full flex items-center justify-center text-black font-semibold m-[-10px] border-8 border-black-600 -ml-[200px]">
              <p className="m-text w-32 text-left">
                {/* This platform helps you stream your favourite music */}
              </p>
            </div>

            <div className="hidden md:hidden lg:block w-2/3 md:w-96 h-2/3 md:h-96 bg-cover bg-top bg-[url('./assets/images/music-2.jpg')]  bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold m-[-10px] border-8 border-black-600 -ml-[120px]">
              <p className="m-text w-32 text-left">
                {/* This platform helps you stream your favourite music */}
              </p>
            </div>
          </div>
        </div>

        <div className="social-icon  p-5 flex flex-row md:flex-col items-center justify-center flex-wrap gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-600 text-2xl" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 text-2xl" />
          </a>

          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-pink-500 text-2xl" />
          </a>
        </div>
      </div>

      <div className="relux flex flex-wrap justify-center md:ml-20 items-center md:-mt-[250px] gap-10">
        <h2 className="max-[767px]:text-5xl md:text-[85px] ml-[50px] md:ml-[100px] font-black">
          Reluxe
        </h2>
        <a href="" className="hero-btn flex">
          <span className="py-2 px-6 bg-red-500 rounded-full">Learn More</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default hero
