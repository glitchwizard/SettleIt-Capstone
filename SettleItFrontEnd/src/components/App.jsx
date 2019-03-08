import React from 'react';
import { connect } from 'react-redux';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import PropTypes from 'prop-types';
import SettleItButton from './SettleItButton';
import * as actions from '../actions';
import SettleSheetStartModal from './SettleSheetStartModal';
import APIButton from './APIButton';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleSettleSheetModalToggle = this.handleSettleSheetModalToggle.bind(this);
  }
  
  componentDidMount() {

  }

  handleSettleSheetModalToggle() {
    const { dispatch } = this.props;
    event.preventDefault();
    if (this.props.reduxState.settleSheetModalVisibility.isModalDisplayed) {
      dispatch(actions.hideSettleSheetStart());
    } else {
      dispatch(actions.displaySettleSheetStart());
    }

  } 
  
  render(){
    let divToDisplay;
    if (this.props.reduxState.settleSheetModalVisibility.isModalDisplayed) {

      divToDisplay = <div>
        <SettleSheetStartModal />
      </div>;
    } else {
      divToDisplay = null;
    }

    return (
      <div className="mainPage">
        <style jsx>{`
          .mainPage {
            font-family: "Montserrat", sans-serif;
          }

          .hero {
            display: relative;
          } 

          .SettleSheetButtonWrapper {
            display: flex;
            justify-content: center;
            padding: 10px;
          }

        @import url("https://fonts.googleapis.com/css?family=Montserrat");
        `}
        </style>
        <div>
          <Header />
          <div className="hero">
            <BackgroundImage />
            {divToDisplay}
            <div className="SettleSheetButtonWrapper" >
              <SettleItButton buttonText="Create Settle Sheet" onClick={this.handleSettleSheetModalToggle}/>
              <br />
            </div>
            <div className="SettleSheetButtonWrapper">
              <APIButton buttonText="Make API Call" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reduxState: state
  };
};

App.propTypes = {
  dispatch: PropTypes.func,
  reduxState: PropTypes.object
};


export default connect(mapStateToProps)(App);
