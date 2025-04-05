import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to the World'slargest Cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form>
            <input type='text' placeholder='Search crypto..'/>
            <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home
