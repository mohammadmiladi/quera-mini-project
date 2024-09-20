import { useState } from 'react';
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
    const [menu] = useState([
        {
            id: 1,
            title: "Home",
            link: "/"
        },
        {
            id: 2,
            title: "Buy / Sell",
            link: "/"
        },
        {
            id: 3,
            title: "Markets",
            link: "/markets"
        },
        {
            id: 4,
            title: "Support",
            link: "/support"
        },
    ])
    return (
        <header className="bg-transparent w-full absolute top-0 z-10">
            <div className="max-w-screen-lg flex mx-auto p-4 items-center justify-between">
                <div>
                    <Link to="/" className="text-white">Quera Coin</Link>
                </div>
                <nav className='space-x-4'>
                    {
                        menu.map(item => (
                            <Link className="text-white font-bold text-xl" key={item.id} to={item.link}>{item.title}</Link>
                        ))
                    }
                </nav>
                <div className='space-x-4'>
                    <Link className='text-white rounded-lg border-solid py-3 px-7 border border-white' to="/login">
                        Sign In
                    </Link>
                    <Link className='text-white bg-gradient-to-r from-crypto-gradient-2 to-crypto-gradient-1 rounded-lg py-3 px-7' to="/login">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;