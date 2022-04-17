// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './componts/home/Home'
import Error from './componts/error/Error'
import Navbar from './componts/navbar/Navbar'
import Product from './componts/product/Product'
import Counter from './componts/counter/Counter'
import Todo from './componts/Todo/Todo'
import Form from './componts/form/Form'
function App() {
  return (
    <div className='text-center' >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/counter' element={<Counter value={0} />} />
          <Route path='/todo'  element={ <Todo /> }  />
          <Route path='/form'  element={ <Form /> }  />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
