# BaseAPI

Github link: https://github.com/JoeHuizar/NodeRestAPI

Car Model
Description: Get all the cars from the database
Endpoint: http://localhost:3002/api/v1/car/get-all-cars
Method: GET
Params: none
Request Payload: none
Response:
{
        "id": 1,
        "make": "Honda",
        "model": "Accord",
        "year": "2012",
        "user_id": 1,
        "active": true,
        "created_by": "Joseph75",
        "updated_by": "Joseph75",
        "created_at": "2020-04-18T01:17:37.889Z",
        "updated_at": "2020-04-18T01:22:00.888Z",
        "deleted_at": null,
        "mileage": null
    },
    {
        "id": 3,
        "make": "Honda",
        "model": "Civic",
        "year": "2002",
        "user_id": 1,
        "active": true,
        "created_by": "Joseph75",
        "updated_by": null,
        "created_at": "2020-04-18T03:19:12.864Z",
        "updated_at": "2020-04-18T03:19:12.864Z",
        "deleted_at": null,
        "mileage": null
    },
    {
        "id": 5,
        "make": "Toyota",
        "model": "Corolla",
        "year": "2012",
        "user_id": 3,
        "active": true,
        "created_by": "Joseph75",
        "updated_by": null,
        "created_at": "2020-04-18T03:20:06.165Z",
        "updated_at": "2020-04-18T03:20:06.165Z",
        "deleted_at": null,
        "mileage": null
    },
    {
        "id": 6,
        "make": "Honda",
        "model": "Accord",
        "year": null,
        "user_id": null,
        "active": true,
        "created_by": "Joseph75",
        "updated_by": null,
        "created_at": "2020-04-19T20:40:32.649Z",
        "updated_at": "2020-04-19T20:40:32.649Z",
        "deleted_at": null,
        "mileage": null
    }
_________________________________
 
Description: Get a car by its ID from the database
Endpoint: http://localhost:3002/api/v1/car/get-car-by-id/:id
Method: GET
Params: id - the car id
Request Payload: none
Response:
{
                "id": 5,
                "make": "Toyota",
                "model": "Corolla",
                "year": "2012",
                "user_id": 3,
                "active": true,
                "created_by": "Joseph75",
                "updated_by": null,
                "created_at": "2020-04-12T03:20:06.165Z",
                "updated_at": "2020-04-12T03:20:06.165Z",
                "deleted_at": null,
                "mileage": null
            }

_________________________________
Description: Create a new car record
Endpoint: http://localhost:3002/api/v1/car/create-car
Method: POST
Params: none
Request Payload:
{
    "make": "Ford",
    "model": "F150",
    "year": "2012"
}
Response: 
"data": {
            "id": 8,
            "make": "Ford",
            "model": "F150",
            "year": "2012",
            "user_id": null,
            "active": true,
            "created_by": "Joseph75",
            "updated_by": null,
            "created_at": "2020-04-14T01:31:07.475Z",
            "updated_at": "2020-04-14T01:31:07.475Z",
            "deleted_at": null,
            "mileage": null
        }
_________________________________
Description: Update a car record
Endpoint: http://localhost:3002/api/v1/car/update-car/id/5
Method: PUT
Params: id - the id of the car
Request Payload:
{
    "model": "Tundra"
    
}
Response: 
{
            "id": 5,
            "make": "Toyota",
            "model": "Tundra",
            "year": "2012",
            "user_id": 3,
            "active": true,
            "created_by": "Joseph75",
            "updated_by": "Joseph75",
            "created_at": "2020-04-12T03:20:06.165Z",
            "updated_at": "2020-04-14T01:42:43.468Z",
            "deleted_at": null,
            "mileage": null
        },

_________________________________
Description: Delete a car record
Endpoint: http://localhost:3002/api/v1/car/delete-car/id/:id
Method: DELETE
Params: id - The id of the car
Request Payload: None
Response:
{
            "command": "DELETE",
            "rowCount": 1,
            "oid": null,
            "rows": [],
            "fields": [],
            "_parsers": [],
            "RowCtor": null,
            "rowAsArray": false
        },

