import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import ShowAlertButton from './components/ShowAlertButton/ShowAlertButton';


function App() {
  return (
    <div className="App">
     <HelloWorld></HelloWorld>
     <ShowAlertButton></ShowAlertButton>
    </div>
  );
}

export default App;
