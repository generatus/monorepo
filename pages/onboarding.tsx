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


const Onboarding: NextPage = () => {
  const router = useRouter()
  
  useEffect(() => {
    if (!window.solana.isConnected) { 
      router.push('/')
    }  
  })

  return <h1>HI</h1>
}

export default Onboarding
