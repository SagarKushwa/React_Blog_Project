import React, {useContext} from 'react'
import { Store } from '../DataStore/Data'
import { NavLink } from 'react-router-dom'

function Bollywood() {

    const [bollywoodData] = useContext(Store)
    // console.log(bollywoodData)

  return (
    <div className='Main'>
      <div className='Main-Left'>
        <h1>Bollywood</h1>
        {bollywoodData.filter((items)=> items.category === "Bollywood").map((filterItems, index)=>{
          // console.log(bollywoodData[index])

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
          {bollywoodData.filter((items)=> items.category === "Bollywood Top Post").map((filterItems, index)=>{
          return(
          <NavLink className={"Dynamic-Nav"} to={`/dynamic/${filterItems.id}`}>
          <div className='Bollywood-Top-Post-Content Cursor'>
            <img src={filterItems.Image} alt='not found'/>
            <div>
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
          <img src='https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-burger-king-300x600.jpg.webp' alt='img not found' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Bollywood;



