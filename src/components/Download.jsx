import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import MainContext from './Context'
import {GrLink,GrDownload,GrClose} from 'react-icons/gr'
function Download() {
    const navigate = useNavigate()
    const {selectedBrands,brands,setSelectedBrands} = useContext(MainContext)
    const [downloadUrl,setDownloadUrl] = useState()
    const [cssMethod,setCSSmethod] = useState('css')
    const getLink = ()=> {
        navigate(`collections/${selectedBrands.join(',')}`)
    }

    // eslint-disable-next-line
    useEffect (()=> {
        if (selectedBrands.length>0) {
            let output =''
                switch (cssMethod) {
                    case 'css':
                        output +=':root {\n'
                    selectedBrands.forEach(slug=> {
                            let brand = brands.find(brand=>brand.slug=== slug)
                            brand.colors.map((color,key)=>(
                            output+=`--${slug}--${key}: #${color};\n`
                            ))
                       })
                       output +='}'
                    break;
                    case 'scss':
                        selectedBrands.forEach(slug=> {
                            let brand = brands.find(brand=>brand.slug=== slug)
                            brand.colors.map((color,key)=>(
                                output+=`$${slug}--${key}: #${color};\n`
                                ))
                           })
                    break;
                    case 'less':
                        selectedBrands.forEach(slug=> {
                            let brand = brands.find(brand=>brand.slug=== slug)
                            brand.colors.map((color,key)=>(
                                output+=`@${slug}--${key}: #${color};\n`
                                ))
                           })
                    break;
                    default:
                        break;
                } 
          


          
            const blob = new Blob([output])
            const url=URL.createObjectURL(blob)
            setDownloadUrl(url)
            return ()=> {
                URL.revokeObjectURL(url)
                setDownloadUrl('')
            }
        }
       // eslint-disable-next-line
    },[selectedBrands,cssMethod])

  return (
    <div className='download'>
        <div className="actions">
        <select onChange={(e)=>setCSSmethod(e.target.value)}>
                <option value="css">CSS</option>
                <option value="scss">SCSS</option>
                <option value="less">LESS</option>
            </select>
            <a download={`brands.${cssMethod}`} href={downloadUrl}><GrDownload/></a>
            <button onClick={getLink}><GrLink/></button>
        </div>
        <div className="selected" onClick={() => setSelectedBrands([])}>
           <button> <GrClose /> </button>
           {selectedBrands.length} brands collected
        </div>
    </div>
  )
}

export default Download