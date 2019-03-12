import React from 'react';
import { connect } from 'react-redux';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import PropTypes from 'prop-types';
import SettleItButton from './SettleItButton';
import * as actions from '../actions';
import SettleSheetStartModal from './SettleSheetStartModal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleSettleSheetModalToggle = this.handleSettleSheetModalToggle.bind(this);
    this.handleGetSettleSheetsFromLocalAPI = this.handleGetSettleSheetsFromLocalAPI.bind(this);
  }
  
  componentDidMount() {
    
  }

  componentDidUpdate() {

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

  handleGetSettleSheetsFromLocalAPI() {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(actions.getSettleSheetList());
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
    
    let settleSheetsListRender;

    if (Object.keys(this.props.reduxState.settleSheets).length > 0) {
      settleSheetsListRender = Object.keys(this.props.reduxState.settleSheets).map(
        (settleSheetId) => {
          return <tr key={settleSheetId}>
            <td className="tableRow">{ parseInt(settleSheetId) + 1 }</td>
            <td className="tableRow">{this.props.reduxState.settleSheets[settleSheetId].dateCreated}</td>
            <td className="tableRow">{this.props.reduxState.settleSheets[settleSheetId].dateOfShow}</td>
            <td className="tableRow">{this.props.reduxState.settleSheets[settleSheetId].headlinerBand}</td>
            <td className="tableRow">{this.props.reduxState.settleSheets[settleSheetId].venueName}</td>
          </tr>;
        }
      );
    } else {
      settleSheetsListRender = null;
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

          table {
            border: 1px solid black;
            border-radius: .5em;
            background-color: rgba(100,100,100,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 3px;
          }

          th {
            border: 1px solid black;
            border-radius: .25em;
            background-color: rgba(50,50,50,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 7px;
            text-align: center;
          }

          .tableRow {
            border: 1px solid black;
            border-radius: .25em;
            background-color: rgba(50,50,50,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 7px;
            text-align: center;
          }

          th:hover {
            border: 1px solid black;
            border-radius: .25em;
            background-color: rgba(0,0,0,0.7)
          }

          .tableRow:hover {
            border: 1px solid black;
            border-radius: .25em;
            background-color: rgba(0,0,0,0.7);
          }

        @import url("https://fonts.googleapis.com/css?family=Montserrat");
        `}
        </style>
        <div>
          <Header />
          <div className="hero">
            <BackgroundImage />
            {divToDisplay}
            <div className="centerThisItem" >
              <SettleItButton buttonText="Create Settle Sheet" onClick={this.handleSettleSheetModalToggle}/>
              <br />
            </div>
            <div>
              <div className="centerThisItem">
                <SettleItButton className="getBandsButton" onClick={this.handleGetSettleSheetsFromLocalAPI} buttonText="Get Settle Sheet List"/>
              </div>
              <div className="centerThisItem">
                <table>
                  <thead>
                    <tr>
                      <th>Settle Sheet #</th>
                      <th>Date Created</th>
                      <th>Date of Show</th>
                      <th>Headliner Band</th>
                      <th>Venue Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {settleSheetsListRender}
                  </tbody>
                </table>
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
