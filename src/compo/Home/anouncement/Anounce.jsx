import React from 'react'
import "./anounce.css"


const Anounce = () => {
  return (
    <div className='anounce'>
        <img src="https://www.bhaktibharat.com/photo/wishes/gita-jayanti-d.jpeg" alt="" />
        <div className="new">
          <h6>New</h6>
        </div>
        <div className="data">
            <div className="address">
                <p> Address</p>
                <h6>भृंगीचक श्री सीताराम दरबार, जमुनहा बाजार, गोपालगंज</h6>
            </div>
            <div className="location">
              {/* <p>Location</p> */}
              <a href='https://maps.app.goo.gl/Ao6MtbG5uDdSJmMV6' rel="noreferrer" target='_blank'>&#128204;</a>
            </div>
            
        </div>
    </div>
  )
}

export default Anounce