import { useState, useEffect } from "react";

export default function ImageSlider({url, limit = 5, page = 1}) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImages(getUrl) {
    try {
      setLoading(true)

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if(data) {
        setImages(data)
        setLoading(false)
      }

    } catch (err) {
      setErrorMsg(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if(url !== '') {
      fetchImages(url)
    }
  }, [url])

  //console.log(images)

  if(loading) {
    return <div>Loading...</div>
  }

  if(errorMsg !== null) {
    return <div>Error: {errorMsg}</div>
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide - 1)
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="container">
        <i onClick={handlePrevious} className="fa-solid fa-arrow-left arrow arrow-left"></i>
        
        {
            (images && images.length) ?
               images.map((imageItem,index) => {
                    return (
                        <img
                            key={imageItem.id} 
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? "current-image" : "hide-current-image"}
                        />
                    )
               }) : (null)
        }

        <i onClick={handleNext} className="fa-solid fa-arrow-right arrow arrow-right"></i>

        <span className="circle-indicators">
            {images && images.length ?
                images.map((_,index) => {
                    return(
                        <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                        onClick={() => {setCurrentSlide(index)}}
                        ></button>
                    )
                }) : null
            }
        </span>
    </div>
  )
}