import React from 'react';

function getBandFromLocalAPI(){
  fetch('http://localhost:5000/api/settlesheets')
    .then(
      (result) => {
        result.json().then(data => {
          console.log('data \n', data);
          return data;
        });
      },
      (error) => {
        console.log(error);
      }
    );
}

function APIButton() {
  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {
            /* input CSS here*/
                }
            `}
      </style>
      <button className="getBandButton" onClick={getBandFromLocalAPI}>Get Band List</button>
    </div>
  );
}


export default APIButton;

