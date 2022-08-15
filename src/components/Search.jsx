import React, { useContext } from 'react'
import {GrSearch} from 'react-icons/gr'
import MainContext from './Context'
function Search() {
  const {search,setSearch} =useContext(MainContext)
  return (
    <div className='search'>
        <div className="icon">
            <GrSearch />
        </div>
        <input type="text" placeholder='Search brands' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search