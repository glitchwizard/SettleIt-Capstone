import React from 'react';
import { connect } from 'react-redux';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import PropTypes from 'prop-types';
import SettleItButton from './SettleItButton';
import SettleSheetStartModal from './SettleSheetStartModal';
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

  handleShowSettleSheetModal() {
    console.log('handleShowSettleSheetModal firing off');
    event.preventDefault();

    const action = {
      type: constants.ADD_NEW_SETTLE_SHEET,
      
      showSettleSheetModal: true
    };

    dispatch(action);
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

App.propTypes = {
  showModal: PropTypes.string
};


export default connect()(App);