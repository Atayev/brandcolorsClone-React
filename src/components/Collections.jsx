import React, { useContext, useEffect } from 'react'
import {useParams,useNavigate } from 'react-router-dom'
import MainContext from './Context'
import Brand from './Brand'
import Download from './Download'
import LazyLoad from 'parm-react-lazyload';
import {GrFormPreviousLink} from 'react-icons/gr'
import Loader from './Loader'

function Collections() {
    const navigate = useNavigate()
    const {slugs} = useParams()
    const {setSelectedBrands,selectedBrands,brands} = useContext(MainContext)

    useEffect(()=>{
        setSelectedBrands(slugs.split(','))
    })

  return (
    <main className='content'>
        <header className="header">
            <button className='backBtn' onClick={()=>navigate('/')}><GrFormPreviousLink /> Back to all brands</button>
            {selectedBrands.length>0 && <Download/>}
        </header>
        <section className='brands'>
           {selectedBrands.map((slug,index)=>{
                let brand = brands.find(brand=>brand.slug===slug)
                    return (
                    <LazyLoad key={index}  once={true} overflow={true} placeholder={<Loader/>}>
                    <Brand  brand={brand}/>
                    </LazyLoad>
                    )
                })}
        </section>
    </main>
  )
}

export default Collections