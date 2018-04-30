const Vehicles = [{ 'vrm': 'W00K133', 'name':'Corellian YT-1300f light freighter', 'maxSpeed' : '1,050 km/h', 'hyper-drive-rating': 'Class 0.5', 'length' : '34.75'},
{ 'vrm': 'XW1NG', 'name':'Incom T-65B X-wing starfighter', 'maxSpeed' : '1,050 km/h', 'hyper-drive-rating': 'Class 1', 'length' : '12.5'}]

exports.list_all_vehicles = function(req, res) {
    res.json(Vehicles)
};

exports.read_a_vehicle = function(req, res) {
    res.json(Vehicles.find(vehicle => vehicle.vrm == req.params.vrm))
};
