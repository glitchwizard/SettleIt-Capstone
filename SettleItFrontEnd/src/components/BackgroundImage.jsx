import React from 'react';
import bgImage from '../assets/BO2A8527.jpg';


function BackgroundImage() {

  return (
    <div className="bgImageContainerWrapper">
      <style jsx>{`
        .bgImageContainerWrapper {
              height: 100vh;
              width: 100vw;
              position: fixed;
              overflow: hidden;
              z-index: -2;
        }

        .bgImageContainer {
            height: 100%;
            left: 50%;
            position: absolute;
            overflow: hidden;
            transform: translate(-55%, -0%);
          }
        
        img {
          max-height: 100vw;
          min-height: 800px;
          min-width: 100vw;
          transform: translate(-0%, -15%);
          opacity: 0.8;
        }
      `}
      </style>
        <div className="bgImageContainer">
          <img src={bgImage} />
        </div>
    </div>
  );
}

export default BackgroundImage;