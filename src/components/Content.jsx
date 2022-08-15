import Search from './Search'
import Brand from './Brand'
import MainContext from './Context'
import { useContext } from 'react'
import LazyLoad from 'parm-react-lazyload';
function Content() {
    
   const {brands} = useContext(MainContext)
    

  return (
    <main className='content'>
        <header className="header">
            <Search />
        </header>
        <section className='brands'>
           {brands.map((brand,index)=>(
            <LazyLoad once={true} overflow={true} placeholder='Loading'>
            <Brand key={index} brand={brand}/>
            </LazyLoad>
           ))}
        </section>
    </main>
  )
}

export default Content