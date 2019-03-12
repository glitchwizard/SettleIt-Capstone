import React from 'react';
import {connect} from 'react-redux';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import PropTypes from 'prop-types';
import SettleItButton from './SettleItButton';
import * as action from '../actions';
import SettleSheetStartModal from './SettleSheetStartModal';
import SettleSheetTable from './SettleSheetTable';
import SettleSheetDetailsModal from './SettleSheetDetailsModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSettleSheetModalToggle = this.handleSettleSheetModalToggle.bind(this);
    this.handleSettleSheetDetailModalToggle = this.handleSettleSheetDetailModalToggle.bind(this);
  }

  handleSettleSheetModalToggle() {
    const {dispatch} = this.props;
    event.preventDefault();
    if (this.props.reduxState.settleSheetModalVisibility.isModalDisplayed) {
      dispatch(action.hideSettleSheetStart());
    } else {
      dispatch(action.displaySettleSheetStart());
    }
  }

  handleSettleSheetDetailModalToggle() {
    const {dispatch} = this.props;
    event.preventDefault();
    if (this.props.reduxState.settleSheetModalVisibility.isModalDisplayed) {
      dispatch(action.hideSettleSheetDetails());
    } else {
      dispatch(action.displaySettleSheetDetails());
    }
  }

  render() {
    let divToDisplay;
    if (this.props.reduxState.settleSheetModalVisibility.isModalDisplayed) {
      divToDisplay = <div>
        <SettleSheetStartModal />
      </div>;
    } else {
      divToDisplay = null;
    }

    let settleSheetDetailsDisplay;

    if (this.props.reduxState.settleSheetModalVisibility.isSettleSheetDetailModalDisplayed) {
      settleSheetDetailsDisplay = <div>
        <SettleSheetDetailsModal />
      </div>;
    } else {
      settleSheetDetailsDisplay = null;
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

          .centerThisItem {
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
            {settleSheetDetailsDisplay}
            <div className="centerThisItem" >
              <SettleItButton buttonText="Create Settle Sheet" onClick={this.handleSettleSheetModalToggle} />
              <br />
            </div>
            <div>

              <div className="centerThisItem">
                <SettleSheetTable />
              </div>
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
