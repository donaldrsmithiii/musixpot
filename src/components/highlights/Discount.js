import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utilities/MyButton';

export default class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30)
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className="discount_wrapper">
          <Fade
            onReveal={() => this.percentage()}
          >
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide
            right
          >
            <div className="discount_description">
              <h3>Purchase Tickets Before 23 Jan</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, harum maiores qui illum culpa, quisquam sed ipsum numquam delectus voluptatibus voluptate voluptatem officiis. Quaerat quibusdam, consequuntur.</p>

              <div className="button">
                <MyButton 
                  text='Purchase Tickets'
                  bck='#ffa600'
                  color='#fff'
                  link='#'
                />
              </div>
            </div>
          </Slide>
          
        </div>  
      </div>
    )
  }
}
