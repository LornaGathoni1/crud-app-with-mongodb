# CRUD Operation Project

A simple CRUD (Create, Read, Update, Delete) application using Node.js, Express, MongoDB, and React. This project provides a form to enter user details (name, email, mobile) and save them in a MongoDB database.

## Project Setup

1. **Backend Setup**
   - **Initialize Project**: Run `npm init` in the project directory to create a `package.json` file.
   - **Install Dependencies**:
     ```bash
     npm install express mongoose cors nodemon
     ```
     - `express`: Web framework.
     - `mongoose`: MongoDB object modeling.
     - `cors`: Middleware for Cross-Origin Resource Sharing.
     - `nodemon`: Development tool to auto-restart the server on changes.

2. **Database Setup**
   - Connect to MongoDB on port 27017 with a database named `crudoperation`.
   - Ensure MongoDB is running locally.

3. **Server Configuration**
   - Create an `index.js` file in the `server` folder.
   - Set up Express middleware with `express.json()` and `cors()`.
   - Define a Mongoose schema for `userModel` with fields: `name`, `email`, and `mobile`.
   - Implement CRUD routes:
     - `GET /`: Retrieve all entries.
     - `POST /create`: Add a new entry.
     - `PUT /update`: Update an entry by `_id`.
     - `DELETE /delete/:id`: Delete an entry by `_id`.

4. **Frontend Setup**
   - Create a React application with `create-react-app`.
   - Set up a form to submit `name`, `email`, and `mobile` data.
   - Display and update the list of entries from the MongoDB database.

## Running the Project

1. **Start the Backend Server**
   ```bash
   nodemon server/index.js


## You can view the deployed app below:

### Live Demo
[Click here to view the deployed React app](https://lornagathoni1.github.io/DataScienceHub/)



```python

```
