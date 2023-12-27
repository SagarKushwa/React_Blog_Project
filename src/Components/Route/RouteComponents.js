import React, { useRef } from 'react'
import Home from './Home';
import Fitness from './Fitness';
import Technology from './Technology';
import Bollywood from './Bollywood';
import Hollywood from './Hollywood';
import Food from './Food';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import DataComp from '../DataStore/Data';
import './Component.css'
import DynamicRoute from './DynamicRoute';
import {FaBars, FaTimes} from "react-icons/fa"

export default function RouteComponents() {

  const navigationRefrense = useRef();

   const showNavigationBar = () =>{
    navigationRefrense.current.classList.toggle("responsive-bar")
   }

  return (
    <div >
      <BrowserRouter>
        <div className='Navbar' ref={navigationRefrense}>
          <NavLink className='Navbar-Cursor' to='/'> Home </NavLink>
          <NavLink className='Navbar-Cursor' to='/Bollywood'> Bollywood</NavLink>
          <NavLink className='Navbar-Cursor' to='/Technology'> Technology </NavLink>
          <NavLink className='Navbar-Cursor' to='/Hollywood'> Hollywood </NavLink>
          <NavLink className='Navbar-Cursor' to='/Fitness'> Fitness </NavLink>
          <NavLink className='Navbar-Cursor' to='/Food'> Food </NavLink>

          <button className='Navbar-Btn Navbar-Btn-Close' onClick={showNavigationBar}>
            <FaTimes/>
          </button>
        </div>

        <button className='Navbar-Btn1' onClick={showNavigationBar}><FaBars/></button>

        <DataComp>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Fitness' element={<Fitness />} />
            <Route path='/Technology' element={<Technology/>} />
            <Route path='/Bollywood' element={<Bollywood/>} />
            <Route path='/Hollywood' element={<Hollywood/>} />
            <Route path='/Food' element={<Food/>} />
            <Route path='/Dynamic/:id' element={<DynamicRoute/>}/>
          </Routes>
        </DataComp>
      </BrowserRouter>
    </div>
  )
}
