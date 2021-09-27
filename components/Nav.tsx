import * as web3 from '@solana/web3.js';
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }
  window.open("https://phantom.app/", "_blank");
};

const Nav = () => {
  const [account, setAccount] = useState()
  const router = useRouter();

  const login = () => {
    const provider = getProvider();
    if (provider) {
      provider.on("connect", () => {
        setAccount(provider.publicKey.toString())
        router.push('/onboarding')
      })
      
      provider.connect()
    }
  }
  
  return (
    <nav className="flex justify-between items-center p-5 max-w-screen-xl mx-auto">
      <div>generatus</div>

      <div>
        { account ? account : <button onClick={login}>Log in</button> }
      </div>
    </nav>
  )
}

export default Nav
