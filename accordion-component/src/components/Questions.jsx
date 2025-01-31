import { useState } from 'react'

import Accordion from './Accordion'
import data from '../utils/index'

export default function Questions() {
    // console.log(data)

    const [ isSingleSelection, setIsSingleSelection] = useState(false)
    const [ selected, setSelected ] = useState(null)
    
    const arrayFAQ = data.map((item, itemIndex) => {
        return (
            <li key={itemIndex}>
                <Accordion
                    question={item.question}
                    answer={item.answer}
                    id={item.id}
                    isSingleSelection={isSingleSelection}
                    selected={selected}
                    setSelected={setSelected}
                />
            </li>
        )
    })

    // console.log(arrayFAQ)

    return (
        <>
            <button
                className='toggle-selection-btn'
                onClick={() => {
                    setIsSingleSelection(!isSingleSelection)
                }}
            >
                Allow {isSingleSelection ? 'Multi' : 'Single'} selection
            </button>

            <ul className='accordion-list'>
                {arrayFAQ}
            </ul>
        </>
    )
}