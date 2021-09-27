import { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// @ts-ignore
import { gsap } from 'gsap/dist/gsap'
// @ts-ignore
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Nav from 'components/Nav'
import FeatureCard from 'components/FeatureCard'
import SampleStorefront from 'public/demo/storefront.png'
import MintScript from 'public/demo/mint-script.png'
import MintSchedule from 'public/demo/mint-schedule.png'
import Solana from 'public/icons/solana.svg'
import Sun from 'public/icons/sun.svg'
import Calendar from 'public/icons/calendar.svg'
import { useRouter } from 'next/router'

const Themes = [
  { 
    id: "blue_dark",
    dark: true,
    header: "dark-gradient-2.png",
    primary: "#436ADD",
  },
  { 
    id: "multi_dark",
    dark: true,
    header: "dark-gradient-1.png",
    primary: "#DD4384",
  },
]


const Onboarding: NextPage = () => {
  const [theme, setTheme] = useState()
  const router = useRouter()
  if (!theme) {
    setTheme(Themes[0]);
  }
  useEffect(() => {
    if (!window.solana.isConnected) { 
      router.push('/')
    } 
  })

  return (
    <>
      <Head>
        <title>generatus | next gen NFTs on Solana</title>
        <meta
          name="description"
          content="The generative NFT storefront to match your personality"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen relative">
        <header
          className="bg-cover bg-no-repeat h-1/3"
          style={{ backgroundImage: theme ? `url(/gradients/${theme.header})` :  `url(/gradients/dark-gradient-2.png)`}}
        >
        </header>
        <div className="absolute left-1/2 -translate-x-1/2 transform top-20 -my-12 p-12 w-2/5 bg-brand-gray rounded-lg shadow-2xl">
          <div className="w-full text-center pb-10">
            <h1 className="font-bold text-white text-xl mb-2">Let's build your storefront!</h1>
            <h2>Complete the steps below to setup your storefront.</h2>
          </div>
          <div className="flex justify-center w-full flex-wrap">
            <div className="w-full block mb-4">
              <label className="block w-full text-sm mb-2">Store Name</label>
              <input tabIndex={1} className="block w-full rounded-md bg-brand-gray-dark px-4 py-2 placeholder-gray-600" placeholder="Anthony's Leaf Shack"></input>
            </div>
            <div className="w-full block mb-4">
              <label className="block w-full text-sm mb-2">Store Description</label>
              <textarea className="block w-full h-32 bg-brand-gray-dark rounded-md px-4 py-3 placeholder-gray-600"  placeholder="Amazing stuff!"></textarea>
            </div>
            <div className="w-full block">
              <label className="block w-full text-sm mb-2">Pick a theme:</label>
              <div className="flex mb-10">
                {Themes.map(({ id, dark, header, primary }) => (
                  <div onClick={() => setTheme({id, dark, header, primary})} key={id} className="rounded-full w-12 h-12 mr-3 cursor-pointer" style={{
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "100% 50%",
                    backgroundImage: `url(/gradients/${header})`,
                    border: theme && id === theme.id ? "2px solid white" : "none"
                  }}></div>
                ))}
              </div>
            </div>
            <button className="px-6 py-3 w-full rounded-md text-md font-medium text-white" style={{
                    background: theme ? theme.primary : "white",
                  }}>Next: Launch your first NFT</button>
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center p-10 pt-0 max-w-screen-xl mx-auto">
        <a href="https://solana.com/" target="_blank" rel="noopener noreferrer">
          Powered by Solana
        </a>
      </footer>
    </>
  )
}

export default Onboarding
