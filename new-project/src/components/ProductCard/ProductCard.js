import Brand from "../Brand/Brand";

function ProductCard ({title, model, price, inStock, color, brand}) {

    return(
        <div class = "product-card">
            <p>{ title }</p>
            <b>{ model }</b>
            <Brand brand={brand}/>                 
            <i>{ price } руб. </i>
            <b>{ color }</b>
            <span> { inStock ? 'в наличии' : 'Нет в наличии' } </span>
            <button>Добавить в корзину</button>

        </div>
    )



}

export default ProductCard;