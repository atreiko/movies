import React from 'react'
import logo from '../../assets/tmovie.png'
import { Link, useLocation } from 'react-router-dom'

import './header.scss'
import { useRef } from 'react'
import { useEffect } from 'react'

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  }
]

const Header = () => {
  const { pathname } = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }

    window.addEventListener('scroll', shrinkHeader)

    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])

  const active = headerNav.findIndex(e => e.path === pathname)

  return (
    <header ref={headerRef} className='header'>
      <div className="header__wrap container">
        <div className='logo'>
          <img src={logo} alt='logo' />
          <Link to='/'>tMovies</Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((e, index) => (
              <li key={index} className={`${index === active ? 'active' : ''}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header