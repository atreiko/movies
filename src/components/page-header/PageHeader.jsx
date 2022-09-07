import React from 'react'
import bg from '../../assets/footer-bg.jpeg'

import './page-header.scss'

const PageHeader = props => {
  return (
    <div className='page-header' style={{background: `url(${bg})`}}>
      <h2>{props.children}</h2>
    </div>
  )
}

export default PageHeader