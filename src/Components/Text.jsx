import React from 'react'
import './bodycss.css'
import pic5 from '../assets/c6.png'
function Text() {
  return (
   <>
         <div className="container">
            <div className="text">
                <h2></h2>
                <p><b>ABC Institute of Technology</b> is a premier educational institute in Kolkata. It is a part of XYZ Educational Initiatives. Today, it ranks among the top private engineering college in Kolkata, West Bengal. Most of its eligible programs are NBA accredited. It has received several accolades and rankings from industry leaders. Some of them are NIRF, CAREERS360, India Today, The Week, and Times of India. Narula Institute of Technology stands among the best private engineering colleges in Kolkata, West Bengal through its near-perfect adherence to global quality standards.</p>
            </div>
            <div className="image">
                <img src= {pic5} alt="Placeholder" />
            </div>
        </div>
   </>
  )
}

export default Text