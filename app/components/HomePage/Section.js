import React from 'react';
import Layout1 from './Section/Layout1.js'
import Layout2 from './Section/Layout2.js'
import Layout3 from './Section/Layout3.js';
import '../../css/section.css';
function Section() {
  return (
    <div>
      <img className='main_img' src="../../images/main-img.png" alt="Example" />
      <Layout1/>
      <Layout2/>
      <Layout3/>
    </div>
  )
}

export default Section;
