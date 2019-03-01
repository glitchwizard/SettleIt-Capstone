import React from 'react';
import { connect } from 'react-redux';
import BackgroundImage from './BackgroundImage';
import settleItLogo from '../assets/SettleItLogo-01.png'

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

          .header {
            display: block;
            background-color: rgba(0, 0, 0, 0.5);
            height: 4em;

          }

          .bizIcon {
            height: 100%;
            display: inline-block;
            margin-left: 10em;
          }

          img {
            padding-top: 5px;
            display: inline-block;
            height: 3.5em;
          }

        @import url("https://fonts.googleapis.com/css?family=Montserrat");
        `}
        </style>
        <div>
          <BackgroundImage />
          <div className="header">
            <div className="bizIcon">
              <img src={settleItLogo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect()(App);