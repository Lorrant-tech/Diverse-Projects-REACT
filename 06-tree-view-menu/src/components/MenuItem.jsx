import { useState } from "react"
import MenuList from "./MenuList"

export default function MenuItem({item}) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
        })
    }

    console.log(displayCurrentChildren)

    return (
        <li >
            <div className="menu-item">
                <p>{item.label}</p>
                {item && item.children && item.children.length ?
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {displayCurrentChildren[item.label] ?
                            <i className="fa-solid fa-minus" /> :
                            <i className="fa-solid fa-plus" />}
                    </span>
                    : null
                }
            </div>

            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList list={item.children} />
                : null    
            }
        </li>
    )
}