import logo from './logo.svg';
import './App.css';
import MainRouter from './Routes/MainRouter';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRouter/>
    </div>
  );
}

export default App;
