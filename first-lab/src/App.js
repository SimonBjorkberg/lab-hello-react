import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import BottomContent from './components/BottomContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <BottomContent />
    </div>
  );
}

export default App;
