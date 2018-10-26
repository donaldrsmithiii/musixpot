import React from 'react';

import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../images/icons/calendar.png';
import icon_location from '../../images/icons/location.png';

const MusixInfo = () => {
	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="musix_wrapper">

          <Zoom
            duration={500}
          >
            <div className="musix_item">
              <div className="musix_outer">
                <div className="musix_inner">
                  <div className="musix_icon_square bck_red" />
                  <div
                    className="musix_icon"
                    style={{
                      background: `url(${icon_calendar})`
                    }}
                  />
                  <div className="musix_title">Event Date & Time</div>
                  <div className="musix_desc">23 January 2019 @ 9:30p</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom
            duration={500}
            delay={500}
          >
            <div className="musix_item">
              <div className="musix_outer">
                <div className="musix_inner">
                  <div className="musix_icon_square bck_yellow" />
                  <div
                    className="musix_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                  />
                  <div className="musix_title">Event Location</div>
                  <div className="musix_desc">
                    6245 Hollywood Blvd, LA, CA 90028
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

				</div>
			</div>
		</div>
	);
};

export default MusixInfo;
