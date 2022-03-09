import React, { useState } from 'react'
import MenuIcon from './assets/bars-solid.svg'
import CloseIcon from './assets/window-close-regular.svg'

export default function ResponsiveNavbar() {

    //We will use react hooks for toggling the menu
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (

        export default function Navbar({ fixed }) {
          const [navbarOpen, setNavbarOpen] = React.useState(false);
          return (
            <>
              <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                      className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                      href="#pablo"
                    >
                      teal Tailwind Starter Kit
                    </a>
                    <button
                      className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                      type="button"
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                  <div
                    className={
                      "lg:flex flex-grow items-center" +
                      (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                  >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <li className="nav-item">
                        <a
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </>
          );
        }

        <div className="fixed w-full h-8 bg-blue-400 text-gray-200 flex flex-row justify-between items-center">
            <div className="brand-logo text-sm font-bold px-2">IKITI</div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
                <li className="menu-list-item px-2"><a href="#">Home</a></li>
                <li className="menu-list-item px-2"><a href="#">Profile</a></li>
                <li className="menu-list-item px-2"><a href="#">Settings</a></li>
            </ul>
            
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                {(isSideMenuOpen) ? <img src={CloseIcon} className="w-8 h-8 px-2" alt="close"></img> : <img src={MenuIcon} className="w-8 h-8 px-2" alt="menu"></img>}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
    )

   
}

function SideMenu(){
    return(
        <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-blue-500 top-8">
            <ul className="menu-list flex flex-col text-xs font-bold">
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Home</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Profile</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}