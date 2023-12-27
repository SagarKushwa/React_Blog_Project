import React, {useContext} from 'react'
import { Store } from '../DataStore/Data'
import './Component.css'
import './Responsive.css'
import { NavLink } from 'react-router-dom'

export default function Home() {

  const [contextData] = useContext(Store)
  // console.log(contextData)

  return (
    <div >
      <div className='TopSection'>
        <div className='Left-TopSection Cursor'>
          {/* <img src='https://www.hindustantimes.com/ht-img/img/2023/12/22/550x309/maths_c90733f9-41ae-11e5-a8da-005056b4648e_1703236942129.jpg'/> */}
          <div className=''>
            <h2>Want to bring out the mathematician in you? Solve the fun quiz and sharpen your mathematics skills like a pro</h2>
          </div>
        </div>
        <div className='Right-TopSection'>
          <div className='Left-Right-TopSection Cursor'>
            <div className='TopSection-Heading'>
              <h2>5 Indo-Chinese Food Dishes You Must Try!</h2>
            </div>
          </div>
          <div className='Right-Right-TopSection Cursor'>
            <div className='TopSection-Heading'>
              <h2>The (Best) 20-Min Leg Day Workout for Home...</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>This is home page</h1> */}
      <div className='Home-The-Latest'>
        <h1>The Latest</h1>
        <div className='Home-The-Latest-Bottom'>
            {contextData.filter((items)=>items.category  === "The Latest").map((item)=>{
              return(
                
                <div className='Home-The-Latest-Bottom-Div Cursor'>
                  <img src={item.Image} alt='not found'/>
                  <div className='Home-The-Latest-Bottom-Div-Content'>
                  <NavLink className={"Dynamic-Nav"} to={`/dynamic/${item.id}`}>
                   <h1>{item.heading}</h1>
                </NavLink>
                    <p>{item.summery.slice(0, 140)}...</p>
                    <p style={{marginTop:"8px", fontWeight:"bold"}}>{item.author} || {item.date}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div className='Home-Latest-Articles'>
        <h1>Latest Articles</h1>
        <div className='Home-Latest-Articles-Part'>
            <div className='Home-Latest-Articles-Part-Left'>
              <div className='dsa'>
              {contextData.filter((items)=> items.id%4 === 0).map((Item)=>{
                return(
                  <div className='Demo-Card'>
                    <NavLink className={"Dynamic-Nav"} to={`/dynamic/${Item.id}`}>
                    <div className='Home-Latest-Articles-Part-Left-Card Cursor'>
                      <img src={Item.Image} alt='not found'/>
                      <div className='Home-Latest-Articles-Part-Left-Card-Content'>
                      <h1>{Item.heading}</h1>
                       <p>{Item.summery.slice(0, 240)}...</p>
                       <p style={{fontWeight:"bold"}}>{Item.author} || {Item.date} || {Item.category}</p>
                      </div>
                    </div>
                    </NavLink>
                  </div>
                )
              })}
              </div>
            </div>
            <div className='Home-Latest-Articles-Part-Right'>
             <div className='Home-Advertistement'>
              <div>
                <img src='https://www.adgully.com/img/400/202011/pure-milk-gowardhan.jpg' alt='img not found' />
              </div>
             </div> 
             <div></div> 
            </div>
        </div>
      </div>
    </div>
  )
}
