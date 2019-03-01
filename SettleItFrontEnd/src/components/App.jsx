import React from 'react';
import { connect } from 'react-redux';
import BackgroundImage from './BackgroundImage';
import Header from './Header';

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



        @import url("https://fonts.googleapis.com/css?family=Montserrat");
        `}
        </style>
        <div>
          <BackgroundImage />
          <Header />
        </div>
      </div>
    );
  }
}


export default connect()(App);