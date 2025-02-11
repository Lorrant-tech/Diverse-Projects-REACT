import { FeatureFlagsContext } from "./Context"
import { useContext } from "react"
import LightDarkMode from '../01-accordion-component/src/components/Accordion.jsx'
import TicTacToe from '../14-tic-tac-toe/src/components/TicTacToe.jsx'
import App from '../02-random-color-generator/src/App.jsx'
import Accordion from "../01-accordion-component/src/components/Accordion.jsx"
import TreeView from "../06-tree-view-menu/src/components/TreeView.jsx"
import menus from "../06-tree-view-menu/src/data.js"

import '../08-light-dark-mode/src/index.css'
import '../14-tic-tac-toe/src/index.css'
import '../02-random-color-generator/src/index.css'
import '../01-accordion-component/src/index.css'
import '../06-tree-view-menu/src/index.css'



export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <App />
        },
        {
            key: 'showAccordion',
            component: <Accordion />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
    ]

    function checkEnabledFlags(currentKey) {
        return enabledFlags[currentKey]
    }

    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}