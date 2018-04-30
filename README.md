## Sample project for Star Wars themed Vehicle Data
This is image will be published to andyianriley/star-wars-vehicle-lookup.

To use this image locally build the image.
```
docker-compose build
docker-compose up
```
Then you will be able to reference it in other dockerfiles.

You can set environment variables PORT, default 9001 base uri is http://localhost:9001/vehicles.

Sample query

http://localhost:9001/vehicles/W00K133

response 

```json
{  
   "vrm":"W00K133",
   "name":"Corellian YT-1300f light freighter",
   "maxSpeed":"1,050 km/h",
   "hyper-drive-rating":"Class 0.5",
   "length":"34.75"
}
```
