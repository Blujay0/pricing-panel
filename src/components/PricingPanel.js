import React from 'react'
import './PricingPanel.css'

const PricingPanel = () => {
  return (
    <body>
      <div class='panel pricing-table'>
        <div class='pricing-plan'>
          <img src={'/icon1.png'} alt='' class='pricing-img' />
          <h2 class='pricing-header'>Personal</h2>
          <ul class='pricing-features'>
            <li class='pricing-features-item'>Custom domains</li>
            <li class='pricing-features-item'>Sleeps after 30 mins of inactivity</li>
          </ul>
          <span>Free </span>
          <a href="#/">Sign Up</a>
        </div>

        <div class='pricing-plan'>
          <img src='icon2.png' alt='' class='pricing-img' />
          <h2 class='pricing-header'>Small Team</h2>
          <ul class='pricing-features'>
            <li class='pricing-features-item'>Never Sleeps</li>
            <li class='pricing-features-item'>Multiple workers for more powerful apps</li>
          </ul>
          <span class='pricing-price'>$150 </span>
          <a href='#/' class='pricing-button is-featured'>Free Trial</a>
        </div>

        <div class='pricing-plan'>
          <img src='icon3.png' alt='' class='pricing-img' />
          <h2 class='pricing-header'>Enterprise</h2>
          <ul class='pricing-features'>
            <li class='pricing-features-item'>Dedicated</li>
            <li class='pricing-features-item'>Simple Horizontal Scalability</li>
          </ul>
          <span class='pricing-price'>$400 </span>
          <a href='#/' class='pricing-button'>Free Trial</a>
        </div>
      </div>
    </body>
  )
}

export default PricingPanel;