import React from 'react';
import { connect } from 'react-redux';
import backgroundImage from '../assets/BO2A8527.jpg';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }
  render(){
    return (
      <div className="mainPage">
        <style jsx>{`
          .mainPage {
            font-family: "Montserrat", sans-serif;
          }

          .bgImageContainerWrapper {
              height: 100vh;
              width: 100vw;
              position: fixed;
              overflow: hidden;
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
            opacity: 0.9;
          }

        @import url("https://fonts.googleapis.com/css?family=Montserrat");
        `}
        </style>
        <div>
          <div className="bgImageContainerWrapper">
            <div className="bgImageContainer">
              <img src={backgroundImage} />
            </div>
          </div>


        </div>
      </div>
    );
  }
}


export default connect()(App);