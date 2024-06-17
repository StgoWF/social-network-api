
# Social Network API

## Description
This project is a Social Network API built using Node.js, Express.js, MongoDB, and Mongoose. It allows users to share their thoughts, react to friends' thoughts, and create a friend list. The API supports CRUD operations for users and thoughts, as well as friend management and reactions to thoughts.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/social-network-api.git
   cd social-network-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the MongoDB server:**
   Ensure you have MongoDB installed and running. You can start MongoDB using:
   ```bash
   mongod
   ```

4. **Seed the database (if needed):**
   To populate the database with initial data, run:
   ```bash
   node seed.js
   ```

5. **Start the server:**
   ```bash
   node server.js
   ```

## Usage
Use Insomnia, Postman, or a similar tool to test the API endpoints.

## API Endpoints

### Users
- **GET** /api/users
  - Get all users
- **GET** /api/users/:userId
  - Get a single user by ID
- **POST** /api/users
  - Create a new user
- **PUT** /api/users/:userId
  - Update a user by ID
- **DELETE** /api/users/:userId
  - Delete a user by ID
- **POST** /api/users/:userId/friends/:friendId
  - Add a friend to a user's friend list
- **DELETE** /api/users/:userId/friends/:friendId
  - Remove a friend from a user's friend list

### Thoughts
- **GET** /api/thoughts
  - Get all thoughts
- **GET** /api/thoughts/:thoughtId
  - Get a single thought by ID
- **POST** /api/thoughts
  - Create a new thought
- **PUT** /api/thoughts/:thoughtId
  - Update a thought by ID
- **DELETE** /api/thoughts/:thoughtId
  - Delete a thought by ID

### Reactions
- **POST** /api/thoughts/:thoughtId/reactions
  - Add a reaction to a thought
- **DELETE** /api/thoughts/:thoughtId/reactions/:reactionId
  - Remove a reaction from a thought

## Walkthrough Video
[Watch the walkthrough video](https://drive.google.com/file/d/1oNrxSLwj81B6VU0iGixAh2g9Hb5ub8w9/view)


## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia

## Repository

The code for social-network-api can be found at the following [GitHub Repository](https://github.com/StgoWF/social-network-api).

## License
This project is licensed under the MIT License.

## Contact
- GitHub: [StgoWF](https://github.com/stgowf)
- Email: stgoweinsteinf@gmail.com


