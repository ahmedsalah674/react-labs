// import logo from './logo.svg';
// import './App.css';
import Counter from './Counter.js'
function App() { 
  return (
    <div className='container text-center' >
    <h1>Counter</h1>
    <Counter value={0} />
    </div>
  );
}

export default App;
