export default function Star(props) {
    const {handleSelectedStar, id, handleExitHoverStar, handleHoverStar, active} = props

    return(
        <i
            className={"star fa-solid fa-star " +  active}
            id={id}
            onClick={(event) => {handleSelectedStar(event.target.id)}}
            onMouseOver={(event) => {handleHoverStar(event.target.id)}}
            onMouseLeave={handleExitHoverStar}
        />
    )
}