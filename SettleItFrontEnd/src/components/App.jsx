import React from 'react';
import { connect } from 'react-redux';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import PropTypes from 'prop-types';
import SettleItButton from './SettleItButton';
import constants from './../constants';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('props');
    console.log(props);
    this.handleShowSettleSheetModal = this.handleShowSettleSheetModal.bind(this);
  }
  
  componentDidMount() {
    
  }
  
  // TODO: need to finish this button below and get modal working

  handleShowSettleSheetModal() {
    const { dispatch } = this.props;
    console.log('handleShowSettleSheetModal firing off');
    event.preventDefault();
    const action = {
      type: constants.DISPLAY_SETTLE_SHEET_START_TOGGLE,
    };
    dispatch(action);
  } 
  
  // TODO: need to finish this button below

  handlePrintState() { 
    // console.log('');
    // console.log('handlePrintState executing');
    // console.log(getState());
  }
  
  render(){
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
          <SettleItButton buttonText="Print state to Console" onClick={this.handlePrintState} />

          <div className="hero">
            <BackgroundImage />
            {/* {settleSheetStartModal} */}
            <div className="SettleSheetButtonWrapper" onClick={this.handleShowSettleSheetModal}>
              <SettleItButton buttonText="Create Settle Sheet" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSettleSheetModal: state.showSettleSheetModal,
    showModalToggle: state.showModalToggle
  };
};

App.propTypes = {
  showModalToggle: PropTypes.string,
  dispatch: PropTypes.func,
  store: PropTypes.object
};


export default connect(mapStateToProps)(App);
