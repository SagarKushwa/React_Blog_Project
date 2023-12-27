import React, {useContext} from 'react'
import { Store } from '../DataStore/Data'
import { NavLink } from 'react-router-dom'

export default function Food() {
    
    const [foodData] = useContext(Store)

  return (
    <div className='Main'>
    <div className='Main-Left'>
      <h1>Food</h1>
      {foodData.filter((items)=> items.category === "Food").map((filterItems, index)=>{
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
        {foodData.filter((items)=> items.category === "Food Top Post").map((filterItems, index)=>{
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
          <img src='https://newspaperads.ads2publish.com/wp-content/uploads/2018/10/paytm-mall-fashion-shopping-ad-deccan-chronicle-hyderabad-16-10-2018.png' alt='img not found' />
        </div>
      </div>
    </div>
  </div>
    // <div>
    //     <h1>This is a food component</h1>
    //     {foodData.filter((items)=> items.category === "Food").map((filterItems, index)=>{
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
