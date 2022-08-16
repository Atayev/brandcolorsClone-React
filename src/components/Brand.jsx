import React, { useContext } from 'react'
import {getContrast} from './helper'
import MainContext from './Context'
import Clipboard from 'react-clipboard.js';
import {toast} from 'react-toastify'
function Brand({brand}) {
  const {selectedBrands,setSelectedBrands}=useContext(MainContext)
  const toggleSelected = ()=> {
    if (selectedBrands.includes(brand.slug)){
        setSelectedBrands(selectedBrands.filter(slug=>slug!==brand.slug))

    }else {
      setSelectedBrands([...selectedBrands,brand.slug])
    }
  }

  const setSuccess = (color)=> {
    toast.success(`Succesfully copied #${color}`)
  }
  return (
    <div className={`brand ${selectedBrands.includes(brand.slug)? 'selected': ''}`}>
        <h5 onClick={toggleSelected}>{brand.title}</h5>
        <div className='brandColors'>
            {brand.colors.map((color,index) => (
                <Clipboard key={index} onSuccess={()=>setSuccess(color)} data-clipboard-text={color} component='span' style={{'--bgColor': `#${color}`, '--textColor': `${getContrast(color)}`}}>
                  {color}
                </Clipboard>
            ))}
        </div>
    </div>
  )
}

export default Brand