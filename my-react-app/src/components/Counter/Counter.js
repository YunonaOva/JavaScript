//import './Counter.css';

import {useState} from "react"

function Counter () {

    const [count, setCount] = useState(0)   // Создается массив, далее указываем состояние, используем функцию useState, в скобочках указывается начальное состояние - ноль. 
                                            //[count, setCount] count - это состояние, setCount - это состояние с названием первого (установить состояние)
    
    function clickHandler () {
        setCount(count + 1)            //нажатие кнопки onClick//
    }
    
    function clickHandlerMinus () {
        setCount(count - 1)            //нажатие кнопки onClick//
    }
    
    return (
       <div>
            <button onClick={clickHandler}>+</button>  
            <button onClick={clickHandlerMinus}>-</button>        
            <div>Текущее число: {count} </div>
       </div>
         
    )
          
}

export default Counter;

