import Header from "../../components/header/Header"
import cryptoImage from '../../assets/bg-img.svg'
import circlesImage from '../../assets/circles.svg'
import { Link } from "react-router-dom"
import { useState } from "react"

const Home: React.FC = () => {
    const [features] = useState([
        {
            id: 1,
            // image: ,
            title: "Trade Desk",
            description: "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
        },
        {
            id: 2,
            // image: ,
            title: "QueraCoin ATMs",
            description: "We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto"
        },
        {
            id: 3,
            // image: ,
            title: "QueraCoin Wallet",
            description: "Store your growing investments in ournon-custodial wallet that gives you access to a full suite of DeFi services in one place"
        },
    ])
    return (
        <div className="bg-crypto-black min-h-screen relative">
            <Header />
            <section className="relative flex items-center content-center py-20 h-screen">
                <div className="absolute inset-0">
                    <img className="w-full h-fit object-cover" src={cryptoImage} alt="background-header" />
                </div>
                <div className="relative max-w-screen-lg mx-auto px-3 text-center">
                    <h1 className="text-9xl text-white font-bold mb-4">
                        We make crypto clear and simple
                    </h1>
                    <p className="text-2xl text-gray-500 mb-4">
                        Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.
                    </p>
                    <Link className='text-white bg-gradient-to-r from-crypto-gradient-2 to-crypto-gradient-1 rounded-lg py-4 px-7' to="/login">
                        Sign Up
                    </Link>
                </div>
            </section>
            <section className="relative flex items-center content-center py-20 h-screen">
                <div className="absolute inset-0">
                    <img className="w-full h-fit object-cover" src={circlesImage} alt="background-header" />
                </div>
                <div className="grid grid-cols-3 gap-7">
                    {
                        features.map(feature => (
                            <div key={feature.id}>

                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Home