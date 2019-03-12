import React from 'react';
import SettleItButton from './SettleItButton';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as action from '../actions';

class SettleSheetTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleGetSettleSheetsFromLocalAPI = this.handleGetSettleSheetsFromLocalAPI.bind(this);
    this.handleGetSettleSheetDetails = this.handleGetSettleSheetDetails.bind(this);
  }

  handleGetSettleSheetsFromLocalAPI() {
    const {dispatch} = this.props;
    event.preventDefault();
    dispatch(action.getSettleSheetList());
  }

  handleGetSettleSheetDetails(id){
    console.log('settleSheetDetails click working, and this is the ID: ' + id);
    const { dispatch } = this.props;
    dispatch(action.getSettleSheetByID(id));
    dispatch(action.displaySettleSheetDetails());
  }



  render() {
    let settleSheetsListRender;
    let settleSheetsTableRender;

    if (Object.keys(this.props.settleSheets).length > 0) {
      settleSheetsListRender = Object.keys(this.props.settleSheets).map(
        (Id) => {
          return <tr key={Id}>
            <td style={{textAlign: 'center'}}><strong>{(parseInt(Id) + 1) + '. '}</strong></td>
            <td style={{textAlign: 'center'}} className="tableRow">{this.props.settleSheets[Id].settleSheetId}</td>
            <td style={{textAlign: 'center'}} className="tableRow">{this.props.settleSheets[Id].dateCreated}</td>
            <td style={{textAlign: 'center'}} className="tableRow">{this.props.settleSheets[Id].dateOfShow}</td>
            <td style={{textAlign: 'left'}} className="tableRow">{this.props.settleSheets[Id].headlinerBand}</td>
            <td style={{textAlign: 'left'}} className="tableRow">{this.props.settleSheets[Id].venueName}</td>
            <td><SettleItButton id={this.props.settleSheets[Id].settleSheetId} buttonText={'Details/Edit'} onClick={() => {this.handleGetSettleSheetDetails(this.props.settleSheets[Id].settleSheetId);}}/></td>
          </tr>;
        }
      );
    } else {
      settleSheetsListRender = null;
    }

    if (Object.keys(this.props.settleSheets).length > 0) {
      settleSheetsTableRender = <table>
        <thead>
          <tr>
            <div></div>
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
      </table>;
    } else {
      settleSheetsListRender = null;
    }
    return (
      <div className="componentStyle">
        <style jsx>{`
        .componentStyle {
            border: 1px solid black;
            border-radius: .5em;
            background-color: rgba(100,100,100,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 3px;
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
            background-color: rgba(25,25,25,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 10px;
            text-align: center;
          }

          .tableRow {
            border: 1px solid black;
            border-radius: .25em;
            background-color: rgba(25,25,25,0.5);
            border: 1px solid rgba(200,200,200,0.5);
            padding: 7px;
            text-align: center;
          }

          .tableRow:hover {
            border: 1px solid black;
            border-radius: .25em;
            background-color: rgba(0,0,0,0.7);
          }
            `}
        </style>
        <SettleItButton className="getBandsButton" onClick={this.handleGetSettleSheetsFromLocalAPI} buttonText="Get Settle Sheet List" />
        {settleSheetsTableRender}
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
  settleSheets: PropTypes.object,
  currentSettleSheet: PropTypes.object
};

export default connect(mapStateToProps)(SettleSheetTable);