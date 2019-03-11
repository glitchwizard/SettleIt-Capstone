import React from 'react';
import APItools from '../tools';

function APIButton() {
  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {
            /* input CSS here*/
                }
            `}
      </style>
      <button className="getBandButton" onClick={APItools.getBandsFromLocalAPI()}>Get Band List</button>
    </div>
  );
}

export default APIButton;

