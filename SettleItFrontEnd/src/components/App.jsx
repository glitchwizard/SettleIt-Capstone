import React from 'react';
import { connect } from 'react-redux';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import PropTypes from 'prop-types';
import SettleItButton from './SettleItButton';
import * as actions from '../actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleShowSettleSheetModal = this.handleShowSettleSheetModal.bind(this);
  }
  
  componentDidMount() {

  }

  handleShowSettleSheetModal() {
    const { dispatch } = this.props;
    event.preventDefault();
    if (this.props.reduxState.displaySettleSheetStart.modalIsDisplayed) {
      dispatch(actions.hideSettleSheetStart());
    } else {
      dispatch(actions.displaySettleSheetStart());
    }

  } 
  
  render(){
    console.log('this.props');
    console.log(this.props);
    
    let divToDisplay;
    if (this.props.reduxState.displaySettleSheetStart.modalIsDisplayed) {

      divToDisplay = <SettleItButton buttonText='Success!' />;
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
          <SettleItButton buttonText="Print state to Console" onClick={this.handlePrintState} />

          <div className="hero">
            <BackgroundImage />
            {/* {settleSheetStartModal} */}
            {divToDisplay}
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
    reduxState: state
  };
};

App.propTypes = {
  dispatch: PropTypes.func,
  reduxState: PropTypes.object
};


export default connect(mapStateToProps)(App);
