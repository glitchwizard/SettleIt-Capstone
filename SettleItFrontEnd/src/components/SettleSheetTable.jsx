import React from 'react';
import SettleItButton from './SettleItButton';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SettleSheetTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleGetSettleSheetsFromLocalAPI = this.handleGetSettleSheetsFromLocalAPI.bind(this);
    this.handleGetSettleSheetDetails = this.handleGetSettleSheetDetails.bind(this);
  }

  handleGetSettleSheetsFromLocalAPI() {
    const {dispatch} = this.props;
    event.preventDefault();
    dispatch(actions.getSettleSheetList());
  }

  handleGetSettleSheetDetails(){
    console.log('settleSheetDetails click working');
  }

  

  render() {
    let settleSheetsListRender;

    if (Object.keys(this.props.settleSheets).length > 0) {
      settleSheetsListRender = Object.keys(this.props.settleSheets).map(
        (settleSheetId) => {
          return <tr key={settleSheetId}>
            <td className="tableRow" >{this.props.settleSheets[settleSheetId].settleSheetId}</td>
            <td className="tableRow">{this.props.settleSheets[settleSheetId].dateCreated}</td>
            <td className="tableRow">{this.props.settleSheets[settleSheetId].dateOfShow}</td>
            <td className="tableRow">{this.props.settleSheets[settleSheetId].headlinerBand}</td>
            <td className="tableRow">{this.props.settleSheets[settleSheetId].venueName}</td>
            <td><SettleItButton id={settleSheetId} buttonText={(parseInt(settleSheetId)+1) + ". Details/Edit" } onClick={this.handleGetSettleSheetDetails}/></td>
          </tr>;
        }
      );
    } else {
      settleSheetsListRender = null;
    }


    return (
      <div className="componentStyle">
        <style jsx>{`
        .componentStyle {
            /* input CSS here*/
                }

          table {
            border: 1px solid black;
            border-radius: .5em;
            background-color: rgba(100,100,100,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 3px;
          }

          th, td {
            border: 1px solid black;
            border-radius: .25em;
            background-color: rgba(50,50,50,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 10px;
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
            `}
        </style>
        <table>
          <thead>
            <tr>
              <div className="centerThisItem">
                <SettleItButton className="getBandsButton" onClick={this.handleGetSettleSheetsFromLocalAPI} buttonText="Get Settle Sheet List" />
              </div>
            </tr>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    settleSheets: state.settleSheets
  };
};

SettleSheetTable.propTypes = {
  dispatch: PropTypes.func,
  settleSheets: PropTypes.object
};

export default connect(mapStateToProps)(SettleSheetTable);