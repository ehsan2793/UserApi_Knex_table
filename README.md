# UserApi_Knex_table 
this project is practice to set up a database using knex library 

Endpoints
Inside api/users/users-router.js the following endpoints are set up:

 [GET] /api/users
Returns an array of projects as the body of the response.
If there are no projects it responds with an empty array.
 [GET] /api/users/:id
Returns a project with the given id as the body of the response.
If there is no project with the given id it responds with a status code 404.
 [POST] /api/users
Returns the newly created project as the body of the response.
If the request body is missing any of the required fields it responds with a status code 400.
 [PUT] /api/users/:id
Returns the updated project as the body of the response.
If there is no project with the given id it responds with a status code 404.
If the request body is missing any of the required fields it responds with a status code 400.
 [DELETE] /api/users/:id
Returns no response body.
If there is no project with the given id it responds with a status code 404.
 
 
 user table: 
 
 | Field       | Data Type | Metadata                                                               |
| ----------- | --------- | ----------------------------------------------------------------------- |
| id          | number    | do not provide it when creating projects, the database will generate it |
| name        | string    | required                                                                |
| time        | string    | not required                                                                |


 
 model functoions: 
 
 
 get(): calling find returns a promise that resolves to an array of all the users contained in the database.
getId(): this method expects an id as it's only parameter and returns the user corresponding to the id provided or an empty array if no user with that id is found.
insert(): calling insert passing it a user object will add it to the database and return an object with the id of the inserted user. The object looks like this: { id: 123 }.
update(): accepts two arguments, the first is the id of the user to update and the second is an object with the changes to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
remove(): the remove method accepts an id as its first parameter and upon successfully deleting the user from the database it returns the number of records deleted.


this project have not been deployed into heroku however it is deployable
