import React from 'react';
import * as action from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class SettleSheetDetailsModal extends React.Component {

  constructor(props){
    super(props);
    this.handleHideSettleSheetModal = this.handleHideSettleSheetModal.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(){
    console.log('submit');
    this.handleEditSettleSheetInformation();
    this.clearSettleSheetDetailFromStore();
  }

  handleEditSettleSheetInformation(){
    const { dispatch } = this.props;
    event.preventDefault();

    const initialData = this.props.settleSheetDetails;

    const updatedData = {
      'dateOfShow': this._dateOfShow.value,
      'headlinerBand': this._headlinerBandName.value,
      'venueName': this._venueName.value
    };

    const actionPayload = Object.assign( {}, initialData, updatedData);   

    dispatch(action.updateShowInfo(actionPayload));
    
  }

  handleHideSettleSheetModal(){
    const {dispatch} = this.props;
    dispatch(action.hideSettleSheetDetails());
    dispatch(action.clearSettleSheetDetailFromStore());
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


      `}  
        </style>
        <div className="settleSheetModalWrapper">
          <div id="settleSheetModal" className="settleSheetModal">
            <div className="modalContent">
              <span className="closeButton" onClick={this.handleHideSettleSheetModal}>&times;</span>
              <h2>SETTLE SHEET DETAILS:</h2>
              <div>Date Created: {this.props.settleSheetDetails.dateCreated} </div>
              <hr />
              <form onSubmit={this.handleOnSubmit}><p></p>
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
                <button type='submit'> Ok </button>
              </form>

            </div>
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