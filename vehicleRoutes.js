module.exports = function(app) {
    var vehicleList = require('./vehicleController');
  
    // vehicleList Routes
    app.route('/vehicles')
      .get(vehicleList.list_all_vehicles);
  
  
    app.route('/vehicles/:vrm')
      .get(vehicleList.read_a_vehicle);
  };