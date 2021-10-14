import * as web3 from '@solana/web3.js'
import { useState } from 'react'

const getProvider = () => {
  if (window.solana) {
    const provider = window.solana

    if (provider.isPhantom) {
      return provider
    }
  }

  // TODO: Messaging around using Phantom
  window.open('https://phantom.app/', '_blank')
}

const Nav = () => {
  const [account, setAccount] = useState()

  const login = () => {
    const provider = getProvider()

    if (provider) {
      provider.on('connect', () => {
        setAccount(provider.publicKey.toString())
      })

      provider.connect()
    }
  }

  return (
    <nav className="flex justify-between items-center p-5 max-w-screen-xl mx-auto">
      <div className="text-white">generatus</div>

      {/* <div>{account ? account : <button onClick={login}>Log in</button>}</div> */}

      <div className="bg-brand-blue rounded-xl text-white py-2 px-3">
        coming soon
      </div>
    </nav>
  )
}

export default Nav
