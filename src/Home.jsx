// navbar code

import React from 'react'
import myStyle from './style.module.css'


const Home = () => {
  return (
    <div style={{height:'35rem'}} className={myStyle.divStyle}>
        <h1 className={myStyle.h1Ttyle}>Are You Ready To Shake Up the Blogosphere?</h1>
        {/* <hr style={{color:'orange', width:"40px", textAlign:"center"}} /> */}
        <p className={myStyle.homepStyle}>Fum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum dolore eu fer feugiat nulla facilisis at vero harum nullam moderatius mei causae.</p>
    </div>
  )
}

export default Home