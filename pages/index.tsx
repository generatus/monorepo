import type { NextPage } from 'next'
import Head from 'next/head'

import Nav from 'components/Nav'
import FeatureCard from 'components/FeatureCard'

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

      <main>
        <header>
          <h1>The generative NFT storefront to match your personality</h1>

          <div>
            <div>Create customizable storefront for your generative NFTs.</div>
            <div>Built on Solana.</div>
          </div>
        </header>

        <section>
          <div>
            <h2>A storefront that supports any artist</h2>
            <div>Designed for generative artists to sell their work</div>
          </div>

          <div>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </section>

        <section>
          <div>
            <h2>Write a generative art script. We’ll handle the rest.</h2>
            <div>
              Easily create NFT collections by uploading nd testing your
              generative art script. We’ll handle minting.
            </div>
          </div>

          <div></div>
        </section>

        <section>
          <div></div>

          <div>
            <h3>Once per day</h3>
            <h3>Once per week</h3>
            <h3>All at once</h3>
            <h2>Time your drop.</h2>
            <div>
              Easily create NFT collections by uploading nd testing your
              generative art script. We’ll handle minting.
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a href="https://solana.com/" target="_blank" rel="noopener noreferrer">
          Powered by Solana
        </a>
      </footer>
    </>
  )
}

export default Home
