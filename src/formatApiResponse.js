export function formatApiResponse(data) {

  let dataCopy = JSON.parse(JSON.stringify(data));
  let eventArray = [];

  for (const key in dataCopy) {

    dataCopy[key].events.forEach(event => {
      event.division = key;
    });

    eventArray.push(...(dataCopy[key].events));

  }

  return eventArray;
  
};