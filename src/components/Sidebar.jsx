/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Modal from 'react-modal'
import {useState} from 'react'
import {GrClose} from 'react-icons/gr'
function Sidebar() {

    const [modalIsOpen,setModalIsOpen] = useState(false)

    const toggleModal = ()=> {
        setModalIsOpen(!modalIsOpen)
    }


  return (
   <>
   <aside className="sidebar">
     <div className='logo'>
        <a>Brand<b>Colors</b>Clone</a>
        <div className="description">
        The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav className='menu'>
            <ul>
                <li>
                  
                <a onClick={toggleModal}>About BrandColors</a>
                </li>
            </ul>
        </nav>
    </div>
   </aside>
   <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="aboutModal"
        overlayClassName="aboutModalOverlay"
        ariaHideApp={false}
      >
        <button className='modalCloseBtn' onClick={toggleModal}>
            <GrClose/>
        </button>
       <h3>About BrandColors</h3>
       <p>BrandColors was created by <b>DesignBombs</b>. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
       <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <b>2 million pageviews</b>. There are now over <b>600 brands</b> with <b>1600 Colors</b> and the collection is always growing.</p>

      </Modal>
   </>
  )
}

export default Sidebar