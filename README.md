<h1>User Management API</h1>
This is a RESTful API for managing users with basic CRUD operations. It allows creating, retrieving, updating, and deleting users while ensuring valid inputs for name, email, and age.

<h2>Features</h2>
<li>Create a user with name, email, and age (with validation checks).</li>
<li>Retrieve all users.</li>
<li>Retrieve a single user by ID.</li>
<li>Update user details using an ID.</li>
<li>Delete a user by ID.</li>

<h2>Input validation for:</h2>
<li>Name: Must be a non-empty string.</li>
<li>Email: Must be a valid email format.</li>
<li>Age: Must be a positive integer.</li>

JSON-formatted API responses.
Proper error handling for invalid input and non-existent users.

<h2>Technologies Used</h2>
<li>Node.js with express</li>
<li>Mongodb</li>
<li>ejs</li>
<li>css</li>

<h2>Setup Instructions</h2>

1. Clone the repository:
   <li>git clone repository-url</li>
   <li>cd repository-name</li>

2. Install dependencies:
   npm install

3. Start the server:
   npm start
4. open command prompt and start mongodb write following 
   mongod
  Make sure the mongodb connect code in main index.js is connected to correct address otherwise database cant connect and throw the error
  
<h2>API Endpoints</h2>
<h3>1.  Home page containing all features</h3>
GET /
<p>response will render the form and options to access all features</p>

<h3>2. Get the form to create User</h3>
GET /user/createAccount
<p>respose will be the form to create user</p>

<h3>3. Create a User</h3>
POST /
<p>Request Body:</p>
<p>{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}
</p>

<p>Response:</p>

<p>{
  "id": "67d2dc2a80586e3e279e5da7",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}</p>

<h3>4. Retrieve All Users</h3>
GET /users/allUser

<p>Response:</p>
<p>[
  {
    "id": "67d2dc2a80586e3e279e5da8",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 25
  }
]</p>

<h3>5. Retrieve a Single User</h3>
GET /users/singleUser

<p>Response:</p>

<p>{
  "id": "67d2dc2a80586e3e279e5da8",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}</p>

<h3>6. Display the specific user form</h3>
POST /user/update
<p>Request Body:</p>
<p>{
    id:"67d2dc2a80586e3e279e5da7"
}</p>
<p>In response it will return the respective user form with details</p>

<h3>7. Update a User</h3>
POST /users/:id

<p>Request Body:</p>

<p>{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 30
}</p>

<p>Response:</p>

<p>{
  "message": "User updated successfully",
}</p>

<h3>8. Delete a User</h3>
POST /api/users/delete
<p>Response:</p>

<p>{
  "message": "User deleted successfully"
}</p>


<h2>Error Handling</h2>
<li>400 Bad Request: Invalid input (e.g., missing fields, invalid email format, age not a positive integer).</li>
<li>404 Not Found: User ID does not exist.</li>

<h2>Sample Validation Rules</h2>
<li>Name must be at least 3 characters long.</li>
<li>Email must be in a valid format (example@domain.com).</li>
<li>Age must be a positive integer.</li>