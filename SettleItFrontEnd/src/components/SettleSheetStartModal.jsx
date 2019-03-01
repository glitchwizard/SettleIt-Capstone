import React from 'react';
import constants from '../constants';
import { v4 } from 'uuid';
import {connect} from 'react-redux';


function SettleSheetStartModal(props) {

  let _bandNames = null;
  let _dateSettleSheetCreated = null;
  let _dateOfShow = null;


  function handleNewShowSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: constants.ADD_NEW_SETTLE_SHEET,
      id: v4(),
      bandNames: _bandNames,
      dateSettleSheetCreated: _dateSettleSheetCreated,
      dateOfShow: _dateOfShow
    }

    dispatch(action);
    _dateOfShow = '';
    _dateSettleSheetCreated = '';
    _bandNames = '';

  }

  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {
          border: 1px solid red;
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
            <span className="closeButton">&times;</span>
            Please input show info here:
            <form onSubmit={handleNewTicketFormSubmission}><p></p>
              <input
                type='text'
                id='bandNames'
                placeholder='Band Names'
                ref={(input) => {_bandNames = input;}} />
              <p></p>
              <input
                type='date'
                id='dateSettleSheetCreated'
                placeholder='Date Settle Sheet created'
                ref={() => {_dateSettleSheetCreated = new Date();}} />
              <p></p>
              <input
                type='date'
                id='dateOfShow'
                placeholder='What date is the show?'
                ref={(dateOfShow) => {_dateOfShow = dateOfShow;}} />
              <p></p>
              <button type='submit'> Ok </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(SettleSheetStartModal);