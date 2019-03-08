import React from 'react';

function getBandFromLocalAPI(){
  console.log('Things are happening!');
    fetch('http://localhost:5000/api/values')
        .then(
            (result) => {
                result.json().then(data => { console.log('data \n', data) });
            },
            (error) => {
                console.log(error);
            }
        )
  console.log('other things are happening!');
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

