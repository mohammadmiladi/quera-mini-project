import { useEffect, useState } from 'react'
import axiosClient from '../../api/axiosClient'

const Home: React.FC = () => {
    const [post, setPost] = useState<any>([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        const response = axiosClient.get('/posts')
        setPost(response)
    }

    return (
        <div>Home</div>
    )
}

export default Home