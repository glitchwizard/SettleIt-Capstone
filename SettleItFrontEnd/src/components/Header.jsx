import React from 'react';
import settleItLogo from '../assets/SettleItLogo-01.png'

function Header() {
  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {
          background-color: rgba(0, 0, 0, 0.4);
        }

        .header {
          display: flex;
          height: 4em;
          border: 1px solid white;
          justify-content: space-around;
          align-items: center;
        }

        .bizIcon {
          height: 100%;
          display: inline-block;
        }

        img {
          padding-top: 5px;
          display: inline-block;
          height: 3.5em;
        }

        .buttonContainer {
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
      <div className="header">
        <div className="bizIcon">
          <img src={settleItLogo} />
        </div>
        <div className="buttonContainer">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;