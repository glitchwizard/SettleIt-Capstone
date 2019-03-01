import React from 'react';
import { connect } from 'react-redux';
import APIButton from './APIButton';



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
        Home Page working!
        <p />
        <APIButton />
      </div>
    );
  }
}


export default connect()(App);