import React, { Component } from 'react';
import MyButton from '../utilities/MyButton';

import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {

  state={
    prices: [100, 150, 250],
    seating: ['Balcony', 'Floor', 'Stage'],
    desc: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo sed natus cumque suscipit deleniti, iure aliquid reprehenderit.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sed omnis hic optio, minus quibusdam numquam provident quisquam.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident cupiditate, sapiente possimus quis iure error, tempore in corrupti.'
    ],
    ticketLink: ['#b', '#f', '#s'],
    delay: [500, 0 , 500]
  };

  showPriceBoxes = () => (
    this.state.prices.map((box,i) => (
      <Zoom 
        delay={this.state.delay[i]} 
        key={i}
      >
        <div className='pricing_item'> 
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.seating[i]}</span>
            </div>
            <div className='pricing_description'>
              {this.state.desc[i]}
            </div>
            <div className='pricing_buttons'>
              <MyButton 
                text='Purchase Now'
                bck='#ffa800'
                color='#ffffff'
                link={this.state.ticketLink[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  );

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showPriceBoxes()}
          </div>
        </div>
			</div>
		);
	}
}
