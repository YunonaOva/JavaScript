import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  
  const product = [
    {
      title: "Чайник",
      model: "m 100",
      price: 2500,
      inStock: true,
      color: 'синий',
      brand: 'tefal'
    },
     {
      title: "Пылесос",
      model: "m 1500",
      price: 25000,
      inStock: true,
      color: 'черный',
      brand: 'LG'
    },
     {
      title: "Кофеварка",
      model: "s 100",
      price: 250,
      inStock: true,
      color: 'аквамарин',
      brand: 'LG'
    }
  ]

const formattedProduct = product.map((item) => {
  return (
   
    <ProductCard 
      title = {item.title}
      model = {item.model}
      price = {item.price}
      inStock = {item.inStock}
      color = {item.color}
      brand = {item.brand}
    />
  )

})

     return (
      <div className="App">
        {formattedProduct}
      </div>
      );
  }
  
  export default App;



  /* вариант для нескольких объектов:

        <div className="App">
       <ProductCard 
       title = {product[0].title}
       model = {product[0].model}
       price = {product[0].price}
       inStock = {product[0].inStock}
       />
              <ProductCard 
       title = {product[1].title}
       model = {product[1].model}
       price = {product[1].price}
       inStock = {product[1].inStock}
       />
              <ProductCard 
       title = {product[2].title}
       model = {product[2].model}
       price = {product[2].price}
       inStock = {product[2].inStock}
       />
      </div>
      */