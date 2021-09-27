import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Nav from 'components/Nav'
import FeatureCard from 'components/FeatureCard'
import SampleStorefront from 'public/demo/storefront.png'
import MintScript from 'public/demo/mint-script.png'
import MintSchedule from 'public/demo/mint-schedule.png'
import Solana from 'public/icons/solana.svg'
import Sun from 'public/icons/sun.svg'
import Calendar from 'public/icons/calendar.svg'

const FeatureCards = [
  {
    id: 1,
    title: 'Built on Solana',
    description: 'The first generative storefront built on Solana.',
    icon: Solana,
    alt: 'Solana logo',
  },
  {
    id: 2,
    title: 'Customizable themes',
    description:
      'Give your storefront the personality it deserves. Light and dark modes.',
    icon: Sun,
    alt: 'Sun icon',
  },
  {
    id: 3,
    title: 'Time your drop',
    description: 'Drop your generative NFTs on a customizable schedule.',
    icon: Calendar,
    alt: 'Calendar icon',
  },
]

const Home: NextPage = () => {
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

      <Nav />

      <main className="mt-20">
        <header
          className="bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/gradients/dark-gradient-6.png)` }}
        >
          <div className="max-w-screen-xl mx-auto py-10 px-20 text-center">
            <div
              className="pr-0.5 pl-0.5 bg-no-repeat pb-40"
              style={{
                backgroundSize: '0.125rem 100%',
                backgroundPosition: '0 0, 100% 0',
                backgroundImage: `linear-gradient(rgba(0,234,255,0), rgba(0,234,255,0.5), rgba(0,37,206,0.04)),
                  linear-gradient(rgba(0,234,255,0), rgba(0,234,255,0.5), rgba(0,37,206,0.04))`,
              }}
            >
              <h1 className="font-bold text-5xl text-white w-2/3 mx-auto mb-10">
                The generative NFT storefront to match your personality
              </h1>

              <div className="text-xl mb-20">
                <div>
                  Create customizable storefront for your generative NFTs.
                </div>
                <div>Built on Solana.</div>
              </div>

              <div>
                <Image src={SampleStorefront} alt="A storefront on generatus" />
              </div>
            </div>
          </div>
        </header>

        <section className="max-w-screen-xl mx-auto px-5 my-40">
          <div className="text-center space-y-5">
            <h2 className="font-bold text-4xl text-white">
              A storefront that supports any artist
            </h2>
            <div>Designed for generative artists to sell their work</div>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-10">
            {FeatureCards.map(({ id, title, description, icon, alt }) => (
              <FeatureCard
                key={id}
                title={title}
                description={description}
                icon={icon}
                alt={alt}
              />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-2 max-w-screen-xl mx-auto">
          <div className="p-20 flex justify-center items-center">
            <div>
              <h2 className="font-bold text-3xl text-white mb-5">
                Write a generative art script. We’ll handle the rest.
              </h2>

              <div>
                Easily create NFT collections by uploading nd testing your
                generative art script. We’ll handle minting.
              </div>
            </div>
          </div>

          <div
            className="pr-0.5 bg-no-repeat py-40"
            style={{
              backgroundSize: '0.125rem 100%',
              backgroundPosition: '100% 0, 100% 0',
              backgroundImage: `linear-gradient(rgba(23,26,31,1), rgba(0,221,129,0.4), rgba(255,241,129,0.4), rgba(23,26,31,1))`,
            }}
          >
            <Image src={MintScript} alt="Minting an NFT on generatus" />
          </div>
        </section>

        <section className="grid grid-cols-2 max-w-screen-xl mx-auto my-40">
          <div
            className="pl-0.5 bg-no-repeat py-40 xl:bg-none"
            style={{
              backgroundSize: '0.125rem 100%',
              backgroundPosition: '0 0, 0 0',
              backgroundImage: `linear-gradient(rgba(0,234,255,0), rgba(0,234,255,0.5), rgba(0,37,206,0.04))`,
            }}
          >
            <Image src={MintSchedule} alt="Scheduling a drop on generatus" />
          </div>

          <div className="p-20 flex justify-center items-center">
            <div>
              <h2 className="font-bold text-3xl text-white mb-5 opacity-20">
                Once per day
              </h2>

              <h2 className="font-bold text-3xl text-white mb-5 opacity-40">
                Once per week
              </h2>

              <h2 className="font-bold text-3xl text-white mb-5 opacity-60">
                All at once
              </h2>

              <h2 className="font-bold text-3xl text-white mb-5">
                Time your drop.
              </h2>

              <div>
                Easily create NFT collections by uploading nd testing your
                generative art script. We’ll handle minting.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex justify-center items-center p-10 pt-0 max-w-screen-xl mx-auto">
        <a href="https://solana.com/" target="_blank" rel="noopener noreferrer">
          Powered by Solana
        </a>
      </footer>
    </>
  )
}

export default Home
