import { useRef } from 'react'
import useFetch from '../../16-usefetch-custom-hook/src/customHooks/useFetch'

export default function ScrollToTopAndBottom() {

    const { data, error, pending } = useFetch('https://dummyjson.com/products?limit=100', {})
    
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const bottomRef = useRef(null)

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }

    if(pending) {
        return <h1>Loading...Please wait</h1>
    }

    if(error) {
        return <h1>An error occured. Please, try again.</h1>
    }

    return (
        <div>
            <h1>Scroll to Top and Bottom Hook</h1>
            <h3>This is the top section</h3>
            <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
            <ul>
                {data && data.products && data.products.length
                ? data.products.map(item => <li>{item.title}</li>)
                : null
                }
            </ul>
            <button onClick={handleScrollToTop}>Scroll to top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom section</h3>
        </div>
    )
}