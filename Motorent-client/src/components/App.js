import './App.scss';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <div className="App">
        Main Page!
      </div>
    </main>
  );
}

export default App;
