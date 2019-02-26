import React from 'react';
import Login from './Login';

class App extends React.Component {
  constructor(props){
    super(props);

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
        <Login />
        
      </div>
    );
  }
}


export default App;