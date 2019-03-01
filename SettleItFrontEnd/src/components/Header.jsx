import React from 'react';
import settleItLogo from '../assets/SettleItLogo-01.png'

function Header() {
  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {
        }

        .header {
          display: block;
          background-color: rgba(0, 0, 0, 0.5);
          height: 4em;
        }

        .bizIcon {
          height: 100%;
          display: inline-block;
          margin-left: 10em;
        }

        img {
          padding-top: 5px;
          display: inline-block;
          height: 3.5em;
        }
      `}
      </style>
      <div className="header">
        <div className="bizIcon">
          <img src={settleItLogo} />
        </div>
      </div>
    </div>
  );
}

export default Header;