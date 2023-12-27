import React, {useContext} from 'react'
import { Store } from '../DataStore/Data'
import { NavLink } from 'react-router-dom'

export default function Hollywood() {

    const [hollywoodData] = useContext(Store)
    console.log(hollywoodData)

  return (
    <div className='Main'>
    <div className='Main-Left'>
      <h1>Hollywood</h1>
      {hollywoodData.filter((items)=> items.category === "Hollywood").map((filterItems, index)=>{
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
        {hollywoodData.filter((items)=> items.category === "Hollywood Top Post").map((filterItems, index)=>{
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
          <img src='https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-mcdonalds-300x600.jpg.webp' alt='img not found' />
        </div>
      </div>
    </div>
  </div>
    // <div>
    
    //     <h1>This is a Hollywood component</h1>
    //     {hollywoodData.filter((items)=> items.category === "Hollywood").map((filterItems, index)=>{
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
