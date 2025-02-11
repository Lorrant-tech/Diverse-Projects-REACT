import { useState, useEffect } from "react"

export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData() {
        setPending(true)
        try {
            const response = await fetch(url, {...options})
            if(!response.ok) throw new Error(response.statusText)

            const result = await response.json()
            setData(result)
            setPending(false)
            
        } catch (error) {
            setError(`Some error occured: ${error}`)
            setPending(false)
        }
    }

    useEffect(() => {

        fetchData()

    }, [url])

    return {data, error, pending}
}