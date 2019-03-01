import React from 'react';

function SettleSheetStartModal() {
  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {

                }

        .createNewSettleSheet {
            padding-top:40vh;
            display: flex;
            justify-content: center;
          }

        .settleSheetButton {

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
        <button id="settleSheetButton">Create Settle Sheet</button>
        <div id="settleSheetModal" className="settleSheetModal">
          <div className="modalContent">
            <span className="closeButton">&times;</span>
            <p>Here will be a template for a modal</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SettleSheetStartModal;