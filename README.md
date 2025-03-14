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
   git clone <repository-url>
   cd <repository-name>

2. Install dependencies:
   npm install

3. Start the server:
   npm start

<h2>API Endpoints</h2>
1.  Home page containing all features
GET /
response will render the form and options to access all features

2. Get the form to create User
GET /user/createAccount
respose will be the form to create user

3. Create a User
POST /
Request Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}

Response:
{
  "id": "67d2dc2a80586e3e279e5da7",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}

4. Retrieve All Users
GET /users/allUser

Response:
[
  {
    "id": "67d2dc2a80586e3e279e5da8",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 25
  }
]

5. Retrieve a Single User
GET /users/singleUser

Response:
{
  "id": "67d2dc2a80586e3e279e5da8",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}

6. Display the specific user form
POST /user/update
Request Body:
{
    id:"67d2dc2a80586e3e279e5da7"
}
In response it will return the respective user form with details

7. Update a User
POST /users/:id

Request Body:

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 30
}

Response:

{
  "message": "User updated successfully",
}

8. Delete a User

POST /api/users/delete
Response:

{
  "message": "User deleted successfully"
}


<h2>Error Handling</h2>
400 Bad Request: Invalid input (e.g., missing fields, invalid email format, age not a positive integer).
404 Not Found: User ID does not exist.

<h2>Sample Validation Rules</h2>
Name must be at least 3 characters long.
Email must be in a valid format (example@domain.com).
Age must be a positive integer.