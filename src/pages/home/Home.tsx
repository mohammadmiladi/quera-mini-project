import { Key, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";

import Header from "../../components/header/Header"

import cryptoImage from '../../assets/bg-img.svg'
import circlesImage from '../../assets/circles.svg'
import tradeImage from '../../assets/feature1.svg'
import atmImage from '../../assets/feature2.svg'
import walletImage from '../../assets/feature3.svg'
import axios from "axios"
import Footer from "../../components/footer/Footer";

export type Crypto = {
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    volumeUsd24Hr: string;
    changePercent24Hr: string;
};

const Home: React.FC = () => {
    const [cryptoList, setCryptoList] = useState<Crypto[]>([]);

    useEffect(() => {
        fetchCryptoList();
    }, [])

    async function fetchCryptoList() {
        const response = await axios.get("https://api.coincap.io/v2/assets")


        setCryptoList(response.data.data)
    }

    const [features] = useState([
        {
            id: 1,
            image: tradeImage,
            title: "Trade Desk",
            buttonText: "Get Started",
            description: "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
        },
        {
            id: 2,
            image: atmImage,
            title: "QueraCoin ATMs",
            buttonText: "Find an ATM",
            description: "We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto"
        },
        {
            id: 3,
            image: walletImage,
            title: "QueraCoin Wallet",
            buttonText: "Download the App",
            description: "Store your growing investments in ournon-custodial wallet that gives you access to a full suite of DeFi services in one place"
        },
    ])
    return (
        <div className='bg-crypto-black min-h-screen relative'>
            <Header />
            <section className="relative bg-gradient-to-r flex items-center content-center h-screen text-white py-20">
                <div className="absolute inset-0">
                    <img
                        src={cryptoImage}
                        alt="Background"
                        className="w-full h-fit object-cover"
                    />
                </div>
                <div className="relative max-w-screen-lg mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-7xl text-white font-bold mb-4">We make crypto clear and simple</h1>
                    <p className="text-lg mb-6 text-crypto-gray">
                        Buy, sell, and grow your crypto with Quera Coin, the platform dedicated to every trader at every level.</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="#contact"
                            className="py-4 px-10 bg-gradient-to-r text-xl from-crypto-gradient-2 to-crypto-gradient-1 rounded-xl shadow-lg"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-transparent relative text-white">
                <div className="absolute inset-0">
                    <img
                        src={circlesImage}
                        alt="Background"
                        className="w-full h-full object-fill"
                    />
                </div>
                <div className="max-w-screen-lg relative mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {
                            features.map(feature => (
                                <div key={feature.id} className=" bg-crypto-bg-card flex flex-col 
                                items-center gap-7 rounded-2xl p-6 shadow-lg">
                                    <img className="w-1/3" src={feature.image} alt={feature.title} />
                                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    <p className='text-violet-500'>Get Started</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section id="contact" className="bg-transparent text-white py-16">
                <div className="max-w-screen-lg mx-auto px-4 text-center">
                    <div className='p-16'>
                        <h2 className="text-4xl font-bold mb-4">Buy and sell with the lowest fees in the industry</h2>
                        <p className="text-lg text-crypto-gray mb-6">Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card</p>
                        <p className='text-violet-500'>Learn More</p>
                    </div>
                    <div className="mt-7 bg-crypto-bg-card flex flex-col items-center gap-7 rounded-2xl p-6 shadow-lg">
                        <table className='w-full'>
                            <tbody>
                                {
                                    cryptoList.map((crypto: Crypto) => (
                                        <tr key={crypto.id}>
                                            <td>
                                                <div className="grid grid-cols-6">
                                                    <p className=" text-lg font-bold ">{crypto.name}</p>
                                                    <p className=" text-lg font-bold text-violet-500">{crypto.symbol}</p>
                                                    <p className=" text-lg font-bold ">${Math.round(Number(crypto.priceUsd))}</p>
                                                    <p className={`text-lg font-bold ${Math.round(Number(crypto.changePercent24Hr)) > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(Number(crypto.changePercent24Hr))}%</p>
                                                    <p className=" text-lg font-bold ">Chart</p>
                                                    <p className=" text-lg font-bold ">Trade Now</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home