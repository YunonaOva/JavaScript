function CardDecorCh ({link, image, name, nameproduct, price, matter, description}) {
    return(
        <div className = "card-decor">   
            <h2 id = "ssCh" className="text-page"> { name } </h2>       
            <div className="card">
                <a href={link}><img class="imegs-form" src ={image} alt="Цепочка"/></a>
            </div>

            <b> { nameproduct }  </b>
            <div> Цена: { price } руб. </div>
            <p> Материал: { matter } </p>
            <p> Описание: { description } </p>
            <button>Купить сейчас</button>
        <div className = "buy"> 
            
        </div>
        </div>
    );
}

export default CardDecorCh;