import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';
import MainContext from './components/Context';
import BrandsData from './barBrands.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from 'react'
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
  },[search])

  return (
    <>
    <MainContext.Provider value={data}>
      <Sidebar/>
      <Content />
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
