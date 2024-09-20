import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
    const [isAuthenticated, setIsAuthenticate] = useState(false);

    useLayoutEffect(() => {
        localStorage.getItem('token') && setIsAuthenticate(true);
    }, [])

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
        <header className="bg-transparent w-full absolute top-0 z-10 text-white">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                <div className="text-2xl font-bold">
                    <Link to="/" className="text-white">Quera Coin</Link>
                </div>
                <nav className="hidden md:flex space-x-4">
                    {
                        menu.map(item => <Link key={item.id} to={item.link} className="text-white font-bold text-xl">{item.title}</Link>)
                    }
                </nav>
                {
                    isAuthenticated
                        ?
                        <div className="hidden md:flex space-x-4">
                            <Link
                                to="/profile"
                                className="py-3 px-7 bg-transparent border border-white border-solid rounded-xl"
                            >
                                Profile
                            </Link>
                        </div>
                        :
                        <div className="hidden md:flex space-x-4">
                            <Link
                                to="/login"
                                className="py-3 px-7 bg-transparent border border-white border-solid rounded-xl"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/register"
                                className="py-3 px-7 bg-gradient-to-r from-crypto-gradient-2 to-crypto-gradient-1 rounded-xl"
                            >
                                Sign Up
                            </Link>
                        </div>

                }

            </div>
        </header>
    );
}

export default Header;