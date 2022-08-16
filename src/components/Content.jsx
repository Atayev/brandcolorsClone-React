import Search from './Search'
import Brand from './Brand'
import MainContext from './Context'
import { useContext } from 'react'
import LazyLoad from 'parm-react-lazyload';
import Download from './Download';
import Loader from './Loader';

function Content() {
    
   const {brands,selectedBrands} = useContext(MainContext)
    

  return (
    <main className='content'>
        <header className="header">
            <Search />
            {selectedBrands.length>0 && <Download/>}
        </header>
        <section className='brands'>
           {brands.map((brand,index)=>(
            <LazyLoad key={index}  once={true} overflow={true} placeholder={<Loader/>}>
            <Brand  brand={brand}/>
            </LazyLoad>
           ))}
        </section>
    </main>
  )
}

export default Content