import React from 'react';
import PropTypes from 'prop-types';

function SettleItButton({buttonText, onClick}) {
  return (
    <div className="componentStyle" onClick={onClick}>
      <style jsx>{`
        .componentStyle {
            
              }
        button {
        vertical-align: middle;
        background-color: rgba(100,100,100,0.5);
        border: 1px solid rgba(200,200,200,0.5);
        padding: 1em;
        border-radius: .5em;
        color: white;
        }

        button:hover {
        background-color: rgba(155,155,155,0.5);
        }

        button:active {
          background-color: rgba(90,90,90,0.5);

        }
      `}
      </style>
      <button >{buttonText}</button>
    </div>
  );
}

SettleItButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};

export default SettleItButton;