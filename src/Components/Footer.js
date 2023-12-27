import React from 'react'
import './Route/Component.css'


function Footer() {
  return (
    <div className='Footer'>
        <div className='Foot-Logo'>
            <div className='The'><h3>The</h3></div>
            <h1 className="Siren">Siren</h1>
        </div>
        <div className='Foot-Right'>
            <div className='Foot-List'>
                <ul>
                    <li>Home</li>
                    <li>Bollywood</li>
                    <li>Technology</li>
                    <li>Hollywood</li>
                    <li>Fitness</li>
                    <li>Food</li>
                </ul>
            </div>
            <div className='Foot-List'>
                <ul>
                    <li>Top Post</li>
                    <li>Latest Articles</li>
                </ul>
            </div>
            <div className='Foot-Last'>
                <div className='Foot-List'>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Linkdin</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
                <div className='Foot-List'>
                    <ul>
                        <li>Gmail</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer