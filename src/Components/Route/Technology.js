import React, {useContext} from 'react'
import { Store } from '../DataStore/Data'
import { NavLink } from 'react-router-dom'

export default function Technical() {

  const [technologyData] = useContext(Store)

  return (
    <div className='Main'>
    <div className='Main-Left'>
      <h1>Technology</h1>
      {technologyData.filter((items)=> items.category === "Technology").map((filterItems, index)=>{
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
        {technologyData.filter((items)=> items.category === "Technology Top Post").map((filterItems, index)=>{
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
        <img src='https://newspaperads.ads2publish.com/wp-content/uploads/2018/06/pantaloons-shop-even-more-upto-60-off-ad-delhi-times-23-06-2018-757x1181.png' alt='img not found' />
      </div>
      </div>
    </div>
  </div>
    // <div className='Main'>
    //   <div className='Main-Left'>
    //     <h1>Bollywood</h1>
    //     {technologyData.filter((items)=> items.category === "Technology").map((filterItems, index)=>{
    //       return(
    //        <div className='Demo-Card'>
    //           <div className='Main-Left-Card'>
    //           <img src={filterItems.Image} alt='not found'/>
    //           <div className='Main-Left-Card-Content'>
    //             <h1>{filterItems.heading}</h1>
    //             <p>{filterItems.description}</p>
    //             <p style={{fontWeight:"bold"}}>{filterItems.date}</p>
    //           </div>
    //         </div>
    //        </div>
    //       )
    //      })}
    //   </div>
    //   <div className='Main-Right'></div>
    // </div>
  )
}
