import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import ShowAlertButton from './components/ShowAlertButton/ShowAlertButton';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Counter></Counter>
     <Footer></Footer>
     
    </div>

  );
}

export default App;
