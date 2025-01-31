import { useEffect, useState } from "react"


export default function Accordion(props) {
    const {question, answer, isSingleSelection, id, selected, setSelected} = props

    const [isExpanded, setIsExpanded] = useState(false)

    function handleAccordionMulti() {
        setSelected(null)
        setIsExpanded(prev => !prev)
        // console.log('clicked')
    }

    function handleAccordionSingle(currentId) {
        setIsExpanded(false)
        currentId === selected ?
            setSelected(null) :
            setSelected(currentId)
    }

    function handleAccordion(isSingleSelection, currentId) {
        isSingleSelection ? handleAccordionSingle(currentId) : handleAccordionMulti()
    }

    useEffect(() => {
        setIsExpanded(false)
        setSelected(null)
    }, [isSingleSelection])

    return (
        <div className="accordion-container">
            <div className="accordion-header">
                <h3>{question}</h3>
                <button
                    onClick={() => handleAccordion(isSingleSelection,id)}
                    className="expand-btn"
                >
                    {((selected === id) || isExpanded) ?
                            <i className="fa-solid fa-minus" /> :
                            <i className="fa-solid fa-plus" />
                    }
                </button>
            </div>

            {isSingleSelection ? (
                (selected === id) && (<p className="accordion-answer">{answer}</p>)
                ) : (
                    isExpanded && (
                        <p className="accordion-answer">{answer}</p>
                    )
                )
            }
        </div>
    )
}