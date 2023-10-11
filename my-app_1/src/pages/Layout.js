import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/contact" ex>Contact</NavLink>
          </li>
          <li>
               <NavLink to="/nopage">NoPage</NavLink>
          </li>
          </ul>
        </nav>


      <Outlet/>
    </div>
  )
}
