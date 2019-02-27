import React from 'react';
import Login from './Login';



class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  getBandFromLocalAPI(){
    console.log('Things are happening!');
    fetch('http://localhost:5000/api/values', {mode: "cors"})
      .then(response => response)
      .then(
        (result) => {
          console.log('result');
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log('other things are happening!');
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
        <button className="getBandButton" onClick={this.getBandFromLocalAPI}>Get Band List</button>
      </div>
    );
  }
}


export default App;