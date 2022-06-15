import './App.css';
import Sidebar from './components/Partial/sidebar/sidebar';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Header from './components/Partial/header';
import Product from './components/Partial/product';
import Admin from './components/Partial/admin';
import Main from './components/Partial/main/main';

function App() {
  let sidebar = [
    {
      title: "Product",
      path: "product",
    },
    {
      title: "Admin",
      path: "admin",
    },
  ];
  return (
  
      <div className="App">
        <BrowserRouter>
      <Sidebar name={sidebar} />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/home" element={<Header />} />
            <Route path="/product" element={<Product />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
