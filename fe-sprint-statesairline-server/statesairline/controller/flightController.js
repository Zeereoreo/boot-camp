const flights = require('../repository/flightList');
const fs = require('fs');

module.exports = {
  // [GET] /flight
  // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;
    // TODO:
    if(departure_times && arrival_times){
      let filtered = flights.filter(el => el.departure_times === departure_times && el.arrival_times === arrival_times)
      return res.json(filtered)
    }
    if (departure && destination){
      let filtered = flights.filter(el => el.departure === departure && el.destination === destination)
      return res.json(filtered)
    }
    return res.json(flights)
  },
  // [GET] /flight/:uuid
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;
    // TODO:
    if(uuid){
      let filtered = flights.filter(el => uuid === el.uuid)
      return res.json(filtered)
    }

  },

  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const { uuid } = req.params;
    const bodyData = req.body;
    const idx = flights.findIndex((el) => el.uuid === uuid)
    const newFlight = {
      ...flights[idx],
      ...bodyData,
    }
    flights.splice(idx, 1, newFlight)
    return res.json(newFlight)
  }
};
