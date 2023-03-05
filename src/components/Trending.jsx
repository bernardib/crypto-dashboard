import useAxios from '../hooks/useAxios.jsx'

const Trending = () => {
    const {response} = useAxios('search/trending')
    console.log(response)
    return(
        <div className='mt-8'>
            <h1 className='text-2xl mb-2'>Trending</h1>
        </div>
    )
}

export default Trending