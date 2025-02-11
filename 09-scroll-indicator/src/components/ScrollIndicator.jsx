import { useEffect } from "react"
import { useState } from "react"

export default function ScrollIndicator(props) {
    const {url} = props
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(url) {
        try {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()

            //console.log(data)

            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setErrorMessage(error.message)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])


    function handleScrollPercentage() {
        //console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)

        const howMuchScrolled =  document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height)*100);
    }

    //console.log(scrollPercentage)

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    //console.log(data, loading)

    if(loading) {
        return (
            <div>Loading...</div>
        )
    }
    
    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}></div>
                </div>
            </div>
            
            <div className="data-container">
                {data && data.length > 0
                    ? data.map(dataItem => <p>{dataItem.title}</p>)
                    : null
                }
            </div>
        </div>
    )
}