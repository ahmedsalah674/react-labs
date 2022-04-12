// import logo from './logo.svg';
// import './App.css';
// import Counter from './componts/counter/Counter'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './componts/home/Home'
import Error from './componts/error/Error'
import Navbar from './componts/navbar/Navbar'
import Product from './componts/product/Product'
function App() {
  return (
    <div className='text-center' >
      {/* <h1>Counter</h1>
      <Counter value={0} /> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<Product/>} />
          {/* <Rout`e path='/counter' element={<Counter value={value} />} /> */}
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
