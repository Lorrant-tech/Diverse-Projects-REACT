export default function Tab(props) {
    const { tabId, activeId, setActiveId } = props
    return (
        <div
            onClick={()=>{
                setActiveId(tabId)
            }}
            className={"tab " + (activeId === tabId ? " active" : "")}
        >
            Tab {tabId}
        </div>
    )
}