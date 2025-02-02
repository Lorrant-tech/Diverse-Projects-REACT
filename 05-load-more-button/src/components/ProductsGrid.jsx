import { useState, useEffect } from 'react'
import Product from './Product.jsx'

export default function ProductsGrid(props) {
    const {url, limit} = props

    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts(url) {
        try {
            setIsLoading(true)

            const response = await fetch(url + `?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`)

            // const response = await fetch(url)

            const data = await response.json()

            console.log(data)

            if(data && data.products && data.products.length) {
                setProductsData((prevData) => [...prevData, ...data.products])
                setIsLoading(false)
            }
    
        } catch (error) {
            setIsLoading(false)
            setErrorMessage(error.message)
        }
    }


    useEffect(() => {
        fetchProducts(url)
    }, [count])

    useEffect(() => {
        if (productsData && productsData.length >= 100) setDisableButton(true)

        if (productsData.length > limit) {
            const lastProductId = productsData[productsData.length -(limit + 1)].id; 
            document.getElementById(lastProductId)?.scrollIntoView({ behavior: "smooth" });
        }
    }, [productsData])


    if (errorMessage !== null) {
        return (<div>Error: {errorMessage}</div>)
    }


    if(isLoading) {
        return (<div>Loading...</div>)
    }

    // console.log(productsData)

    return (
        <>
            <div className='products-grid'>
                {productsData && productsData.length ?
                    productsData.map((imageObj) => {
                        return(
                            <Product
                                key={imageObj.id}
                                id={imageObj.id}
                                imgLink={imageObj.thumbnail}
                                title={imageObj.title}
                            />
                        )
                    }) : null
                }
            </div>
            <div className='button-container'>
                {disableButton ? <p>You have reached 100 products</p> :
                    <button disabled={disableButton} onClick={() => {
                        setCount(prev => prev + 1)
                        console.log(limit, count)
                        
                    }}>
                        Load more products
                    </button>
                }
            </div>
        </>
    )
}