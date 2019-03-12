
export function formatDate(inputDate) {
  var resultDate = new Date(inputDate),
    month = '' + (resultDate.getMonth() + 1),
    day = '' + resultDate.getDate(),
    year = resultDate.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export function postToAPI(data) {
  return fetch('http://localhost:5000/api/settlesheets', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  })
    .then((result) => {
      return result.json();
    },
    (error) => {
      console.log(error);
    }
    );
}

export function getSettleSheetsFromLocalAPI() {
  return fetch('http://localhost:5000/api/settlesheets')
    .then(
      (result) => {
        console.log('getSettleSheetsFromLocalAPI_result: ', result);
        return result.json();
      },
      (error) => {
        console.log(error);
      }
    );
}

export function getSettleSheetByIdFromLocalAPI(id) {
  return fetch('http://localhost:5000/api/settlesheets/' + id)
    .then(
      (result) => {
        console.log('getSettleSheetByIdFromLocalAPI_result: ', result);
        return result.json();
      },
      (error) => {
        console.log(error);
      }
    );
}

export function updateSettleSheetInfo(data) {
  debugger;
  return fetch(('http://localhost:5000/api/settlesheets/' + data.settleSheetId), {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  })
    .then((result) => {
      return result.json();
    },
    (error) => {
      console.log(error);
    }
    );
}