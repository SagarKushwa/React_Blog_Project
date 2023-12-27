import './App.css';
import RouteComponents from './Components/Route/RouteComponents';
import Footer from './Components/Footer';

function App() {
  console.log("Sagar")
  return (
    <div className="App">
      <header className="App-header">
      <div className='Head'>
        <div className='The'><h3>The</h3></div>
        <h1 className="Siren">Siren</h1>
      </div>
      <RouteComponents />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
