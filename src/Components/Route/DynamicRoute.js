import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../DataStore/Data';
import { NavLink } from 'react-router-dom';
import './Component.css'


function DynamicRoute() {

    const Id = useParams().id;
    const [contextData] = useContext(Store);
    const Navig = useNavigate();
    const IdIndex = contextData.findIndex((todo, index)=>{
      return todo.id === parseInt(Id)
    })
    // const IdIndex = contextData.filter((item)=>item.id === parseInt(Id)).map((filterItems, index)=>{ 
    //   return index;
    // })
    console.log(IdIndex)
    console.log(contextData)
    
    const SliceData = contextData.slice(IdIndex+1, IdIndex+4)
    console.log(SliceData)

  return (
    <div>
        {contextData.filter((item)=>item.id === parseInt(Id)).map((filterItems, index)=>{

          return(
            <div className='DynamicRoute-Main'>
              <div className='DynamicRoute-Card'>
                <h1>{filterItems.heading}</h1>
                <p  style={{fontWeight:"bold"}}>{filterItems.author}</p>
                <p  style={{fontWeight:"bold"}}>{filterItems.date}</p>
                <p>{filterItems.summery}</p>
                <div className='DynamicRoute-Card-Img'>
                  <img src={filterItems.Image} alt='not found'/>
                </div>
                <p>{filterItems.description}</p>
                {/* <p  style={{fontWeight:"bold"}}>{filterItems.author}</p>
                <p  style={{fontWeight:"bold"}}>{filterItems.date}</p> */}
              </div>
              <div>
              </div>
            </div>
          )
         })}

         <button className='Back-Button Cursor' onClick={()=> Navig(-1)}>Back</button>

         <div className='DynamicRoute-More-Related'>
         {SliceData.map((filterItems, index)=>{
            return (
            <div className='DynamicRoute-More-Related-Card Cursor'>
              <img src={filterItems.Image} alt='not found'/>
              <NavLink className={"Dynamic-Nav"} to={`/dynamic/${filterItems.id}`}>
               <h1>{filterItems.heading}</h1>
               </NavLink>
              <p style={{fontWeight:"bold", marginTop:"10px"}}>{filterItems.author}</p>
              <p style={{fontWeight:"bold"}}>{filterItems.date}</p>
              <p style={{marginTop:"10px"}}>{filterItems.summery.slice(0, 200)}...</p>
            </div>
            )
         })}
         </div>

    </div>
  )
}

export default DynamicRoute