import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';
import MainContext from './components/Context';
import BrandsData from './barBrands.json'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collections from './components/Collections';
function App() {
    const brandsArray = []
    Object.keys(BrandsData).map((key)=>(
        brandsArray.push(BrandsData[key])
    ))
    const [brands,setBrands] = useState(brandsArray)
    const [selectedBrands,setSelectedBrands] = useState([])
    const [copied,setCopied] = useState(false)
    const [search,setSearch] = useState('')
  
  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  }

  useEffect(()=>{
    console.log(selectedBrands)
  },[selectedBrands])
  
  useEffect(()=>{
    setBrands(brandsArray.filter(brand=>brand.title.toLowerCase().includes(search)))
    // eslint-disable-next-line
  },[search])
  

  return (
    <>
    <MainContext.Provider value={data}>
      <Sidebar/>
      <Router>
        <Routes>
          <Route path='/' element={ <Content />} />
          <Route path='/collections/:slugs' element={<Collections />}/>
        </Routes>
      </Router>
      <ToastContainer 
      position="bottom-right"
      closeOnClick
      color={copied}
      
      />
      </MainContext.Provider>
      
    </>
  );
}

export default App;
