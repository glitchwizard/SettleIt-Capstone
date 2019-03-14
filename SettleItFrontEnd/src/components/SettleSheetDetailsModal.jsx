import React from 'react';
import * as action from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SettleItButton from './SettleItButton';

class SettleSheetDetailsModal extends React.Component {

  constructor(props){
    super(props);
    this.state={
      barSplitPercentage: 0,
    };
    this.handleHideSettleSheetModal = this.handleHideSettleSheetModal.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleEditSettleSheetInformation = this.handleEditSettleSheetInformation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleOnSubmit(){
    this.handleEditSettleSheetInformation();
    this.handleHideSettleSheetModal();
  }

  handleEditSettleSheetInformation(){
    const { dispatch } = this.props;
    event.preventDefault();
    const initialData = this.props.settleSheetDetails;
    const updatedData = {
      'dateOfShow': this._dateOfShow.value,
      'headlinerBand': this._headlinerBandName.value,
      'venueName': this._venueName.value,

      'barSplitPercentage': this.state.barSplitPercentage,
      'grossBarSales': this.state.grossBarSales,
      'grossBarSplitPayout': this.state.grossBarSplitPayout,
      'grossTicketIncome': this.state.grossTicketIncome,
      'stageOverheadCost': this.state.stageOverheadCost,
      'ticketPrice': this.state.ticketPrice,
      'ticketsSoldQTY': this.state.ticketsSoldQTY,
      'totalGrossExpenses': this.state.totalGrossExpenses,
      'totalGrossIncome': this.state.totalGrossIncome
    };
    const actionPayload = Object.assign( {}, initialData, updatedData);   
    dispatch(action.updateShowInfo(actionPayload));
  }

  handleHideSettleSheetModal(){
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(action.hideSettleSheetDetails());
    dispatch(action.clearSettleSheetDetailFromStore());
  }


  handleChange(event) {
    event.preventDefault();
    this.setState(
      {
        [event.target.id]: event.target.value}, 
      () => {
        this.calculateNetIncome();
        console.log('this.state \n', this.state);
      }
    );
  }

  calculateNetIncome(){
    this.calculateTotalExpenses();
    this.calculateTotalIncome();
  }

  calculateTotalIncome(){
    let totalGrossIncomeCalc = this.isGrossIncomePositive();
    let grossTicketIncome = this.calculateGrossTicketIncome();
    let grossBarSales = this.calculateGrossBarSales();

    totalGrossIncomeCalc = grossTicketIncome + grossBarSales;
    if (!isNaN(totalGrossIncomeCalc)) {
      this.setState(
        {
          totalGrossIncome: totalGrossIncomeCalc.toFixed(2)
        },
        () =>{
          this.generateNetIncome();
        });
    }
  }

  isGrossIncomePositive(){
    if (parseFloat(this.state.totalGrossIncome) > 0) {
      return parseFloat(this.state.totalGrossIncome);
    }
  }
  
  calculateGrossTicketIncome(){
    if(parseFloat(this.state.ticketsSoldQTY) >= 0 && parseFloat(this.state.ticketPrice) >= 0) {
      let grossTicketIncome = parseFloat(this.state.ticketsSoldQTY) * parseFloat(this.state.ticketPrice);
      this.setState({
        grossTicketIncome: grossTicketIncome.toFixed(2)
      });
      return grossTicketIncome;
    }
  }
  
  calculateGrossBarSales(){
    if (parseFloat(this.state.grossBarSales) >= 0) {
      let grossBarSales = (parseFloat(this.state.grossBarSales));
      this.setState({
        grossBarSales: grossBarSales.toFixed(2)
      },() => this.calculateGrossBarSplitPayout());
      return grossBarSales;
    }
  }

  calculateTotalExpenses(){
    let totalGrossExpenses = this.areGrossExpensesPositive();
    let grossBarSplitPayout = this.calculateGrossBarSplitPayout();
    let stageOverheadCost = this.calculateStageOverheadCost();
    
    totalGrossExpenses = grossBarSplitPayout + stageOverheadCost;

    if (!isNaN(totalGrossExpenses)) {
      this.setState(
        {
          totalGrossExpenses: totalGrossExpenses.toFixed(2),
          grossBarSplitPayout: grossBarSplitPayout.toFixed(2),
          stageOverheadCost: stageOverheadCost.toFixed(2)
        },()=>{
          this.generateNetIncome();
        }
      ); 
    }
  }

  areGrossExpensesPositive() {
    if (parseFloat(this.state.totalGrossExpenses) > 0) {
      return parseFloat(this.state.totalGrossExpenses);
    }
  }

  calculateGrossBarSplitPayout(){
    if (parseFloat(this.state.barSplitPercentage) >= 0 && parseFloat(this.state.grossBarSales) >= 0) {
      let grossBarSplitPayout = parseFloat(this.state.grossBarSales) * (parseFloat(this.state.barSplitPercentage) / 100);
      this.setState({
        grossBarSplitPayout: grossBarSplitPayout.toFixed(2)
      });
      return grossBarSplitPayout;
    }
  }

  calculateStageOverheadCost(){
    if (parseFloat(this.state.stageOverheadCost) >= 0) {
      let stageOverheadCost = parseFloat(this.state.stageOverheadCost);
      this.setState({
        stageOverheadCost: stageOverheadCost.toFixed(2)
      });
      return stageOverheadCost;
    }
  }

  generateNetIncome(){
    if (parseFloat(this.state.totalGrossExpenses) >= 0 && parseFloat(this.state.totalGrossIncome) >= 0) {
      let finalNetIncome = parseFloat(this.state.totalGrossIncome) - (parseFloat(this.state.totalGrossExpenses));
      this.setState({
        finalNetIncome: finalNetIncome.toFixed(2)
      });
      return finalNetIncome;
    }
  }
  
  render() {
    return (
      <div className="componentStyle">
        <style jsx>{`
        .componentStyle {
          position: fixed;
          z-index: 1;
          width: 100%;
                }

        .settleSheetModalWrapper {
            padding-top:40vh;
            display: flex;
            justify-content: center;
          }

        .settleSheetModal {
            position: fixed; 
            z-index: 1; 
            left: 0;
            top: 0;
            width: 100%; 
            height: 100%; 
            overflow: auto; 
            background-color: rgb(0,0,0); 
            background-color: rgba(0,0,0,0.4);
        }

        .modalContent{
            background-color: #111111;
            margin: 15% auto; 
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }

        .closeButton {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }

        .closeButton:hover,
        .closeButton:focus {
          color: white;
          text-decoration: none;
          cursor: pointer;
        }

        .formFlexContainer{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .formFlexChild{

        }

        .summaryDiv{
          padding: 10px;
        }

      `}  
        </style>
        <div className="settleSheetModalWrapper">
          <div id="settleSheetModal" className="settleSheetModal">
            <div className="modalContent">
              <span className="closeButton" onClick={this.handleHideSettleSheetModal}>&times;</span>
              <h2>SETTLE SHEET DETAILS:</h2>
              <div>Date Created: {this.props.settleSheetDetails.dateCreated} </div>
              <hr />
              <form onSubmit={this.handleOnSubmit} className="formFlexContainer">
                <div className="formFlexChild">
                  <p></p>
                  <p>Venue Name:</p>
                  <input
                    type='text'
                    id='venueName'
                    defaultValue={this.props.settleSheetDetails.venueName}
                    ref={(venueName) => { this._venueName = venueName; }} />
                  <p>Headliner:</p>
                  <input
                    type='text'
                    id='headlinerBandName'
                    placeholder='Headliner name'
                    defaultValue={this.props.settleSheetDetails.headlinerBand}
                    ref={(headlinerBandName) => {this._headlinerBandName = headlinerBandName; }} />
                  <p> Show Date: </p>
                  <input
                    type='date'
                    id='dateOfShow'
                    defaultValue={this.props.settleSheetDetails.dateOfShow}
                    ref={(dateOfShow) => {this._dateOfShow = dateOfShow; }} />
                  <p></p>
                  <SettleItButton buttonText='Ok' type='submit'/>
                </div>
                <div className="formFlexChild">
                  <p>Tickets Sold (Qty):</p>
                  <input
                    type='number'
                    id='ticketsSoldQTY'
                    placeholder='Tickets Sold'
                    defaultValue={this.props.settleSheetDetails.ticketsSoldQTY}
                    ref={(ticketsSoldQTY) => {this._ticketsSoldQTY = ticketsSoldQTY;}} 
                    onChange={this.handleChange} 
                  />
                  <p>Ticket Price ($):</p>
                  $<input
                    type='number'
                    id='ticketPrice'
                    placeholder='Ticket Price'
                    defaultValue={this.props.settleSheetDetails.ticketPrice}
                    ref={(ticketPrice) => {this._ticketPrice = ticketPrice;}} 
                    onChange={this.handleChange} />
                  <p> Gross Bar Sales ($): </p>
                  $<input
                    type='number'
                    id='grossBarSales'
                    placeholder='Bar Sales'
                    defaultValue={this.props.settleSheetDetails.grossBarSales}
                    ref={(grossBarSales) => {this._barSales = grossBarSales;}} 
                    onChange={this.handleChange} />
                  <p></p>
                  <p> Bar Split: (%)</p>
                  <input
                    type='number'
                    id='barSplitPercentage'
                    placeholder='Bar Split'
                    defaultValue={this.props.settleSheetDetails.barSplitPercentage}
                    ref={(barSplitPercentage) => {this._barSplitPercentage = barSplitPercentage;}} 
                    onChange={this.handleChange} />
                  <p></p>
                  <p> Stage Overhead Cost ($):</p>
                  <input
                    type='number'
                    id='stageOverheadCost'
                    placeholder='Overhead Cost'
                    defaultValue={this.props.settleSheetDetails.stageOverheadCost}
                    ref={(stageOverheadCost) => {this._stageOverheadCost = stageOverheadCost;}} 
                    onChange={this.handleChange} />
                  <p></p>
                </div>
                <div className="formFlexChild">
                  <h2>Summary:</h2>
                  <hr/>
                  <div className="formFlexContainer">
                    <div className="summaryDiv">
                      <p>Gross Ticket Income: ${this.state.grossTicketIncome}</p>
                      <p>Gross Bar Income: ${this.state.grossBarSales}</p>
                      <h3>Total Gross Income: ${this.state.totalGrossIncome}</h3>
                    </div>
                    <div className="summaryDiv">
                      <p>Bar Payout: ${this.state.grossBarSplitPayout}</p>
                      <p>Overhead Expense: ${this.state.stageOverheadCost}</p>
                      <h3>Total Gross Expenses: ${this.state.totalGrossExpenses}</h3>
                    </div>
                  </div>
                  <hr/>
                  <div>
                    <h2 style={{margin: "0", padding: "0"}}>Venue Grand Total:</h2>
                    <h5 style={{margin: "0", padding: "0"}}>(Income less expenses)</h5>
                    <h2 style={{margin: "10px", padding: "0"}}> ${this.state.finalNetIncome}</h2>
                  </div>
                </div>
              </form>
            </div>
            {JSON.stringify(this.state)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    settleSheetDetails: state.settleSheetDetails
  };
};

SettleSheetDetailsModal.propTypes = {
  dispatch: PropTypes.func,
  settleSheetDetails: PropTypes.object
};

export default connect(mapStateToProps)(SettleSheetDetailsModal);