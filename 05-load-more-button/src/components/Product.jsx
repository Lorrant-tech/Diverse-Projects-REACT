export default function Product(props) {
    const { imgLink, title, id } = props
    return (
        <div id={id} className="product">
            <img className="product-image" src={imgLink} alt="API image"/>
            <p>{title}</p>
        </div>
    )
}