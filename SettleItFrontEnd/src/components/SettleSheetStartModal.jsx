import React from 'react';
import * as action from './../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class SettleSheetStartModal extends React.Component {

  constructor(props){
    super(props);
    this.handleNewShowSubmission = this.handleNewShowSubmission.bind(this);
    this.handleHideSettleSheetModal = this.handleHideSettleSheetModal.bind(this);
  }


  handleNewShowSubmission(event){
    const { dispatch } = this.props;
    event.preventDefault();
    
    this._dateSettleSheetCreated = new Date();
    
    dispatch(
      action.submitNewShow(
        this._headlinerBandName.value, 
        this._dateSettleSheetCreated.value, 
        this._dateOfShow.value
      )
    );
    
    this._headlinerBandName = '';
    this._dateSettleSheetCreated = '';
    this._dateOfShow = '';
  }

  handleHideSettleSheetModal(){
    const {dispatch} = this.props;
    dispatch(action.hideSettleSheetStart());
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

        .createNewSettleSheet {
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
        <div className="createNewSettleSheet">
          <div id="settleSheetModal" className="settleSheetModal">
            <div className="modalContent">
              <span className="closeButton" onClick={this.handleHideSettleSheetModal}>&times;</span>
            Please input show info here:
              <form onSubmit={this.handleNewShowSubmission}><p></p>
                <input
                  type='text'
                  id='bandNames'
                  placeholder='Band Names'
                  ref={(input) => {this._headlinerBandName = input;}} />
                <p> Date of show: </p>
                <input
                  type='date'
                  id='dateOfShow'
                  placeholder='What date is the show?'
                  ref={(dateOfShow) => {this._dateOfShow = dateOfShow;}} />
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

SettleSheetStartModal.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SettleSheetStartModal);