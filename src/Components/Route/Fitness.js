import React, {useContext} from 'react'
import { Store } from '../DataStore/Data'
import { NavLink } from 'react-router-dom'

export default function Fitness() {
    
    const [fitnessData] = useContext(Store)
    console.log(fitnessData)

  return (
    <div className='Main'>
    <div className='Main-Left'>
      <h1>Fitness</h1>
      {fitnessData.filter((items)=> items.category === "Fitness").map((filterItems, index)=>{
        return(
         <div className='Demo-Card'>
            <div className='Main-Left-Card Cursor'>
              <img src={filterItems.Image} alt='not found'/>
              <div className='Main-Left-Card-Content'>
              <NavLink className={"Dynamic-Nav"} to={`/dynamic/${filterItems.id}`}>
               <h1>{filterItems.heading}</h1>
               </NavLink>
               <p>{filterItems.summery}</p>
               <p style={{fontWeight:"bold"}}>{filterItems.author} || {filterItems.date}</p>
              </div>
            </div>
          </div>
        )
       })}
    </div>
    <div className='Main-Right'>
      <div className='Main-Right-Top'>
        <h1>Top Post</h1>
        <div className='Bollywood-Top-Post'>
        {fitnessData.filter((items)=> items.category === "Fitness Top Post").map((filterItems, index)=>{
        return(
          <NavLink className={"Dynamic-Nav"} to={`/dynamic/${filterItems.id}`}>
          <div className='Bollywood-Top-Post-Content Cursor'>
            <img src={filterItems.Image} alt='not found'/>
            <div className=''>
               <h1>{filterItems.heading}</h1>
               <p style={{fontWeight:"bold"}}>{filterItems.author} || {filterItems.date}</p>
              </div>
          </div>
          </NavLink>
        )
      })} 
        </div>
      </div>
      <div className='Advertistement-Style'>
        <div className='Advertistement'>
          <img src='https://www.gourmetads.com/wp-content/uploads/2020/04/mcdelivery-300x600-contactless-delivery.png.webp' alt='img not found' />
        </div>
      </div>
    </div>
  </div>
    // <div>
    //     <h1>This is a Fitness component</h1>
    //     {fitnessData.filter((items)=> items.category === "Fitness").map((filterItems, index)=>{
    //         return(
    //             <>
    //               <img src={filterItems.Image} alt='not found'/>
    //               <h1>{filterItems.heading}</h1>
    //               <p>{filterItems.description}</p>
    //             </>
    //           )
    //     })}
    // </div>
  )
}
